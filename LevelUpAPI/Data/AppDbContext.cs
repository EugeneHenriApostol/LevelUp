using Microsoft.EntityFrameworkCore;
using LevelUpAPI.Models;
namespace LevelUpAPI.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Models.Task> Tasks { get; set; }
        public DbSet<TaskAssignment> TaskAssignments { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // task -> createdby (user)
            modelBuilder.Entity<Models.Task>()
                .HasOne(t => t.CreatedBy)
                .WithMany() // a user can create many task
                .HasForeignKey(t => t.CreatedById)
                .OnDelete(DeleteBehavior.Restrict); // dont delete trainer if they have task

            // Task -> TaskAssignment
            modelBuilder.Entity<Models.Task>()
                .HasMany(t => t.Assignments)
                .WithOne(a => a.Task) 
                .HasForeignKey(a => a.TaskId)
                .OnDelete(DeleteBehavior.Cascade); // delete assignments if task is deleted

            // Trainee (User) -> TaskAssignment
            modelBuilder.Entity<User>()
                .HasMany(u => u.Assignments)
                .WithOne(a => a.Trainee)
                .HasForeignKey(a => a.TraineeId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
