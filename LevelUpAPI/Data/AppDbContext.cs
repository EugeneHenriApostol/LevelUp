using Microsoft.EntityFrameworkCore;
using LevelUpAPI.Models;

namespace LevelUpAPI.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<User> Users { get; set; }
    }
}
