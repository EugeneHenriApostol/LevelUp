using Microsoft.AspNetCore.Mvc;
using LevelUpAPI.Data;
using LevelUpAPI.Models;
using LevelUpAPI.Dto;
using Microsoft.EntityFrameworkCore;

namespace LevelUpAPI.Controllers
{
    [ApiController]
    [Route("api/auth")]
    public class SignUpController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SignUpController(AppDbContext context)
        {
            _context = context;
        }

        // Get all users
        [HttpGet("users")]  
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

        // User Registration
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { message = "Invalid data.", errors = ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage) });
            }

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

        // Delete User by ID
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
                return NotFound(new { message = "User not found" });

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "User deleted successfully" });
        }   

        // Update User details
        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] RegisterUserDto dto)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound(new { message = "User not found." });
            }

            // Update fields
            user.FirstName = dto.FirstName;
            user.LastName = dto.LastName;
            user.Email = dto.Email;
            user.Role = dto.Role;

            // Update password if new one is provided
            if (!string.IsNullOrWhiteSpace(dto.Password))
            {
                user.Password = BCrypt.Net.BCrypt.HashPassword(dto.Password);
            }

            _context.Users.Update(user);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "User updated successfully!",
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
