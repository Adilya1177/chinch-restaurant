using System;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        
        [Required]
        public string Name { get; set; } = string.Empty;
        
        [Required]
        public string Phone { get; set; } = string.Empty;
        
        public string? Email { get; set; }
        
        [Required]
        public DateTime DateTime { get; set; }
        
        [Required]
        [Range(1, 20)]
        public int Guests { get; set; }
        
        public string? Comment { get; set; }
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public bool IsConfirmed { get; set; } = false;
    }
}