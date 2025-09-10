using System;

namespace LevelUpAPI.Models
{
    public class LoginHistory
    {
        public int LoginHistoryId { get; set; }
        public int UserId { get; set; }
        public string Email { get; set; } = string.Empty;
        public DateTime LoginTime { get; set; }
        public string IpAddress { get; set; } = string.Empty;

        // Navigation property
        public User User { get; set; }
    }
}