using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using backend.Models;

public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<RestaurantContext>
{
    public RestaurantContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<RestaurantContext>();
        optionsBuilder.UseSqlServer("Server=localhost,1435;Database=ChinchDB;User Id=sa;Password=ChinchRestaurant2024!;TrustServerCertificate=True;");
        
        return new RestaurantContext(optionsBuilder.Options);
    }
}