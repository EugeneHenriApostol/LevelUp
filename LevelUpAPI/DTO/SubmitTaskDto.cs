using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LevelUpAPI.DTO
{
    public class SubmitTaskDto
    {
        public int TraineeId { get; set; }
        public string? SubmissionText { get; set; }
        public string? SubmissionFilePath { get; set; }
    }
}