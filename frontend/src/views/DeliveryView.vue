<template>
  <div class="delivery-view">
    <!-- Заголовок как в Бронировании -->
    <div class="delivery-container">

      <!-- Две карточки доставки -->
      <div class="delivery-options">
        <!-- Карточка 1: Октябрьское поле -->
        <div class="delivery-card">
          <div class="card-header">
            <img src="/images/jk.jpg" alt="ЖК Октябрьское поле" class="card-photo">
            <h2>По территории ЖК "Октябрьское поле"</h2>
          </div>
          
          <div class="card-content">
            <div class="order-button-container">
              <p class="order-instruction">Заказ через Telegram:</p>
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
            <img src="/images/moscow.jpg" alt="Москва" class="card-photo">
            <h2>По Москве</h2>
          </div>
          
          <div class="card-content">
            <div class="order-button-container">
              <p class="order-instruction">Заказ через Яндекс Еду:</p>
              <a 
                href="https://eda.yandex.ru/restaurant/chinch" 
                target="_blank"
                class="yandex-button"
              >
                <span class="button-icon">Я</span>
                <span class="button-text">Яндекс Еда: ЧИНЧ</span>
              </a>
            </div>
          </div>
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
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #f8f4ea 0%, #f1e9d7 100%);
}

.delivery-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Заголовок как в Бронировании */
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

/* Карточки доставки */
.delivery-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.delivery-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(139, 107, 77, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e8dcc9;
  display: flex;
  flex-direction: column;
  height: 500px;
}

.delivery-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(139, 107, 77, 0.2);
}

.card-header {
  position: relative;
  flex: 1.1;
  overflow: hidden;
}

.card-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.05);
  transition: transform 0.5s ease;
}

.card-header:hover .card-photo {
  transform: scale(1.08);
}

.card-header h2 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(42, 30, 20, 0.95), rgba(42, 30, 20, 0.7), transparent);
  color: white;
  padding: 1.5rem;
  margin: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
}

.card-content {
  padding: 1.5rem;
  flex-shrink: 0;
}

.order-button-container {
  text-align: center;
  padding-top: 0.5rem;
}

.order-instruction {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  color: #2a1e14;
  margin-bottom: 1rem;
  font-weight: 600;
}

.telegram-button,
.yandex-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.9rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 280px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.telegram-button:hover {
  background: linear-gradient(135deg, #006699, #0088cc);
}

.yandex-button:hover {
  background: linear-gradient(135deg, #FF9900, #FFCC00);
}

.button-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.button-text {
  flex: 1;
  text-align: center;
}

/* Адаптивность */
@media (max-width: 768px) {
  .delivery-view {
    padding: 1.5rem 1rem;
  }
  
  .page-header {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
  }
  
  .page-title {
    font-size: 2.2rem;
  }
  
  .page-subtitle {
    font-size: 1.2rem;
  }
  
  .delivery-options {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .delivery-card {
    height: 450px;
  }
  
  .card-header h2 {
    font-size: 1.4rem;
    padding: 1rem;
  }
  
  .card-content {
    padding: 1.2rem;
  }
  
  .order-instruction {
    font-size: 1.1rem;
  }
  
  .telegram-button,
  .yandex-button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    max-width: 250px;
  }
}

@media (max-width: 480px) {
  .delivery-view {
    padding: 1rem 0.5rem;
  }
  
  .page-header {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
  }
  
  .page-title {
    font-size: 1.8rem;
  }
  
  .page-subtitle {
    font-size: 1rem;
  }
  
  .delivery-card {
    height: 400px;
    margin: 0;
  }
  
  .card-header h2 {
    font-size: 1.2rem;
    padding: 0.8rem;
  }
  
  .card-content {
    padding: 1rem;
  }
  
  .order-instruction {
    font-size: 1rem;
  }
  
  .telegram-button,
  .yandex-button {
    padding: 0.7rem 1.2rem;
    font-size: 0.95rem;
    max-width: 220px;
  }
}
</style>