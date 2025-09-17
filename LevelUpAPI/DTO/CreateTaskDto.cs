using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LevelUpAPI.DTO
{
    public class CreateTaskDto
    {
        public string TaskTitle { get; set; } = string.Empty;
        public string TaskDescription { get; set; } = string.Empty;
        public DateTime DueDate { get; set; }

        // foreign key: trainer creating the task
        public int CreatedById { get; set; }
        public List<int>? AssignedTraineeIds { get; set; }
        public int Points { get; set; } = 0;
    }
}