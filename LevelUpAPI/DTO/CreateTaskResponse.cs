using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LevelUpAPI.DTO
{
    public class CreateTaskResponse
    {
        public int TaskId { get; set; }
        public string TaskTitle { get; set; } = string.Empty;
        public string TaskDescription { get; set; } = string.Empty;
        public DateTime DueDate { get; set; }
        public int Points { get; set; }

        public int CreatedById { get; set; }
        public string CreatedByName { get; set; } = string.Empty;

    }
}