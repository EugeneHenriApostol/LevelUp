using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using LevelUpAPI.Models;
using System.Security.Claims;

namespace LevelUpAPI.Controller
{
    public class BaseController : ControllerBase
    {
        protected int GetCurrentUserId() => int.Parse(User.FindFirst("UserId")!.Value);

        protected string GetCurrentUserRole() => User.FindFirst(ClaimTypes.Role)!.Value;
    }
}