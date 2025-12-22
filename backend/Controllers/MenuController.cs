using Microsoft.AspNetCore.Mvc;
using backend.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using System;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MenuController : ControllerBase
    {
        private readonly RestaurantContext _context;

        public MenuController(RestaurantContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetDishes()
        {
            var dishes = _context.Dishes.ToList();
            return Ok(dishes);
        }

        [HttpGet("category/{subCategory}")]
        public IActionResult GetDishesBySubCategory(string subCategory)
        {
            var dishes = _context.Dishes
                .Where(d => d.SubCategory == subCategory)
                .ToList();
            return Ok(dishes);
        }

        [HttpGet("maincategory/{mainCategory}")]
        public IActionResult GetDishesByMainCategory(string mainCategory)
        {
            var dishes = _context.Dishes
                .Where(d => d.MainCategory == mainCategory)
                .ToList();
            return Ok(dishes);
        }

        [HttpPost("update-names")]
        public async Task<IActionResult> UpdateDishNames()
        {
            try
            {
                var dishes = await _context.Dishes.ToListAsync();
                var updatedCount = 0;
        
                foreach (var dish in dishes)
                {
                    var originalName = dish.Name;
                    var originalOptions = dish.Options;
            
                    // 1. ОЛИВЬЕ КРАБ И БРИСКЕТ → ОЛИВЬЕ КРАБ | БРИСКЕТ
                    dish.Name = dish.Name.Replace("ОЛИВЬЕ КРАБ И БРИСКЕТ", "ОЛИВЬЕ КРАБ | БРИСКЕТ");
            
                    // 2. КРУАССАН И БЛИНЫ → КРУАССАН | БЛИНЫ
                    dish.Name = dish.Name.Replace("КРУАССАН И БЛИНЫ", "КРУАССАН | БЛИНЫ");
            
                    // 3. ВАНИЛЬ/ЦИТРУС/ПРАГА/ХАЛВА → ВАНИЛЬ | ЦИТРУС | ПРАГА | ХАЛВА
                    if (dish.Options != null)
                        dish.Options = dish.Options.Replace("ВАНИЛЬ/ЦИТРУС/ПРАГА/ХАЛВА", "ВАНИЛЬ | ЦИТРУС | ПРАГА | ХАЛВА");
            
                    // 4. ГРЕЙПФРУТ/ГРАНАТ → ГРЕЙПФРУТ | ГРАНАТ
                    if (dish.Options != null)
                        dish.Options = dish.Options.Replace("ГРЕЙПФРУТ/ГРАНАТ", "ГРЕЙПФРУТ | ГРАНАТ");
            
                    // 5. КОКОСОВОЕ И МИНДАЛЬНОЕ/ФУНДУЧНОЕ/БАНАНОВОЕ/БЕЗЛАКТОЗНОЕ → КОКОСОВОЕ | МИНДАЛЬНОЕ | ФУНДУЧНОЕ | БАНАНОВОЕ | БЕЗЛАКТОЗНОЕ
                    if (dish.Options != null)
                        dish.Options = dish.Options.Replace("КОКОСОВОЕ И МИНДАЛЬНОЕ/ФУНДУЧНОЕ/БАНАНОВОЕ/БЕЗЛАКТОЗНОЕ", "КОКОСОВОЕ | МИНДАЛЬНОЕ | ФУНДУЧНОЕ | БАНАНОВОЕ | БЕЗЛАКТОЗНОЕ");
            
                    // 6. НЕГАЗИРОВАННАЯ/ГАЗИРОВАННАЯ → НЕГАЗИРОВАННАЯ | ГАЗИРОВАННАЯ
                    dish.Name = dish.Name.Replace("НЕГАЗИРОВАННАЯ/ГАЗИРОВАННАЯ", "НЕГАЗИРОВАННАЯ | ГАЗИРОВАННАЯ");
            
                    if (originalName != dish.Name || originalOptions != dish.Options)
                        updatedCount++;
                 }
        
                await _context.SaveChangesAsync();
        
                return Ok(new { 
                    message = "Названия успешно обновлены", 
                    updatedCount = updatedCount,
                    totalCount = dishes.Count 
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }

        [HttpPost("update-options")]
        public async Task<IActionResult> UpdateOptions([FromBody] UpdateOptionsRequest request)
        {
            try
            {
                var dish = await _context.Dishes.FindAsync(request.Id);
                if (dish == null)
                    return NotFound(new { error = $"Блюдо с ID {request.Id} не найдено" });
                
                dish.Options = request.NewOptions;
                await _context.SaveChangesAsync();
                
                return Ok(new { 
                    message = "Опции успешно обновлены",
                    dish = dish 
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }

        [HttpPost("fix-bumble-price")]
        public async Task<IActionResult> FixBumbleCaramelPrice()
        {
            var dish = await _context.Dishes.FindAsync(73);
            if (dish == null)
                return NotFound("Блюдо не найдено");
    
            // Меняем | на / как у других напитков
            dish.PriceInfo = "420 / 450 / 850 р";
            await _context.SaveChangesAsync();
    
            return Ok($"Обновлено: {dish.Name} -> {dish.PriceInfo}");
        }
    }

    public class UpdateOptionsRequest
    {
        public int Id { get; set; }
        public string NewOptions { get; set; }
    }
}