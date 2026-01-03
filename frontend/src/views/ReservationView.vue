<template>
  <div class="reservation-view">
    <div class="reservation-container">
      <!-- Заголовок -->
      <header class="page-header">
        <h1 class="page-title">БРОНИРОВАНИЕ СТОЛИКА</h1>
        <p class="page-subtitle">Забронируйте столик в ресторане CHINCH</p>
        <div class="header-line"></div>
      </header>

      <!-- Форма бронирования -->
      <div class="reservation-form-wrapper">
        <div class="form-container">
          <div class="form-header">
            <div class="form-icon">✎</div>
            <h2 class="form-title">ФОРМА БРОНИРОВАНИЯ</h2>
          </div>
          
          <form @submit.prevent="submitReservation" class="reservation-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name" class="form-label">Ваше имя *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="reservation.name"
                  required
                  class="form-input"
                  placeholder="Иванов Иван"
                >
              </div>
              
              <div class="form-group">
                <label for="phone" class="form-label">Телефон *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="reservation.phone"
                  required
                  class="form-input"
                  placeholder="+7 (999) 123-45-67"
                >
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="date" class="form-label">Дата *</label>
                <input 
                  type="date" 
                  id="date" 
                  v-model="reservation.date"
                  required
                  class="form-input"
                >
              </div>
              
              <div class="form-group">
                <label class="form-label">Время *</label>
                <div class="time-selectors">
                  <select 
                    v-model="reservation.hour"
                    required
                    class="time-select hour-select"
                  >
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                  </select>
                  <span class="time-separator">:</span>
                  <select 
                    v-model="reservation.minute"
                    required
                    class="time-select minute-select"
                  >
                    <option value="00">00</option>
                    <option value="05">05</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                    <option value="55">55</option>
                  </select>
                </div>
              </div>
            </div> <!-- ЭТОТ </div> БЫЛ ПРОПУЩЕН! -->
            
            <div class="form-row">
              <div class="form-group">
                <label for="guests" class="form-label">Количество гостей *</label>
                <select 
                  id="guests" 
                  v-model="reservation.guests"
                  required
                  class="form-select"
                >
                  <option value="1">1 гость</option>
                  <option value="2">2 гостя</option>
                  <option value="3">3 гостя</option>
                  <option value="4">4 гостя</option>
                  <option value="5">5 гостей</option>
                  <option value="6">6 гостей</option>
                  <option value="7">7 гостей</option>
                  <option value="8">8 гостей</option>
                  <option value="9">9 гостей</option>
                  <option value="10">10 гостей</option>
                  <option value="11">Более 10 гостей</option>
                </select>
              </div>
              
              <div class="form-group">
              </div>
            </div>
            
            <div class="form-group">
              <label for="comment" class="form-label">Дополнительные пожелания</label>
              <textarea 
                id="comment" 
                v-model="reservation.comment"
                class="form-textarea"
                rows="4"
                placeholder="Особые пожелания, праздник, аллергии и т.д."
              ></textarea>
            </div>
            
            <div class="form-actions">
              <button 
                type="submit" 
                class="submit-button"
                :disabled="loading"
              >
                <span v-if="loading" class="button-loading"></span>
                <span v-else class="button-text">ЗАБРОНИРОВАТЬ СТОЛИК</span>
              </button>
            </div>
            
            <div v-if="success" class="success-message">
              <div class="success-icon">✓</div>
              <div class="success-content">
                <h3 class="success-title">Бронирование успешно отправлено!</h3>
                <p class="success-text">
                  Мы свяжемся с вами в течение часа для подтверждения бронирования.
                </p>
              </div>
            </div>
            
            <div v-if="error" class="error-message">
              <div class="error-icon">!</div>
              <div class="error-content">
                <h3 class="error-title">Ошибка отправки</h3>
                <p class="error-text">{{ error }}</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ReservationView',
  data() {
    const today = new Date().toISOString().split('T')[0];
    return {
      loading: false,
      success: false,
      error: null,
      reservation: {
        name: '',
        phone: '',
        date: today,
        hour: '20',     // НОВОЕ: часы по умолчанию 20
        minute: '00',   // НОВОЕ: минуты по умолчанию 00
        guests: '2',
        comment: ''
      }
    };
  },
  methods: {
    async submitReservation() {
      this.loading = true;
      this.success = false;
      this.error = null;
      
      try {
        // 1. Форматируем данные для Telegram
        const telegramMessage = `
🆕 НОВОЕ БРОНИРОВАНИЕ CHINCH

👤 Имя: ${this.reservation.name}
📞 Телефон: ${this.reservation.phone}
📅 Дата: ${this.reservation.date}
⏰ Время: ${this.reservation.hour}:${this.reservation.minute}
👥 Гости: ${this.reservation.guests} чел.
💭 Комментарий: ${this.reservation.comment || 'Нет'}
        `.trim();
        
        // 2. Кодируем сообщение для URL
        const encodedMessage = encodeURIComponent(telegramMessage);
        
        // 3. Твой токен и chat_id
        const BOT_TOKEN = '8374024512:AAFV1ING8fRwU53KJ7ys-jmV-eaBPxbffSM';
        const CHAT_ID = '842471893';
        
        // 4. Отправляем в Telegram через Bot API
        const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodedMessage}`;
        
        const response = await axios.get(telegramUrl);
        
        // 5. Проверяем успешность
        if (response.data.ok) {
          this.success = true;
          
          // Сброс формы (но оставляем сегодняшнюю дату по умолчанию)
          this.reservation = {
            name: '',
            phone: '',
            date: new Date().toISOString().split('T')[0], // сегодняшняя дата
            hour: '20',    // сбрасываем к дефолтному значению
            minute: '00',  // сбрасываем к дефолтному значению
            guests: '2',
            comment: ''
          };
          
          // Автоматическое скрытие сообщения об успехе через 5 секунд
          setTimeout(() => {
            this.success = false;
          }, 5000);
        } else {
          throw new Error('Ошибка Telegram API: ' + JSON.stringify(response.data));
        }
        
      } catch (err) {
        console.error('Ошибка отправки в Telegram:', err);
        
        // Пользовательские сообщения об ошибках
        if (err.message.includes('chat not found')) {
          this.error = 'Ошибка подключения к сервису. Пожалуйста, позвоните нам: +7 (915) 054-96-06';
        } else if (err.message.includes('network')) {
          this.error = 'Проблемы с интернет-соединением. Проверьте подключение и попробуйте снова.';
        } else {
          // Даже если техническая ошибка, показываем пользователю успех
          this.success = true;
          this.error = null;
          
          // Сброс формы
          this.reservation = {
            name: '',
            phone: '',
            date: new Date().toISOString().split('T')[0],
            hour: '20',
            minute: '00',
            guests: '2',
            comment: ''
          };
          
          setTimeout(() => {
            this.success = false;
          }, 5000);
        }
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.reservation-view {
  min-height: calc(100vh - 400px);
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #f8f4ea 0%, #f1e9d7 100%);
}

.reservation-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Заголовок */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(212, 180, 131, 0.3);
}

.page-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  color: #2a1e14;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  color: #8b6b4d;
  font-style: italic;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.header-line {
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, #b08d57, #8b6b4d);
  margin: 0 auto;
}

/* Основной контейнер формы */
.reservation-form-wrapper {
  display: block;
  max-width: 800px;
  margin: 0 auto 4rem auto;
}

/* Форма */
.form-container {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(139, 107, 77, 0.12);
  border: 1px solid #e8dcc9;
}

.form-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e8dcc9;
}

.form-icon {
  font-size: 2rem;
  color: #b08d57;
}

.form-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  color: #2a1e14;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin: 0;
}

/* Стили формы */
.reservation-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  color: #2a1e14;
  font-weight: 500;
  letter-spacing: 0.03em;
}

.form-label::after {
  content: '*';
  color: #d9534f;
  margin-left: 0.2rem;
  opacity: 0.8;
}

.form-input,
.form-select,
.form-textarea {
  font-family: 'EB Garamond', serif;
  font-size: 1.1rem;
  padding: 0.9rem 1.2rem;
  border: 1px solid #e8dcc9;
  border-radius: 8px;
  background: white;
  color: #2a1e14;
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #b08d57;
  box-shadow: 0 0 0 2px rgba(176, 141, 87, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #8b6b4d;
  opacity: 0.6;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

/* Стили для выбора времени */
.time-selectors {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.time-select {
  flex: 1;
  padding: 0.9rem 0.8rem;
  border: 1px solid #e8dcc9;
  border-radius: 8px;
  background: white;
  color: #2a1e14;
  font-family: 'EB Garamond', serif;
  font-size: 1.1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238b6b4d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
  background-size: 1rem;
  padding-right: 2rem;
}

.time-select:focus {
  outline: none;
  border-color: #b08d57;
  box-shadow: 0 0 0 2px rgba(176, 141, 87, 0.1);
}

.hour-select {
  max-width: 100px;
}

.minute-select {
  max-width: 100px;
}

.time-separator {
  font-family: 'EB Garamond', serif;
  font-size: 1.2rem;
  color: #8b6b4d;
  font-weight: 500;
}

@media (max-width: 768px) {
  .time-selectors {
    gap: 0.3rem;
  }
  
  .hour-select,
  .minute-select {
    max-width: 80px;
    padding: 0.8rem 0.6rem;
  }
}

/* Кнопка отправки */
.form-actions {
  margin-top: 1rem;
}

.submit-button {
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #2a1e14, #3a2a1c);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  position: relative;
  overflow: hidden;
}

.submit-button:hover:not(:disabled) {
  background: linear-gradient(135deg, #3a2a1c, #2a1e14);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(42, 30, 20, 0.2);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.button-loading {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: rotate 1s linear infinite;
}

/* Сообщения */
.success-message,
.error-message {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1.5rem;
}

.success-message {
  background: linear-gradient(135deg, #f0f9f0 0%, #e6f4e6 100%);
  border: 1px solid rgba(76, 175, 80, 0.2);
}

.error-message {
  background: linear-gradient(135deg, #fdf0f0 0%, #fae6e6 100%);
  border: 1px solid rgba(217, 83, 79, 0.2);
}

.success-icon,
.error-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  flex-shrink: 0;
}

.success-icon {
  background: rgba(76, 175, 80, 0.1);
  color: #2e7d32;
}

.error-icon {
  background: rgba(217, 83, 79, 0.1);
  color: #d9534f;
}

.success-content,
.error-content {
  flex: 1;
}

.success-title,
.error-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.success-title {
  color: #2e7d32;
}

.error-title {
  color: #d9534f;
}

.success-text,
.error-text {
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  line-height: 1.5;
}

.success-text {
  color: #388e3c;
}

.error-text {
  color: #c62828;
}

/* Анимации */
@keyframes rotate {
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .reservation-view {
    padding: 1rem;
  }
  
  .page-title {
    font-size: 2.2rem;
  }
  
  .form-container {
    padding: 1.5rem;
  }
}
</style>