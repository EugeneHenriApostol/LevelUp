using Microsoft.AspNetCore.Mvc;
using LevelUpAPI.Data;
using LevelUpAPI.DTOs;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using LevelUpAPI.Models;
using System.Text;

namespace LevelUpAPI.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;

        public LoginController(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginUserDto dto)
        {
            // 1. Check if user exists
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == dto.Email);
            if (user == null)
                return Unauthorized(new { message = "Invalid email or password" });

            // 2. Verify password
            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))
                return Unauthorized(new { message = "Invalid email or password" });

            // 3. Generate JWT token
            var token = GenerateJwtToken(user);

            // 4. Return response
            return Ok(new LoginResponseDto
            {
                Token = token,
                Role = user.Role,
                UserId = user.UserId
            });
        }

        private string GenerateJwtToken(User user)
        {
            var jwtSettings = _configuration.GetSection("Jwt");

            var jwtKey = jwtSettings["Key"];
            if (string.IsNullOrEmpty(jwtKey))
                throw new InvalidOperationException("JWT Key is not configured.");

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserId.ToString()),
                new Claim(ClaimTypes.Role, user.Role),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(
                issuer: jwtSettings["Issuer"],
                audience: jwtSettings["Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(Convert.ToDouble(jwtSettings["ExpireMinutes"])),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}