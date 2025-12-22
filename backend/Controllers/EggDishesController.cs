using Microsoft.AspNetCore.Mvc;
using backend.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EggDishesController : ControllerBase
    {
        private readonly RestaurantContext _context;

        public EggDishesController(RestaurantContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetEggDishes()
        {
            var dishes = _context.EggDishes
                .Include(d => d.Addons)
                .ToList();
            return Ok(dishes);
        }

        [HttpGet("addons")]
        public IActionResult GetEggAddons()
        {
            var addons = _context.EggAddons.ToList();
            return Ok(addons);
        }
    }
}
