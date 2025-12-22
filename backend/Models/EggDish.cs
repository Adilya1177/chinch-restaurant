namespace backend.Models
{
    public class EggDish
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int BasePrice { get; set; }  // Базовая цена блюда
        
        // Навигационное свойство для дополнений
        public List<EggAddon> Addons { get; set; } = new List<EggAddon>();
    }
}
