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
        
        [HttpGet("alltasks")]
        public async Task<IActionResult> GetAllTasks()
        {
            var tasks = await _context.Tasks
                .Include(t => t.CreatedBy)
                .Select(t => new
                {
                    t.TaskId,
                    t.Title,
                    t.Description,
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
                Title = dto.Title,
                Description = dto.Description,
                DueDate = dto.DueDate,
                CreatedById = dto.CreatedById,
                CreatedBy = trainer,
            };

            // save to db
            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            // return response
            return Ok(new CreateTaskResponse
            {
                TaskId = task.TaskId,
                Title = task.Title,
                Description = task.Description,
                DueDate = task.DueDate,
                CreatedById = task.CreatedById,
                CreatedByName = $"{trainer.FirstName} {trainer.LastName}"
            });
        }
    }
}