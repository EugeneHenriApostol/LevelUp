using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace LevelUpAPI.DTO
{
    public class CreateTaskDto
    {
        [Required]
        public string TaskTitle { get; set; } = string.Empty;
        [Required]
        public string TaskDescription { get; set; } = string.Empty;
        [Required]
        public DateTime DueDate { get; set; }
        // Optional: List of trainees to assign
        // If null or empty, assign to all trainees
        // public List<int>? AssignedTraineeIds { get; set; }
        [Range(1, 1000)]
        public int Points { get; set; } = 0;
    }
}