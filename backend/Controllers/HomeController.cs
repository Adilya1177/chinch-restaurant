using Microsoft.AspNetCore.Mvc;

namespace Chinch.Backend.Controllers
{
    [ApiController]
    [Route("/")]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(new { 
                message = "CHINCH Restaurant API", 
                version = "1.0",
                endpoints = new {
                    menu = "/api/menu",
                    reservation = "/api/reservation",
                    swagger = "/swagger"
                }
            });
        }
    }
}