using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LevelUpAPI.Data;
using LevelUpAPI.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LevelUpAPI.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class SubmissionController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SubmissionController(AppDbContext context)
        {
            _context = context;
        }

        [Authorize(Roles = "Trainee")]
        [HttpPost("{taskId}/submit")]
        public async Task<IActionResult> SubmitTask(int taskId, [FromBody] SubmitTaskDto dto)
        {
            var assignment = await _context.TaskAssignments.FirstOrDefaultAsync(a => a.TaskId == taskId && a.TraineeId == dto.TraineeId);

            if (assignment == null)
            {
                return NotFound(new { message = "Task assignment not found." });
            }

            assignment.SubmissionText = dto.SubmissionText;
            assignment.SubmissionFilePath = dto.SubmissionFilePath;
            assignment.SubmittedAt = DateTime.UtcNow;

            return Ok(new { message = "Task submitted successfully!" });
        }
    }
}