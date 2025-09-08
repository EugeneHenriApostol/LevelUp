using Microsoft.AspNetCore.Mvc;
using LevelUpAPI.Data;
using LevelUpAPI.Models;
using LevelUpAPI.Dto;
using Microsoft.EntityFrameworkCore;

namespace LevelUpAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SignUpController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SignUpController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Registration
        [HttpGet]

        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _context.Users
                .Select(u => new
                {
                    u.UserId,
                    u.FirstName,
                    u.LastName,
                    u.Email,
                    u.Role,
                    u.CreatedAt
                })
                .ToListAsync();

            return Ok(users);
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterUserDto dto)
        {
            // 1. Check if email already exists
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == dto.Email);
            if (existingUser != null)
            {
                return BadRequest(new { message = "Email is already registered." });
            }

            // 2. Hash the password (important!)
            string hashedPassword = BCrypt.Net.BCrypt.HashPassword(dto.Password);

            // 3. Create user entity
            var user = new User
            {
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Email = dto.Email,
                Password = hashedPassword,
                Role = dto.Role,
                CreatedAt = DateTime.UtcNow
            };

            // 4. Save to DB
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            // 5. Return response without password
            return Ok(new
            {
                message = "User registered successfully!",
                user = new
                {
                    user.UserId,
                    user.FirstName,
                    user.LastName,
                    user.Email,
                    user.Role,
                    user.CreatedAt
                }

                
            });
        }
    }
}
