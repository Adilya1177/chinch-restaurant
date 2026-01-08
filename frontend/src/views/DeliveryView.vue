<template>
  <div class="delivery-view">
    <!-- Герой-секция -->
    <div class="delivery-hero">
      <div class="delivery-hero-content">
        <h1 class="delivery-title">ДОСТАВКА</h1>
        <p class="delivery-subtitle">Заказывайте нашу авторскую кухню с доставкой</p>
      </div>
    </div>

    <div class="delivery-container">
      <!-- Две карточки доставки -->
      <div class="delivery-options">
        <!-- Карточка 1: Октябрьское поле -->
        <div class="delivery-card">
          <div class="card-header">
            <div class="card-icon">🏘️</div>
            <h2>По территории ЖК "Октябрьское поле"</h2>
          </div>
          
          <div class="card-content">
            <div class="feature-list">
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Бесплатная доставка</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Минимальный заказ от 800 ₽</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Доставка в течение 30-45 минут</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Оплата картой или наличными</span>
              </div>
            </div>
            
            <div class="order-button-container">
              <p class="order-instruction">Заказ через Telegram-бот:</p>
              <a 
                href="https://t.me/chinch_coffee" 
                target="_blank"
                class="telegram-button"
              >
                <span class="button-icon">✈️</span>
                <span class="button-text">t.me/chinch_coffee</span>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Карточка 2: По Москве -->
        <div class="delivery-card">
          <div class="card-header">
            <div class="card-icon">🏙️</div>
            <h2>По Москве</h2>
          </div>
          
          <div class="card-content">
            <div class="feature-list">
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Доставка по всей Москве</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Стоимость доставки: 199 ₽</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Бесплатно при заказе от 1500 ₽</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">✓</span>
                <span>Доставка в течение 60 минут</span>
              </div>
            </div>
            
            <div class="order-button-container">
              <p class="order-instruction">Заказ через Яндекс Еду:</p>
              <a 
                href="https://eda.yandex.ru/restaurant/chinch" 
                target="_blank"
                class="yandex-button"
              >
                <span class="button-icon">Я</span>
                <span class="button-text">Яндекс Еда: CHINCH</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Дополнительная информация -->
      <div class="additional-info">
        <div class="info-card">
          <h3>🕒 Время работы доставки</h3>
          <p>Понедельник - Воскресенье: 12:00 - 23:00</p>
        </div>
        
        <div class="info-card">
          <h3>📞 Контакты</h3>
          <p>Телефон: <a href="tel:+79150549606">+7 (915) 054-96-06</a></p>
          <p>Адрес: ул. Берзарина, 28А, корп. 4, Москва</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeliveryView'
}
</script>

<style scoped>
.delivery-view {
  min-height: calc(100vh - 400px);
}

/* Герой-секция */
.delivery-hero {
  background: linear-gradient(rgba(42, 30, 20, 0.85), rgba(42, 30, 20, 0.9)), 
              url('/images/home-bg.jpg') center/cover no-repeat;
  padding: 6rem 2rem 4rem;
  text-align: center;
  margin-top: 145px; /* Учитываем высоту шапки */
}

.delivery-hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.delivery-title {
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  color: #f8f4ea;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.delivery-subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  color: #e6dfd1;
  font-weight: 400;
}

/* Основной контейнер */
.delivery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

/* Карточки доставки */
.delivery-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
}

.delivery-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(139, 107, 77, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f0e9dd;
}

.delivery-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(139, 107, 77, 0.2);
}

.card-header {
  background: linear-gradient(135deg, #2a1e14, #3a2a1c);
  padding: 2rem;
  color: white;
  text-align: center;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.card-header h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
  color: #f8f4ea;
}

.card-content {
  padding: 2.5rem;
}

.feature-list {
  margin-bottom: 2.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #5d4a30;
}

.feature-icon {
  color: #b08d57;
  font-weight: bold;
  font-size: 1.2rem;
  background: #f8f4ea;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.order-button-container {
  text-align: center;
  border-top: 1px solid #f0e9dd;
  padding-top: 2rem;
}

.order-instruction {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  color: #2a1e14;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.telegram-button,
.yandex-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.telegram-button {
  background: linear-gradient(135deg, #0088cc, #006699);
  color: white;
}

.yandex-button {
  background: linear-gradient(135deg, #FFCC00, #FF9900);
  color: #333;
}

.telegram-button:hover,
.yandex-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.telegram-button:hover {
  background: linear-gradient(135deg, #006699, #0088cc);
}

.yandex-button:hover {
  background: linear-gradient(135deg, #FF9900, #FFCC00);
}

.button-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.button-text {
  flex: 1;
  text-align: center;
}

/* Дополнительная информация */
.additional-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.info-card {
  background: linear-gradient(135deg, #f9f5ec, #f1eadd);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #e6dfd1;
}

.info-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  color: #2a1e14;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.info-card p {
  color: #5d4a30;
  line-height: 1.6;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.info-card a {
  color: #b08d57;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.info-card a:hover {
  color: #2a1e14;
  text-decoration: underline;
}

/* Адаптивность */
@media (max-width: 768px) {
  .delivery-hero {
    padding: 5rem 1.5rem 3rem;
    margin-top: 140px;
  }
  
  .delivery-title {
    font-size: 2.2rem;
  }
  
  .delivery-subtitle {
    font-size: 1.2rem;
  }
  
  .delivery-container {
    padding: 3rem 1.5rem;
  }
  
  .delivery-options {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .card-content {
    padding: 2rem;
  }
  
  .telegram-button,
  .yandex-button {
    padding: 0.9rem 2rem;
    font-size: 1.1rem;
  }
  
  .additional-info {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .delivery-hero {
    padding: 4rem 1rem 2rem;
    margin-top: 130px;
  }
  
  .delivery-title {
    font-size: 1.8rem;
  }
  
  .delivery-subtitle {
    font-size: 1.1rem;
  }
  
  .delivery-container {
    padding: 2rem 1rem;
  }
  
  .delivery-card {
    margin: 0 0.5rem;
  }
  
  .card-header {
    padding: 1.5rem;
  }
  
  .card-header h2 {
    font-size: 1.5rem;
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  .feature-item {
    font-size: 1rem;
  }
  
  .order-instruction {
    font-size: 1.2rem;
  }
  
  .telegram-button,
  .yandex-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
}
</style>