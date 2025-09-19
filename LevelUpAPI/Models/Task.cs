using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LevelUpAPI.Models
{
    public class Task
    {
        public int TaskId { get; set; }
        public string TaskTitle { get; set; } = string.Empty;
        public string TaskDescription { get; set; } = string.Empty;
        public DateTime DueDate { get; set; }
        public int Points { get; set; }

        // foreign key to trainer
        public int CreatedById { get; set; }
        public User CreatedBy { get; set; } = null!;

        // navigation property for all assignments of this task
        public List<TaskAssignment> Assignments { get; set; } = new();
    }
}