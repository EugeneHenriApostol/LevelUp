using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LevelUpAPI.Models;
using LevelUpAPI.Data;
using LevelUpAPI.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace LevelUpAPI.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TaskController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Authorize(Roles = "Trainer")]
        public async Task<IActionResult> GetAllTasks()
        {
            var tasks = await _context.Tasks
                .Include(t => t.CreatedBy)
                .Select(t => new
                {
                    t.TaskId,
                    t.TaskTitle,
                    t.TaskDescription,
                    t.DueDate,
                    t.CreatedById,
                    CreatedByName = $"{t.CreatedBy.FirstName} {t.CreatedBy.LastName}"
                })
                .ToListAsync();

            return Ok(tasks);
        }

        // POST: api/task
        [Authorize(Roles = "Trainer")]
        [HttpPost]
        public async Task<IActionResult> CreateTask([FromBody] CreateTaskDto dto)
        {
            // validate to make sure trainer is the one creating task
            var trainer = await _context.Users.FirstOrDefaultAsync(u => u.UserId == dto.CreatedById && u.Role == "Trainer");
            if (trainer == null)
            {
                return BadRequest(new { message = "Invalid Trainer ID or User is not a Trainer" });
            }

            // map dto to task model
            var task = new Models.Task
            {
                TaskTitle = dto.TaskTitle,
                TaskDescription = dto.TaskDescription,
                DueDate = dto.DueDate,
                CreatedById = dto.CreatedById,
                CreatedBy = trainer,
            };

            // save to db
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            // assign task to all trainees
            var trainees = await _context.Users.Where(u => u.Role == "Trainee").ToListAsync();
            var assignments = trainees.Select(t => new TaskAssignment
            {
                TaskId = task.TaskId,
                TraineeId = t.UserId,
            }).ToList();

            _context.TaskAssignments.AddRange(assignments);

            await _context.SaveChangesAsync();

            // return response
            return Ok(new CreateTaskResponse
            {
                TaskId = task.TaskId,
                TaskTitle = task.TaskTitle,
                TaskDescription = task.TaskDescription,
                DueDate = task.DueDate,
                Points = task.Points,
                CreatedById = task.CreatedById,
                CreatedByName = $"{trainer.FirstName} {trainer.LastName}"
            });
        }
        // PUT: api/task/{id}
        [Authorize(Roles = "Trainer")]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTask(int id, [FromBody] CreateTaskDto dto)
        {
            var task = await _context.Tasks.Include(t => t.CreatedBy).FirstOrDefaultAsync(t => t.TaskId == id);
            if (task == null)
            {
                return NotFound(new { message = "Task not found." });
            }

            // Optional: Verify that the trainer updating is the same as the creator
            if (task.CreatedById != dto.CreatedById)
            {
                return BadRequest(new { message = "You can only update tasks you created." });
            }

            // Update task fields
            task.TaskTitle = dto.TaskTitle;
            task.TaskDescription = dto.TaskDescription;
            task.DueDate = dto.DueDate;

            _context.Tasks.Update(task);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Task updated successfully!",
                task = new CreateTaskResponse
                {
                    TaskId = task.TaskId,
                    TaskTitle = task.TaskTitle,
                    TaskDescription = task.TaskDescription,
                    DueDate = task.DueDate,
                    CreatedById = task.CreatedById,
                    CreatedByName = $"{task.CreatedBy.FirstName} {task.CreatedBy.LastName}"
                }
            });
        }

        // delete a task
        [HttpDelete("{id}")]
        [Authorize(Roles = "Trainer")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
            {
                return NotFound(new { message = "Task not found." });
            }

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return Ok(new { message = "User account deleted successfully." });
        }

    }
}