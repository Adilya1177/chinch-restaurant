using System;
using Microsoft.Data.SqlClient;

class Program
{
    static void Main()
    {
        string password = "YourStrong!Passw0rd";
        string connectionString = $"Server=localhost,1435;Database=ChinchDB;User Id=sa;Password={password};TrustServerCertificate=True;Encrypt=false;";
        
        try
        {
            using (var connection = new SqlConnection(connectionString))
            {
                connection.Open();
                Console.WriteLine("Подключение к ChinchDB успешно!");
                
                // Проверим все напитки
                Console.WriteLine("\n=== ВСЕ НАПИТКИ ===");
                using (var cmd = new SqlCommand(@"
                    SELECT Name, SubCategory, VolumeInfo, BasePrice, PriceInfo, Options 
                    FROM Dishes 
                    WHERE MainCategory = N'Напитки' 
                    ORDER BY SubCategory, Name", connection))
                {
                    using (var reader = cmd.ExecuteReader())
                    {
                        int count = 0;
                        while (reader.Read())
                        {
                            count++;
                            Console.WriteLine($"\n{count}. {reader["Name"]} [{reader["SubCategory"]}]");
                            if (!string.IsNullOrEmpty(reader["VolumeInfo"]?.ToString()))
                                Console.WriteLine($"   Объем: {reader["VolumeInfo"]}");
                            if (!string.IsNullOrEmpty(reader["BasePrice"]?.ToString()))
                                Console.WriteLine($"   Цена: {reader["BasePrice"]}");
                            if (!string.IsNullOrEmpty(reader["PriceInfo"]?.ToString()))
                                Console.WriteLine($"   Цены: {reader["PriceInfo"]}");
                            if (!string.IsNullOrEmpty(reader["Options"]?.ToString()))
                                Console.WriteLine($"   Опции: {reader["Options"]}");
                        }
                        Console.WriteLine($"\nВсего напитков: {count}");
                    }
                }
                
                // Проверим категории напитков
                Console.WriteLine("\n=== КАТЕГОРИИ НАПИТКОВ ===");
                using (var cmd = new SqlCommand(@"
                    SELECT SubCategory, COUNT(*) as Count 
                    FROM Dishes 
                    WHERE MainCategory = N'Напитки' 
                    GROUP BY SubCategory 
                    ORDER BY SubCategory", connection))
                {
                    using (var reader = cmd.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            Console.WriteLine($"  {reader["SubCategory"]}: {reader["Count"]}");
                        }
                    }
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"ОШИБКА: {ex.Message}");
        }
    }
}
