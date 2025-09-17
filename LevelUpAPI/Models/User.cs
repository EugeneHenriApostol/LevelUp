namespace LevelUpAPI.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public int TotalPoints { get; set; } = 0;

        // navigation property for all task assignments of this user
        public List<TaskAssignment> Assignments { get; set; } = []
    }
}
