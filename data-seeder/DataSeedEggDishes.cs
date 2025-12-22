using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace DataSeeder
{
    public static class DataSeedEggDishes
    {
        public static void SeedEggDishesData(IServiceProvider serviceProvider)
        {
            using (var context = new RestaurantContext(
                serviceProvider.GetRequiredService<DbContextOptions<RestaurantContext>>()))
            {
                Console.WriteLine("Добавляем блюда из яиц и дополнения...");
                
                // Проверяем, есть ли уже дополнения
                if (context.EggAddons.Any())
                {
                    Console.WriteLine("Дополнения для яичных блюд уже есть. Пропускаем.");
                    return;
                }
                
                // Создаем дополнения
                var addons = new[]
                {
                    new EggAddon { Name = "ЛОСОСЬ", Price = 350 },
                    new EggAddon { Name = "КРЕВЕТКИ", Price = 330 },
                    new EggAddon { Name = "КРАБ", Price = 450 },
                    new EggAddon { Name = "ПАСТРАМИ", Price = 290 },
                    new EggAddon { Name = "ИНДЕЙКА", Price = 290 },
                    new EggAddon { Name = "ХАШБРАУН", Price = 250 },
                    new EggAddon { Name = "ПАРМЕЗАН", Price = 230 },
                    new EggAddon { Name = "ФЕТА", Price = 230 },
                    new EggAddon { Name = "СТРАЧАТЕЛЛА", Price = 270 },
                    new EggAddon { Name = "КРЕМ-ЧИЗ", Price = 230 },
                    new EggAddon { Name = "АВОКАДО", Price = 270 },
                    new EggAddon { Name = "САЛАТ ИЗ ТОМАТОВ", Price = 270 },
                    new EggAddon { Name = "ШПИНАТ", Price = 250 }
                };
                
                context.EggAddons.AddRange(addons);
                context.SaveChanges();
                
                Console.WriteLine($"Добавлено {addons.Length} дополнений для яичных блюд.");
                
                // Создаем основные яичные блюда в таблице EggDishes
                // Находим базовые блюда из Dishes
                var eggDishesInMenu = context.Dishes
                    .Where(d => d.SubCategory == "БЛЮДА ИЗ ЯИЦ")
                    .ToList();
                
                foreach (var dish in eggDishesInMenu)
                {
                    var eggDish = new EggDish
                    {
                        Name = dish.Name,
                        BasePrice = 250 // Цена из меню
                    };
                    
                    context.EggDishes.Add(eggDish);
                }
                
                context.SaveChanges();
                Console.WriteLine($"Добавлено {eggDishesInMenu.Count} яичных блюд.");
                
                // Связываем все дополнения со всеми яичными блюдами (многие-ко-многим)
                var allEggDishes = context.EggDishes.ToList();
                var allAddons = context.EggAddons.ToList();
                
                foreach (var eggDish in allEggDishes)
                {
                    foreach (var addon in allAddons)
                    {
                        eggDish.Addons.Add(addon);
                    }
                }
                
                context.SaveChanges();
                Console.WriteLine("Созданы связи многие-ко-многим между блюдами и дополнениями.");
            }
        }
    }
}
