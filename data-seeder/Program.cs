using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using backend.Models;

namespace DataSeeder
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("=== CHINCH Restaurant Data Seeder ===");
            
            // Создаем сервисы
            var services = new ServiceCollection();
            
            // Настраиваем DbContext
            services.AddDbContext<RestaurantContext>(options =>
                options.UseSqlServer("Server=localhost,1435;Database=ChinchDB;User Id=sa;Password=YourStrong!Passw0rd;TrustServerCertificate=True;"));
            
            var serviceProvider = services.BuildServiceProvider();
            
            try
            {
                // Часть 1: Основные данные (еда и часть напитков)
                DataSeed.SeedData(serviceProvider);
                
                // Часть 2: Остальные напитки
                DataSeedPart2.SeedMoreData(serviceProvider);
                
                // Часть 3: Блюда из яиц и дополнения
                DataSeedEggDishes.SeedEggDishesData(serviceProvider);
                
                Console.WriteLine("\n=== Заполнение завершено успешно! ===");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"ОШИБКА: {ex.Message}");
                if (ex.InnerException != null)
                {
                    Console.WriteLine($"Внутренняя ошибка: {ex.InnerException.Message}");
                }
            }
        }
    }
}
