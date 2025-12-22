using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace DataSeeder
{
    public static class DataSeed
    {
        public static void SeedData(IServiceProvider serviceProvider)
        {
            using (var context = new RestaurantContext(
                serviceProvider.GetRequiredService<DbContextOptions<RestaurantContext>>()))
            {
                // Проверяем, есть ли уже данные
                if (context.Dishes.Any())
                {
                    Console.WriteLine("База данных уже содержит данные. Пропускаем заполнение.");
                    return;
                }

                Console.WriteLine("Заполняем базу данных...");

                // ЕДА
                // 1. ЗАВТРАКИ НА ВЕСЬ ДЕНЬ
                context.Dishes.AddRange(
                    new Dish { Name = "КРЕВЕТКИ, ШПИНАТ, АВОКАДО, ТОМАТ", MainCategory = "Еда", SubCategory = "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ", BasePrice = "750 р" },
                    new Dish { Name = "ПАСТРАМИ, ХАШБРАУН, ШПИНАТ", MainCategory = "Еда", SubCategory = "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ", BasePrice = "730 р" },
                    new Dish { Name = "КРОКЕТЫ БАТАТ, ЛОСОСЬ, ТОМАТ", MainCategory = "Еда", SubCategory = "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ", BasePrice = "750 р" },
                    new Dish { Name = "КРОКЕТЫ КРАБ, КЛУБНИКА, ТОМАТ", MainCategory = "Еда", SubCategory = "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ", BasePrice = "1190 р" },
                    new Dish { Name = "ОЛАДЬИ ИЗ ЦУКИНИ, ЛОСОСЬ, СТРАЧАТЕЛЛА", MainCategory = "Еда", SubCategory = "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ", BasePrice = "790 р" },
                    new Dish { Name = "ШАКШУКА, КОЛБАСКИ, ФЕТА, ШПИНАТ", MainCategory = "Еда", SubCategory = "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ", BasePrice = "770 р" },
                    new Dish { Name = "ФРАНЦУЗСКИЙ ОМЛЕТ, ИНДЕЙКА", MainCategory = "Еда", SubCategory = "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ", BasePrice = "690 р" },
                    new Dish { Name = "ОВСЯНАЯ КАША, ГОЛУБИКА, БАНАН", MainCategory = "Еда", SubCategory = "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ", BasePrice = "450 р" },
                    new Dish { Name = "РИСОВАЯ КАША, КЛУБНИКА, ГРАНОЛА", MainCategory = "Еда", SubCategory = "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ", BasePrice = "480 р" },
                    new Dish { Name = "ПАНИНИ, ПАСТРАМИ, ТОМАТ, ГАУДА", MainCategory = "Еда", SubCategory = "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ", BasePrice = "590 р" },
                    new Dish { Name = "КРУАССАН, ЛОСОСЬ, КРЕМ-ЧИЗ, АВОКАДО", MainCategory = "Еда", SubCategory = "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ", BasePrice = "630 р" },
                    new Dish { Name = "КРУАССАН, ИНДЕЙКА, СКРЭМБЛ", MainCategory = "Еда", SubCategory = "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ", BasePrice = "650 р" },
                    new Dish { Name = "КРУАССАН, ТРЮФЕЛЬ, СТРАЧАТЕЛЛА, ТОМАТ", MainCategory = "Еда", SubCategory = "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ", BasePrice = "590 р" },
                    new Dish { Name = "СЫРНИКИ, КЛУБНИКА, ЛИМОННАЯ СМЕТАНА", MainCategory = "Еда", SubCategory = "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ", BasePrice = "610 р" },
                    new Dish { Name = "ЙОГУРТ, ЯГОДЫ, МИНДАЛЬ", MainCategory = "Еда", SubCategory = "ЗАВТРАКИ НА ВЕСЬ ДЕНЬ", BasePrice = "490 р" }
                );

                // 2. БЛЮДА ИЗ ЯИЦ (основные блюда)
                context.Dishes.AddRange(
                    new Dish { Name = "ГЛАЗУНЬЯ", MainCategory = "Еда", SubCategory = "БЛЮДА ИЗ ЯИЦ", BasePrice = "250 р" },
                    new Dish { Name = "СКРЭМБЛ", MainCategory = "Еда", SubCategory = "БЛЮДА ИЗ ЯИЦ", BasePrice = "250 р" },
                    new Dish { Name = "ОМЛЕТ", MainCategory = "Еда", SubCategory = "БЛЮДА ИЗ ЯИЦ", BasePrice = "250 р" }
                );

                // 3. NEW YEAR SPECIAL
                context.Dishes.AddRange(
                    new Dish { Name = "БРИОШЬ, РОСТБИФ, ЯЙЦО", MainCategory = "Еда", SubCategory = "NEW YEAR SPECIAL", BasePrice = "990 р" },
                    new Dish { Name = "САЛАТ РОСТБИФ, КАРТОФЕЛЬ, ПЕЧЕННЫЙ БАКЛАЖАН", MainCategory = "Еда", SubCategory = "NEW YEAR SPECIAL", BasePrice = "790 р" },
                    new Dish { Name = "ОЛИВЬЕ КРАБ | БРИСКЕТ, ПЮРЕ ИЗ ЗЕЛЕНОГО ГОРОШКА, КРАСНАЯ ИКРА", MainCategory = "Еда", SubCategory = "NEW YEAR SPECIAL", BasePrice = "990 р" },
                    new Dish { Name = "САЛАТ С УТИНОЙ ГРУДКОЙ, ПЕРСИК", MainCategory = "Еда", SubCategory = "NEW YEAR SPECIAL", BasePrice = "750 р" },
                    new Dish { Name = "ЛОСОСЬ ПОД ШУБОЙ", MainCategory = "Еда", SubCategory = "NEW YEAR SPECIAL", BasePrice = "810 р" },
                    new Dish { Name = "КРУАССАН | БЛИНЫ, КРАСНАЯ ИКРА, МАСЛО С ТРАВАМИ", MainCategory = "Еда", SubCategory = "NEW YEAR SPECIAL", BasePrice = "890 р" },
                    new Dish { Name = "УТИНАЯ ГРУДКА, РАТАТУЙ, МЕД", MainCategory = "Еда", SubCategory = "NEW YEAR SPECIAL", BasePrice = "950 р" }
                );

                // 4. СУПЫ
                context.Dishes.AddRange(
                    new Dish { Name = "КУРИНЫЙ БУЛЬОН, ОРЗО", MainCategory = "Еда", SubCategory = "СУПЫ", BasePrice = "450 р" },
                    new Dish { Name = "ТЫКВЕННЫЙ КРЕМ-СУП, ЛОСОСЬ", MainCategory = "Еда", SubCategory = "СУПЫ", BasePrice = "590 р" },
                    new Dish { Name = "СЫРНЫЙ КРЕМ-СУП, ИНДЕЙКА", MainCategory = "Еда", SubCategory = "СУПЫ", BasePrice = "630 р" }
                );

                // 5. РИМСКАЯ ПИЦЦА
                context.Dishes.AddRange(
                    new Dish { Name = "ЛОСОСЬ, КРАСНАЯ ИКРА, ПАРМЕЗАН", MainCategory = "Еда", SubCategory = "РИМСКАЯ ПИЦЦА", BasePrice = "1750 р" },
                    new Dish { Name = "ЦЫПЛЕНОК, ПЕСТО, ТОМАТ", MainCategory = "Еда", SubCategory = "РИМСКАЯ ПИЦЦА", BasePrice = "1100 р" },
                    new Dish { Name = "ПЕППЕРОНИ", MainCategory = "Еда", SubCategory = "РИМСКАЯ ПИЦЦА", BasePrice = "890 р" },
                    new Dish { Name = "ЧЕТЫРЕ СЫРА", MainCategory = "Еда", SubCategory = "РИМСКАЯ ПИЦЦА", BasePrice = "1190 р" }
                );

                // 6. ЗАКУСКИ
                context.Dishes.AddRange(
                    new Dish { Name = "АССОРТИ БРУСКЕТТ, КРУАССАН", MainCategory = "Еда", SubCategory = "ЗАКУСКИ", BasePrice = "1090 р" },
                    new Dish { Name = "ФРИ, ПАРМЕЗАН, ТРЮФЕЛЬ", MainCategory = "Еда", SubCategory = "ЗАКУСКИ", BasePrice = "370 р" },
                    new Dish { Name = "БАТАТ ФРИ, ТРЮФЕЛЬНЫЙ МУСС", MainCategory = "Еда", SubCategory = "ЗАКУСКИ", BasePrice = "450 р" },
                    new Dish { Name = "МОЦАРЕЛЛА, МЕД, ТРЮФЕЛЬНОЕ МАСЛО", MainCategory = "Еда", SubCategory = "ЗАКУСКИ", BasePrice = "450 р" },
                    new Dish { Name = "ТАРТАР ТУНЕЦ, КЛУБНИКА, ГРАНАТ", MainCategory = "Еда", SubCategory = "ЗАКУСКИ", BasePrice = "890 р" },
                    new Dish { Name = "СВЕКЛА, ТРЮФЕЛЬ, ФИСТАШКА", MainCategory = "Еда", SubCategory = "ЗАКУСКИ", BasePrice = "690 р" },
                    new Dish { Name = "БАТАТ, ДЗАДЗИКИ, ЛИМОН", MainCategory = "Еда", SubCategory = "ЗАКУСКИ", BasePrice = "570 р" },
                    new Dish { Name = "ОПАЛЕННЫЙ ТУНЕЦ, ГУАКАМОЛЕ, ТОМАТ", MainCategory = "Еда", SubCategory = "ЗАКУСКИ", BasePrice = "570 р" },
                    new Dish { Name = "ЧЕСНОЧНЫЕ КРЕВЕТКИ, ГУАКАМОЛЕ", MainCategory = "Еда", SubCategory = "ЗАКУСКИ", BasePrice = "690 р" },
                    new Dish { Name = "ЛЬНЯНОЙ ХЛЕБ, КРАБ, СТРАЧАТЕЛЛА", MainCategory = "Еда", SubCategory = "ЗАКУСКИ", BasePrice = "990 р" },
                    new Dish { Name = "РОСТБИФ, СОУС ТОННАТО", MainCategory = "Еда", SubCategory = "ЗАКУСКИ", BasePrice = "950 р" },
                    new Dish { Name = "ЗАПЕЧЕННЫЕ ПЕРЦЫ, СОУС ТОННАТО", MainCategory = "Еда", SubCategory = "ЗАКУСКИ", BasePrice = "750 р" }
                );

                // 7. САЛАТЫ
                context.Dishes.AddRange(
                    new Dish { Name = "ГРЕЧЕСКИЙ САЛАТ", MainCategory = "Еда", SubCategory = "САЛАТЫ", BasePrice = "670 р" },
                    new Dish { Name = "ЗЕЛЕНЫЙ САЛАТ, ЛОСОСЬ, ПАРМЕЗАН", MainCategory = "Еда", SubCategory = "САЛАТЫ", BasePrice = "690 р" },
                    new Dish { Name = "КРАБ, СТРАЧАТЕЛЛА, ТОМАТ", MainCategory = "Еда", SubCategory = "САЛАТЫ", BasePrice = "950 р" },
                    new Dish { Name = "ЦУКИНИ, ТОМАТ, КРЕМ-ЧИЗ", MainCategory = "Еда", SubCategory = "САЛАТЫ", BasePrice = "650 р" },
                    new Dish { Name = "ЗЕЛЕНЫЙ САЛАТ, ТУНЕЦ, ЯЙЦО", MainCategory = "Еда", SubCategory = "САЛАТЫ", BasePrice = "750 р" }
                );

                // 8. НА ГОРЯЧЕЕ
                context.Dishes.AddRange(
                    new Dish { Name = "КРЕВЕТКИ, КАРТОФЕЛЬ, ПЕСТО", MainCategory = "Еда", SubCategory = "НА ГОРЯЧЕЕ", BasePrice = "870 р" },
                    new Dish { Name = "ГОВЯЖЬИ ЩЕКИ, ОРЗО, ШПИНАТ", MainCategory = "Еда", SubCategory = "НА ГОРЯЧЕЕ", BasePrice = "890 р" },
                    new Dish { Name = "БИФШТЕКС, ТОЛЧЕНЫЙ КАРТОФЕЛЬ, ЛИМОННАЯ СМЕТАНА", MainCategory = "Еда", SubCategory = "НА ГОРЯЧЕЕ", BasePrice = "890 р" },
                    new Dish { Name = "БРИСКЕТ, ЙОГУРТ, КАРТОФЕЛЬ", MainCategory = "Еда", SubCategory = "НА ГОРЯЧЕЕ", BasePrice = "990 р" },
                    new Dish { Name = "ОРЗО, КРЕВЕТКИ, ТРЮФЕЛЬ", MainCategory = "Еда", SubCategory = "НА ГОРЯЧЕЕ", BasePrice = "990 р" },
                    new Dish { Name = "ЛОСОСЬ НА ГРИЛЕ, ПЮРЕ ИЗ ЦВЕТНОЙ КАПУСТЫ", MainCategory = "Еда", SubCategory = "НА ГОРЯЧЕЕ", BasePrice = "1190 р" },
                    new Dish { Name = "СПАГЕТТИ ИЗ ЦУКИНИ, КРЕВЕТКИ, ТОМАТ", MainCategory = "Еда", SubCategory = "НА ГОРЯЧЕЕ", BasePrice = "870 р" },
                    new Dish { Name = "БУРГЕР. ГОВЯДИНА, РУККОЛА, ГОРГОНЗОЛА", MainCategory = "Еда", SubCategory = "НА ГОРЯЧЕЕ", BasePrice = "790 р" },
                    new Dish { Name = "ПАСТА ТОРТИЛЬОНИ, ГОВЯЖЬИ ЩЕЧКИ, УСТРИЧНЫЙ СОУС", MainCategory = "Еда", SubCategory = "НА ГОРЯЧЕЕ", BasePrice = "990 р" }
                );

                // НАПИТКИ с объемами и ценами
                // 1. КОФЕ
                context.Dishes.AddRange(
                    new Dish { Name = "ЭСПРЕССО", MainCategory = "Напитки", SubCategory = "КОФЕ", VolumeInfo = "35мл", BasePrice = "230 р" },
                    new Dish { Name = "АМЕРИКАНО", MainCategory = "Напитки", SubCategory = "КОФЕ", VolumeInfo = "250мл", BasePrice = "250 р" },
                    new Dish { Name = "ФИЛЬТР-КОФЕ", MainCategory = "Напитки", SubCategory = "КОФЕ", VolumeInfo = "250|350 мл", PriceInfo = "240 | 260 р" },
                    new Dish { Name = "КАПУЧИНО", MainCategory = "Напитки", SubCategory = "КОФЕ", VolumeInfo = "250|350 мл", PriceInfo = "280 | 330 р" },
                    new Dish { Name = "ЛАТТЕ", MainCategory = "Напитки", SubCategory = "КОФЕ", VolumeInfo = "350|450 мл", PriceInfo = "310 | 350 р" },
                    new Dish { Name = "ФЛЭТ УАЙТ", MainCategory = "Напитки", SubCategory = "КОФЕ", VolumeInfo = "250мл", BasePrice = "330 р" },
                    new Dish { Name = "РАФ", MainCategory = "Напитки", SubCategory = "КОФЕ", VolumeInfo = "350мл", BasePrice = "420 р", Options = "ВАНИЛЬ|ЦИТРУС|ПРАГА|ХАЛВА" },
                    new Dish { Name = "РАФ CHINCH", MainCategory = "Напитки", SubCategory = "КОФЕ", VolumeInfo = "350мл", BasePrice = "450 р" },
                    new Dish { Name = "МАТЧА ЛАТТЕ", MainCategory = "Напитки", SubCategory = "КОФЕ", VolumeInfo = "250|350 мл", PriceInfo = "330 | 380 р" },
                    new Dish { Name = "КАКАО-ШОКОЛАД", MainCategory = "Напитки", SubCategory = "КОФЕ", VolumeInfo = "350 мл", BasePrice = "370 р" },
                    new Dish { Name = "БЕЛЫЙ КАКАО, ФИСТАШКА, СОЛЬ", MainCategory = "Напитки", SubCategory = "КОФЕ", VolumeInfo = "350 мл", BasePrice = "420 р" },
                    new Dish { Name = "ЛАТТЕ СИНГАПУР", MainCategory = "Напитки", SubCategory = "КОФЕ", VolumeInfo = "350 мл", BasePrice = "450 р" },
                    new Dish { Name = "ЛАТТЕ, БЕЛЫЙ ШОКОЛАД, ФИСТАШКА", MainCategory = "Напитки", SubCategory = "КОФЕ", VolumeInfo = "350 мл", BasePrice = "420 р" },
                    new Dish { Name = "ЛАТТЕ ПТИЧЬЕ МОЛОКО", MainCategory = "Напитки", SubCategory = "КОФЕ", VolumeInfo = "350 мл", BasePrice = "420 р" },
                    new Dish { Name = "БАМБЛ-КАРАМЕЛЬ", MainCategory = "Напитки", SubCategory = "КОФЕ", VolumeInfo = "250 мл", PriceInfo = "420 450 850 р", Options = "ГРЕЙПФРУТ|ГРАНАТ" },
                    new Dish { Name = "ЭСПРЕССО-ТОНИК", MainCategory = "Напитки", SubCategory = "КОФЕ", VolumeInfo = "350 мл", BasePrice = "390 р" },
                    new Dish { Name = "РАСТИТЕЛЬНОЕ МОЛОКО", MainCategory = "Напитки", SubCategory = "КОФЕ", BasePrice = "90 р", Options = "КОКОСОВОЕ|МИНДАЛЬНОЕ|ФУНДУЧНОЕ|БАНАНОВОЕ|БЕЗЛАКТОЗНОЕ" }
                );

                // 2. ФРЕШ
                context.Dishes.AddRange(
                    new Dish { Name = "АПЕЛЬСИН", MainCategory = "Напитки", SubCategory = "ФРЕШ", VolumeInfo = "200 мл", BasePrice = "370 р" },
                    new Dish { Name = "ГРЕЙПФРУТ", MainCategory = "Напитки", SubCategory = "ФРЕШ", VolumeInfo = "200 мл", BasePrice = "370 р" },
                    new Dish { Name = "МАНДАРИН", MainCategory = "Напитки", SubCategory = "ФРЕШ", VolumeInfo = "200 мл", BasePrice = "470 р" },
                    new Dish { Name = "ГРАНАТ", MainCategory = "Напитки", SubCategory = "ФРЕШ", VolumeInfo = "200 мл", BasePrice = "790 р" }
                );

                context.SaveChanges();
                Console.WriteLine($"Добавлено {context.Dishes.Count()} записей.");
            }
        }
    }
}
