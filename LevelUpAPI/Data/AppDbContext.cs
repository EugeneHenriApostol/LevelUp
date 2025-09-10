using Microsoft.EntityFrameworkCore;
using LevelUpAPI.Models;
namespace LevelUpAPI.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Models.Task> Tasks { get; set; }
        public DbSet<TaskAssignment> TaskAssignments { get; set; }
        public DbSet<LoginHistory> LoginHistories { get; set; }
    }
}
