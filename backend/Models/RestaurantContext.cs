using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class RestaurantContext : DbContext
    {
        public RestaurantContext(DbContextOptions<RestaurantContext> options)
            : base(options)
        {
        }

        public DbSet<Dish> Dishes { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<EggDish> EggDishes { get; set; }
        public DbSet<EggAddon> EggAddons { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Настройки таблиц
            modelBuilder.Entity<Dish>().ToTable("Dishes");
            modelBuilder.Entity<Reservation>().ToTable("Reservations");

            // Конфигурация для блюд из яиц
            modelBuilder.Entity<EggDish>().ToTable("EggDishes");
            modelBuilder.Entity<EggAddon>().ToTable("EggAddons");

            // Конфигурация связи многие-ко-многим
            modelBuilder.Entity<EggDish>()
                    .HasMany(e => e.Addons)
                    .WithMany(a => a.EggDishes)
                    .UsingEntity<Dictionary<string, object>>(
                        "EggDishAddons",
                        j => j.HasOne<EggAddon>().WithMany().HasForeignKey("EggAddonId"),
                        j => j.HasOne<EggDish>().WithMany().HasForeignKey("EggDishId"),
                        j => j.ToTable("EggDishAddons"));
            
        }
    }
}