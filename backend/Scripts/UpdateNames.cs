using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using backend.Models;

namespace backend.Scripts
{
    class UpdateNames
    {
        static void Main(string[] args)
        {
            var services = new ServiceCollection();
            services.AddDbContext<RestaurantContext>(options =>
                options.UseSqlServer("Server=localhost,1435;Database=ChinchDB;User Id=sa;Password=Chinch2024Restaurant;TrustServerCertificate=True;"));
            
            var provider = services.BuildServiceProvider();
            using var scope = provider.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<RestaurantContext>();
            
            Console.WriteLine("Обновление названий...");
            
            // Получаем блюда для обновления
            var dishes = context.Dishes.ToList();
            
            foreach (var dish in dishes)
            {
                bool updated = false;
                
                // 1. ОЛИВЬЕ КРАБ И БРИСКЕТ → ОЛИВЬЕ КРАБ | БРИСКЕТ
                if (dish.Name.Contains("ОЛИВЬЕ КРАБ И БРИСКЕТ"))
                {
                    dish.Name = dish.Name.Replace("ОЛИВЬЕ КРАБ И БРИСКЕТ", "ОЛИВЬЕ КРАБ | БРИСКЕТ");
                    updated = true;
                }
                
                // 2. КРУАССАН И БЛИНЫ → КРУАССАН | БЛИНЫ
                if (dish.Name.Contains("КРУАССАН И БЛИНЫ"))
                {
                    dish.Name = dish.Name.Replace("КРУАССАН И БЛИНЫ", "КРУАССАН | БЛИНЫ");
                    updated = true;
                }
                
                // 3. ВАНИЛЬ/ЦИТРУС/ПРАГА/ХАЛВА → ВАНИЛЬ | ЦИТРУС | ПРАГА | ХАЛВА
                if (dish.Options != null && dish.Options.Contains("ВАНИЛЬ/ЦИТРУС/ПРАГА/ХАЛВА"))
                {
                    dish.Options = dish.Options.Replace("ВАНИЛЬ/ЦИТРУС/ПРАГА/ХАЛВА", "ВАНИЛЬ | ЦИТРУС | ПРАГА | ХАЛВА");
                    updated = true;
                }
                
                // 4. ГРЕЙПФРУТ/ГРАНАТ → ГРЕЙПФРУТ | ГРАНАТ
                if (dish.Options != null && dish.Options.Contains("ГРЕЙПФРУТ/ГРАНАТ"))
                {
                    dish.Options = dish.Options.Replace("ГРЕЙПФРУТ/ГРАНАТ", "ГРЕЙПФРУТ | ГРАНАТ");
                    updated = true;
                }
                
                // 5. КОКОСОВОЕ И МИНДАЛЬНОЕ/ФУНДУЧНОЕ/БАНАНОВОЕ/БЕЗЛАКТОЗНОЕ → КОКОСОВОЕ | МИНДАЛЬНОЕ | ФУНДУЧНОЕ | БАНАНОВОЕ | БЕЗЛАКТОЗНОЕ
                if (dish.Options != null && dish.Options.Contains("КОКОСОВОЕ И МИНДАЛЬНОЕ/ФУНДУЧНОЕ/БАНАНОВОЕ/БЕЗЛАКТОЗНОЕ"))
                {
                    dish.Options = dish.Options.Replace("КОКОСОВОЕ И МИНДАЛЬНОЕ/ФУНДУЧНОЕ/БАНАНОВОЕ/БЕЗЛАКТОЗНОЕ", "КОКОСОВОЕ | МИНДАЛЬНОЕ | ФУНДУЧНОЕ | БАНАНОВОЕ | БЕЗЛАКТОЗНОЕ");
                    updated = true;
                }
                
                // 6. НЕГАЗИРОВАННАЯ/ГАЗИРОВАННАЯ → НЕГАЗИРОВАННАЯ | ГАЗИРОВАННАЯ
                if (dish.Name.Contains("НЕГАЗИРОВАННАЯ/ГАЗИРОВАННАЯ"))
                {
                    dish.Name = dish.Name.Replace("НЕГАЗИРОВАННАЯ/ГАЗИРОВАННАЯ", "НЕГАЗИРОВАННАЯ | ГАЗИРОВАННАЯ");
                    updated = true;
                }
                
                if (updated)
                {
                    Console.WriteLine($"Обновлено: {dish.Name}");
                }
            }
            
            context.SaveChanges();
            Console.WriteLine("Готово!");
        }
    }
}
