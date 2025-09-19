using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LevelUpAPI.Models
{
    public class TaskAssignment
    {
        public int TaskAssignmentId { get; set; }
        // foreign key to Task
        public int TaskId { get; set; }
        public Task Task { get; set; } = null!;
        // foreign key to Trainee
        public int TraineeId { get; set; }
        public User Trainee { get; set; } = null!;
        // submission detais
        public string? SubmissionText { get; set; } // e.g. essay or notes
        public string? SubmissionFilePath { get; set; } // if file upload is supported
        public DateTime? SubmittedAt { get; set; }

        // points assigned by Trainer
        public int? PointsAwarded { get; set; }
        public bool IsGraded { get; set; } = false;
        public string? FeedBack { get; set; }
        public int GradedById { get; set; }
    }
}