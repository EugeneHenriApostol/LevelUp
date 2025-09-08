using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LevelUpAPI.Models
{
    public class Task
    {
        public int TaskId { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public int Points { get; set; }
        public bool AutoAccept { get; set; } = false; // default false

        // foreign key to trainer
        public int CreatedById { get; set; }
        public User CreatedBy { get; set; } = null!;
    }
}