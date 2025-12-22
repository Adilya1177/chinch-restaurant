using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace DataSeeder
{
    public static class DataSeedPart2
    {
        public static void SeedMoreData(IServiceProvider serviceProvider)
        {
            using (var context = new RestaurantContext(
                serviceProvider.GetRequiredService<DbContextOptions<RestaurantContext>>()))
            {
                Console.WriteLine("Добавляем остальные напитки...");

                // 3. SPECIAL напитки
                context.Dishes.AddRange(
                    new Dish { Name = "СИБИРСКИЙ ЛАТТЕ", MainCategory = "Напитки", SubCategory = "SPECIAL", VolumeInfo = "350 мл", BasePrice = "450 р" },
                    new Dish { Name = "РАФ МАСАЛА", MainCategory = "Напитки", SubCategory = "SPECIAL", VolumeInfo = "350 мл", BasePrice = "450 р" },
                    new Dish { Name = "ЛАТТЕ АРАХИС", MainCategory = "Напитки", SubCategory = "SPECIAL", VolumeInfo = "350 мл", BasePrice = "420 р" },
                    new Dish { Name = "ЛАТТЕ ИМБИРНЫЙ ПРЯНИК", MainCategory = "Напитки", SubCategory = "SPECIAL", VolumeInfo = "350 мл", BasePrice = "420 р" },
                    new Dish { Name = "ГЛИНТВЕЙН Б/А, ВИШНЯ, БАРБАРИС", MainCategory = "Напитки", SubCategory = "SPECIAL", VolumeInfo = "250 мл", BasePrice = "490 р" },
                    new Dish { Name = "ЗИМНИЙ БАМБЛ, МАНДАРИН", MainCategory = "Напитки", SubCategory = "SPECIAL", VolumeInfo = "350 мл", BasePrice = "490 р" },
                    new Dish { Name = "АЛТАЙСКИЙ ЧАЙ. КЛЮКВА, МОЖЖЕВЕЛЬНИК", MainCategory = "Напитки", SubCategory = "SPECIAL", VolumeInfo = "500 мл", BasePrice = "550 р" },
                    new Dish { Name = "СМОРОДИНА, АПЕЛЬСИН, МАСАЛА", MainCategory = "Напитки", SubCategory = "SPECIAL", VolumeInfo = "500 мл", BasePrice = "550 р" },
                    new Dish { Name = "МОРОШКА, ПИХТА, МАЛИНА", MainCategory = "Напитки", SubCategory = "SPECIAL", VolumeInfo = "500 мл", BasePrice = "550 р" }
                );

                // 4. ХОЛОДНЫЕ НАПИТКИ
                context.Dishes.AddRange(
                    new Dish { Name = "АПЕРОЛЬ Б/А", MainCategory = "Напитки", SubCategory = "ХОЛОДНЫЕ НАПИТКИ", VolumeInfo = "250 мл", BasePrice = "450 р" },
                    new Dish { Name = "ДЮШЕС", MainCategory = "Напитки", SubCategory = "ХОЛОДНЫЕ НАПИТКИ", VolumeInfo = "250 мл", BasePrice = "410 р" },
                    new Dish { Name = "КЛУБНИКА-МЯТА", MainCategory = "Напитки", SubCategory = "ХОЛОДНЫЕ НАПИТКИ", VolumeInfo = "250 мл", BasePrice = "410 р" },
                    new Dish { Name = "ГРЕЙПФРУТ, БУРБОНСКАЯ ВАНИЛЬ", MainCategory = "Напитки", SubCategory = "ХОЛОДНЫЕ НАПИТКИ", VolumeInfo = "250 мл", BasePrice = "470 р" },
                    new Dish { Name = "МАНГО-МАРАКУЙЯ", MainCategory = "Напитки", SubCategory = "ХОЛОДНЫЕ НАПИТКИ", VolumeInfo = "250 мл", BasePrice = "450 р" },
                    new Dish { Name = "МАНГО, МАТЧА, КОКОС", MainCategory = "Напитки", SubCategory = "ХОЛОДНЫЕ НАПИТКИ", VolumeInfo = "250 мл", BasePrice = "470 р" },
                    new Dish { Name = "ГРЕЙПФРУТ-КЛУБНИКА", MainCategory = "Напитки", SubCategory = "ХОЛОДНЫЕ НАПИТКИ", VolumeInfo = "250 мл", BasePrice = "450 р" },
                    new Dish { Name = "ЗЕЛЕНОЕ ЯБЛОКО, САГАН-ДАЙЛЯ", MainCategory = "Напитки", SubCategory = "ХОЛОДНЫЕ НАПИТКИ", VolumeInfo = "250 мл", BasePrice = "420 р" },
                    new Dish { Name = "ПЕРСИК, ЛАЙМ, ЭСТРАГОН", MainCategory = "Напитки", SubCategory = "ХОЛОДНЫЕ НАПИТКИ", VolumeInfo = "250 мл", BasePrice = "450 р" },
                    new Dish { Name = "СМУЗИ КЛУБНИКА-КОКОС", MainCategory = "Напитки", SubCategory = "ХОЛОДНЫЕ НАПИТКИ", VolumeInfo = "400 мл", BasePrice = "450 р" },
                    new Dish { Name = "СМУЗИ АПЕЛЬСИН-ЧЕРНИКА", MainCategory = "Напитки", SubCategory = "ХОЛОДНЫЕ НАПИТКИ", VolumeInfo = "400 мл", BasePrice = "450 р" }
                );

                // 5. ЧАЙ / ТИЗАН
                context.Dishes.AddRange(
                    new Dish { Name = "ДАРДЖИЛИНГ", MainCategory = "Напитки", SubCategory = "ЧАЙ / ТИЗАН", VolumeInfo = "500 мл", BasePrice = "390 р" },
                    new Dish { Name = "ЭРЛ ГРЕЙ", MainCategory = "Напитки", SubCategory = "ЧАЙ / ТИЗАН", VolumeInfo = "500 мл", BasePrice = "390 р" },
                    new Dish { Name = "СЕНЧА", MainCategory = "Напитки", SubCategory = "ЧАЙ / ТИЗАН", VolumeInfo = "500 мл", BasePrice = "390 р" },
                    new Dish { Name = "ЖАСМИН", MainCategory = "Напитки", SubCategory = "ЧАЙ / ТИЗАН", VolumeInfo = "500 мл", BasePrice = "390 р" },
                    new Dish { Name = "СБОР ТРАВ", MainCategory = "Напитки", SubCategory = "ЧАЙ / ТИЗАН", VolumeInfo = "500 мл", BasePrice = "390 р" },
                    new Dish { Name = "ГРЕЧИШНЫЙ ЧАЙ", MainCategory = "Напитки", SubCategory = "ЧАЙ / ТИЗАН", VolumeInfo = "500 мл", BasePrice = "390 р" },
                    new Dish { Name = "ШИПОВНИК-МАЛИНА", MainCategory = "Напитки", SubCategory = "ЧАЙ / ТИЗАН", VolumeInfo = "500 мл", BasePrice = "420 р" },
                    new Dish { Name = "ГРЕЧИХА-МАНГО", MainCategory = "Напитки", SubCategory = "ЧАЙ / ТИЗАН", VolumeInfo = "500 мл", BasePrice = "550 р" },
                    new Dish { Name = "ОБЛЕПИХА-ЦИТРУС", MainCategory = "Напитки", SubCategory = "ЧАЙ / ТИЗАН", VolumeInfo = "500 мл", BasePrice = "550 р" },
                    new Dish { Name = "ЧЕРНИКА-БРУСНИКА", MainCategory = "Напитки", SubCategory = "ЧАЙ / ТИЗАН", VolumeInfo = "500 мл", BasePrice = "550 р" },
                    new Dish { Name = "МАЛИНА-МАРАКУЙЯ", MainCategory = "Напитки", SubCategory = "ЧАЙ / ТИЗАН", VolumeInfo = "500 мл", BasePrice = "550 р" }
                );

                // 6. СОК БУТ.
                context.Dishes.AddRange(
                    new Dish { Name = "ЯБЛОКО", MainCategory = "Напитки", SubCategory = "СОК БУТ.", VolumeInfo = "200 мл", BasePrice = "290 р" },
                    new Dish { Name = "ВИШНЯ", MainCategory = "Напитки", SubCategory = "СОК БУТ.", VolumeInfo = "200 мл", BasePrice = "290 р" },
                    new Dish { Name = "ПЕРСИК", MainCategory = "Напитки", SubCategory = "СОК БУТ.", VolumeInfo = "200 мл", BasePrice = "290 р" }
                );

                // 7. ВОДА
                context.Dishes.Add(new Dish { 
                    Name = "MARUHA", 
                    MainCategory = "Напитки", 
                    SubCategory = "ВОДА", 
                    VolumeInfo = "500 мл", 
                    BasePrice = "350 р",
                    Options = "НЕГАЗИРОВАННАЯ | ГАЗИРОВАННАЯ" 
                });

                // 8. ПИВО
                context.Dishes.AddRange(
                    new Dish { Name = "ESTRELLA DAMN", MainCategory = "Напитки", SubCategory = "ПИВО", VolumeInfo = "330 мл", BasePrice = "490 р" },
                    new Dish { Name = "INEDIT DAMN", MainCategory = "Напитки", SubCategory = "ПИВО", VolumeInfo = "330 мл", BasePrice = "490 р" },
                    new Dish { Name = "CLAUSTHALER", MainCategory = "Напитки", SubCategory = "ПИВО", VolumeInfo = "330 мл", BasePrice = "390 р" },
                    new Dish { Name = "LEFFE BRUNE", MainCategory = "Напитки", SubCategory = "ПИВО", VolumeInfo = "330 мл", BasePrice = "490 р" },
                    new Dish { Name = "CIDER VAL DE RANCE", MainCategory = "Напитки", SubCategory = "ПИВО", VolumeInfo = "750 мл", BasePrice = "1350 р" },
                    new Dish { Name = "CIDER GALIPETTE", MainCategory = "Напитки", SubCategory = "ПИВО", VolumeInfo = "330 мл", BasePrice = "790 р" }
                );

                context.SaveChanges();
                Console.WriteLine($"Добавлено еще {41} записей напитков.");
                Console.WriteLine($"Всего записей: {context.Dishes.Count()}");
            }
        }
    }
}
