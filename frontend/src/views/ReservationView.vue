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
                <label for="time" class="form-label">Время *</label>
                <select 
                  id="time" 
                  v-model="reservation.time"
                  required
                  class="form-select"
                >
                  <option value="" disabled selected>Выберите время</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                </select>
              </div>
            </div>
            
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
        
        <!-- Информация о ресторане -->
        <div class="restaurant-info">
          <div class="info-card">
            <div class="info-header">
              <h3 class="info-title">ИНФОРМАЦИЯ О РЕСТОРАНЕ</h3>
              <div class="info-divider"></div>
            </div>
            
            <div class="info-content">
              <div class="info-item">
                <div class="info-icon">📍</div>
                <div class="info-text">
                  <div class="info-label">АДРЕС</div>
                  <div class="info-value">г. Москва, ул. Пречистенка, 15</div>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">📞</div>
                <div class="info-text">
                  <div class="info-label">ТЕЛЕФОН</div>
                  <div class="info-value">+7 (495) 123-45-67</div>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">🕒</div>
                <div class="info-text">
                  <div class="info-label">ЧАСЫ РАБОТЫ</div>
                  <div class="info-value">
                    <div>Пн-Чт: 12:00 - 23:00</div>
                    <div>Пт-Сб: 12:00 - 00:00</div>
                    <div>Вс: 12:00 - 22:00</div>
                  </div>
                </div>
              </div>
              
              <div class="info-note">
                <div class="note-icon">💡</div>
                <div class="note-text">
                  Для групп от 8 человек рекомендуем бронировать столик за 48 часов
                </div>
              </div>
            </div>
          </div>
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
    return {
      loading: false,
      success: false,
      error: null,
      reservation: {
        name: '',
        phone: '',
        date: '',
        time: '',
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
        const response = await axios.post('http://localhost:5277/api/reservation', this.reservation);
        
        if (response.status === 200) {
          this.success = true;
          // Сброс формы
          this.reservation = {
            name: '',
            phone: '',
            date: '',
            time: '',
            guests: '2',
            comment: ''
          };
          
          // Автоматическое скрытие сообщения об успехе через 5 секунд
          setTimeout(() => {
            this.success = false;
          }, 5000);
        }
      } catch (err) {
        console.error('Ошибка бронирования:', err);
        this.error = err.response?.data?.message || 'Ошибка при отправке формы. Пожалуйста, попробуйте позже.';
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    // Установка минимальной даты (сегодня)
    const today = new Date().toISOString().split('T')[0];
    this.reservation.date = today;
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
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

@media (max-width: 992px) {
  .reservation-form-wrapper {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
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

/* Информация о ресторане */
.restaurant-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  background: linear-gradient(135deg, #fffbf0 0%, #f8f0e0 100%);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid #e8d4b0;
  box-shadow: 0 4px 20px rgba(232, 212, 176, 0.2);
}

.info-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e8d4b0;
}

.info-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  color: #2a1e14;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin: 0 0 0.5rem 0;
}

.info-divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #b08d57, transparent);
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.info-icon {
  font-size: 1.5rem;
  color: #b08d57;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.info-text {
  flex: 1;
}

.info-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.9rem;
  color: #8b6b4d;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
}

.info-value {
  font-family: 'EB Garamond', serif;
  font-size: 1.1rem;
  color: #2a1e14;
  line-height: 1.5;
}

.info-note {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(176, 141, 87, 0.1);
  border-radius: 8px;
  margin-top: 1rem;
}

.note-icon {
  font-size: 1.2rem;
  color: #8b6b4d;
  flex-shrink: 0;
}

.note-text {
  font-family: 'EB Garamond', serif;
  font-size: 0.95rem;
  color: #5d4a30;
  line-height: 1.5;
  font-style: italic;
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
  
  .form-container,
  .info-card {
    padding: 1.5rem;
  }
}
</style>
