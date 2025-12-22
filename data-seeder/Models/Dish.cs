namespace backend.Models
{
    public class Dish
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string MainCategory { get; set; } = string.Empty; // "Еда" или "Напитки"
        public string SubCategory { get; set; } = string.Empty;  // "Завтраки", "Кофе" и т.д.
        public string? VolumeInfo { get; set; }                   // Информация об объеме: "250мл", "250|350 мл", NULL для еды
        public string? Options { get; set; }                     // Дополнительные опции (например: "ВАНИЛЬ|ЦИТРУС")
        public string? PriceInfo { get; set; }                   // Информация о цене: "240 | 260 р", "420 450 850 р"
        public string? BasePrice { get; set; }                   // Базовая цена для еды: "750 р"
    }
}