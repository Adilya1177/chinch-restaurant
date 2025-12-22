using System.Text.Json.Serialization;

namespace backend.Models
{
    public class EggAddon
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int Price { get; set; }  // Цена дополнения в рублях
        
        // Навигационное свойство для основных блюд
        [JsonIgnore]
        public List<EggDish> EggDishes { get; set; } = new List<EggDish>();
    }
}
