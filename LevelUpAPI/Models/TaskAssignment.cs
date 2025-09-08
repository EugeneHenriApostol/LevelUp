using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LevelUpAPI.Models
{
    public class TaskAssignment
    {
        public int TaskAssignmentId { get; set; }
        public int TaskId { get; set; }
        public Task Task { get; set; } = null!;
        public DateTime AssignedAt { get; set; } = DateTime.UtcNow;
    }
}