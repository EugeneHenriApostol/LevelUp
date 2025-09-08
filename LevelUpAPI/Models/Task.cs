using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LevelUpAPI.Models
{
    public class Task
    {
        public int TaskId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime DueDate { get; set; }

        // foreign key to trainer
        public int CreatedById { get; set; }
        public User CreatedBy { get; set; } = null!;
    }
}