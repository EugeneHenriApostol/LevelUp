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
    public class SubmissionController : BaseController
    {
        private readonly AppDbContext _context;

        public SubmissionController(AppDbContext context)
        {
            _context = context;
        }

        [Authorize(Roles = "Trainee")]
        [HttpPost("{taskId}/submit")]
        public async Task<IActionResult> SubmitTask(int taskId, [FromForm] List<IFormFile> files)
        {
            var traineeId = GetCurrentUserId();

            var assignment = await _context.TaskAssignments
                .FirstOrDefaultAsync(a => a.TaskId == taskId && a.TraineeId == traineeId);

            if (assignment == null)
            {
                return NotFound(new { message = "Task assignment not found." });
            }

            // prevent multiple submissions
            if (assignment.SubmittedAt != null)
            {
                return BadRequest(new { message = "Task already submitted" });
            }

            if (files == null || files.Count == 0)
            {
                return BadRequest(new { message = "At least one file must be uploaded." });
            }

            // save files to disk
            var uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", "submissions");
            Directory.CreateDirectory(uploadFolder);

            var savedFilePaths = new List<string>();
            foreach (var file in files)
            {
                var fileName = $"{Guid.NewGuid()}_{Path.GetFileName(file.FileName)}";
                var filePath = Path.Combine(uploadFolder, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                savedFilePaths.Add($"/uploads/submissions/{fileName}"); // relative file path
            }

            // store metadata in db
            assignment.SubmissionFilePath = string.Join(";", savedFilePaths);
            assignment.SubmittedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Files submitted successfully!",
                files = savedFilePaths
            });
        }

        [Authorize(Roles = "Trainer")]
        [HttpPost("{taskAssignmentId}/grade")]
        public async Task<IActionResult> GradeSubmission(int taskAssignmentId, [FromBody] GradeTaskDto dto)
        {
            var trainerId = GetCurrentUserId();
            var assignment = await _context.TaskAssignments
                .Include(a => a.Trainee)
                .FirstOrDefaultAsync(a => a.TaskAssignmentId == taskAssignmentId);

            if (assignment == null)
            {
                return NotFound(new { message = "Task assignment not found." });
            }

            assignment.PointsAwarded = dto.PointsAwarded;
            assignment.IsGraded = true;
            assignment.FeedBack = dto.FeedBack;
            assignment.GradedById = trainerId;

            if (dto.PointsAwarded < 0 || dto.PointsAwarded > assignment.Task.Points)
            {
                return BadRequest(new { message = "Invalid points awarded." });
            }

            // update trainee's total points
            assignment.Trainee.TotalPoints += dto.PointsAwarded;

            await _context.SaveChangesAsync();

            return Ok(new { message = "Submission graded successfully" });
        }

        [HttpGet("leaderboard")]
        [Authorize(Roles = "Trainer,Trainee")]
        public async Task<IActionResult> GetLeaderboard()
        {
            var leaderboard = await _context.Users
                .Where(u => u.Role == "Trainee")
                .OrderByDescending(u => u.TotalPoints)
                .Select(u => new
                {
                    u.UserId,
                    Name = $"{u.FirstName} {u.LastName}",
                    u.TotalPoints
                })
                .ToListAsync();

            return Ok(leaderboard);
        }
    }
}