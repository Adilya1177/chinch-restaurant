using Microsoft.AspNetCore.Mvc;
using backend.Models;
using System.Collections.Generic;
using System.Linq;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        private static List<Reservation> _reservations = new List<Reservation>();
        private static int _nextId = 1;

        // GET: api/reservation
        [HttpGet]
        public ActionResult<IEnumerable<Reservation>> Get()
        {
            return Ok(_reservations.OrderByDescending(r => r.DateTime));
        }

        // POST: api/reservation
        [HttpPost]
        public ActionResult<Reservation> Post([FromBody] Reservation reservation)
        {
            if (reservation == null)
            {
                return BadRequest("Reservation data is required");
            }

            // Присваиваем ID
            reservation.Id = _nextId++;
            
            // Добавляем в список
            _reservations.Add(reservation);
            
            // Возвращаем созданное бронирование
            return CreatedAtAction(nameof(Get), new { id = reservation.Id }, reservation);
        }
    }
}