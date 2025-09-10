using System.ComponentModel.DataAnnotations;

namespace LevelUpAPI.DTOs
{
    public class ForgotPasswordDto
    {
        [Required, EmailAddress]
        public string Email { get; set; } = string.Empty;
    }
}
