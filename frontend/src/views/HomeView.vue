<template>
  <div class="home-view">
    <!-- Герой-секция -->
    <div class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-decoration top"></div>
        
        <!-- Логотип вместо текста -->
        <div class="logo-title-container">
          <img 
            src="/images/logo/logo-chinch.png"
            alt="CHINCH Restaurant Logo" 
            class="main-logo"
            style="filter: brightness(0.7) sepia(0.3) saturate(1.2); opacity: 0.95;"
          >
        </div>
        
        <p class="hero-subtitle">РЕСТОРАН АВТОРСКОЙ КУХНИ</p>
        <div class="hero-decoration bottom"></div>
        <p class="hero-description">
          Изысканные блюда, тщательно отобранные ингредиенты<br>
          и непревзойденная атмосфера в самом сердце Москвы
        </p>
      </div>
      
      <!-- Призыв к действию -->
      <div class="cta-section">
        <router-link to="/menu" class="cta-button primary">
          <span class="cta-icon">☰</span>
          <span class="cta-text">СМОТРЕТЬ МЕНЮ</span>
        </router-link>
        <router-link to="/reservation" class="cta-button secondary">
          <span class="cta-icon">✎</span>
          <span class="cta-text">ЗАБРОНИРОВАТЬ СТОЛИК</span>
        </router-link>
      </div>
    </div>

    <!-- Особенности -->
    <div class="features-section">
      <div class="features-container">
        <!-- Карточка 1 -->
        <div class="feature-item">
          <div class="feature-image-container">
            <div class="feature-image-placeholder"></div>
          </div>
          <p class="feature-description">
            Отборные продукты от проверенных поставщиков со всего мира
          </p>
        </div>
        
        <!-- Карточка 2 -->
        <div class="feature-item">
          <div class="feature-image-container">
            <div class="feature-image-photo-blyda"></div>
          </div>
          <p class="feature-description">
            Уникальные блюда, созданные нашим шеф-поваром с любовью к деталям
          </p>
        </div>
        
        <!-- Карточка 3 (с фото) -->
        <div class="feature-item">
          <div class="feature-image-container">
            <div class="feature-image-photo-atmosphere"></div>
          </div>
          <p class="feature-description">
            Утонченный интерьер и безупречный сервис для особых моментов
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home-view {
  min-height: calc(100vh - 400px);
}

/* Герой-секция */
.hero-section {
  position: relative;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background: url('/images/home-bg.jpg') center/cover no-repeat;
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1); /* Почти прозрачный белый */
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
}

.hero-decoration {
  height: 1px;
  background: linear-gradient(90deg, transparent, #b08d57, transparent);
  margin: 0 auto;
  width: 300px;
}

/* Контейнер для логотипа */
.logo-title-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}

.main-logo {
  height: 120px; /* Размер логотипа как был у текста CHINCH */
  width: auto;
  object-fit: contain;
  max-width: 400px; /* Чтобы не растягивался слишком широко */
}

.hero-subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  color: #8b6b4d; 
  letter-spacing: 0.15em;
  margin: 0.5rem 0 1rem;
  font-weight: 500;
  text-shadow: none;
}

.hero-description {
  font-family: 'EB Garamond', serif;
  font-size: 1.3rem;
  color: #5d4a30; 
  line-height: 1.8;
  margin: 2rem 0;
  font-weight: 300;
  letter-spacing: 0.03em;
  text-shadow: none;
}

/* Призыв к действию - ОДИНАКОВЫЕ КНОПКИ */
.cta-section {
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
  justify-content: center;
}

.cta-button {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.8rem; /* Увеличил горизонтальный padding для равных кнопок */
  border-radius: 40px;
  text-decoration: none;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  min-width: 260px; /* Одинаковая минимальная ширина */
  justify-content: center;
  text-align: center;
  white-space: nowrap; /* Текст в одну строку */
}

.cta-button.primary {
  background: linear-gradient(135deg, #2a1e14, #3a2a1c);
  color: #f8f4ea;
  border: 2px solid #2a1e14;
}

.cta-button.secondary {
  background: linear-gradient(135deg, #f8f4ea, #f2eee5);
  color: #2a1e14;
  border: 2px solid #b08d57;
}

.cta-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.cta-button.primary:hover {
  background: linear-gradient(135deg, #3a2a1c, #2a1e14);
}

.cta-button.secondary:hover {
  background: linear-gradient(135deg, #f2eee5, #f8f4ea);
  border-color: #8b6b4d;
}

.cta-icon {
  font-size: 1.4rem;
  flex-shrink: 0; /* Иконка не сжимается */
}

.cta-text {
  flex-shrink: 1;
  text-align: center;
}

/* Особенности - НОВАЯ СТРУКТУРА */
.features-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #fffbf0 0%, #f8f0e0 100%);
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.feature-item {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

/* УВЕЛИЧИВАЕМ ВЫСОТУ КАРТОЧЕК */
.feature-image-container {
  height: 300px; /* Было 200px, теперь 300px */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(139, 107, 77, 0.15);
  transition: all 0.3s ease;
  width: 100%;
}

.feature-image-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 28px rgba(139, 107, 77, 0.2);
}

.feature-image-placeholder {
  height: 100%;
  background: linear-gradient(135deg, #2a1e14, #3a2a1c);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.feature-image-placeholder::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 60%, rgba(176, 141, 87, 0.1) 100%);
}

/* Фото блюда */
.feature-image-photo-blyda {
  height: 100%;
  background: url('/images/blyda.jpeg') center/cover no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

.feature-image-photo-blyda::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(42, 30, 20, 0.1), rgba(42, 30, 20, 0.05));
}

/* Фото атмосферы */
.feature-image-photo-atmosphere {
  height: 100%;
  background: url('/images/atmosphere-bg.jpg') center/cover no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

.feature-image-photo-atmosphere::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(42, 30, 20, 0.1), rgba(42, 30, 20, 0.05));
}

/* Стили для текста */
.feature-description {
  font-family: 'EB Garamond', serif;
  color: #5d4a30;
  line-height: 1.7;
  font-size: 1.25rem;
  margin: 0;
  text-align: center;
  font-weight: 400;
  padding: 0 1rem;
  max-width: 350px;
}

/* Адаптивность */
@media (max-width: 992px) {
  .main-logo {
    height: 100px;
    max-width: 350px;
  }
  
  .features-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .main-logo {
    height: 90px;
    max-width: 320px;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .hero-description {
    font-size: 1.1rem;
  }
  
  .cta-section {
    flex-direction: column;
    align-items: center;
    gap: 1rem; /* Уменьшаем отступ между кнопками */
  }
  
  /* УМЕНЬШАЕМ КНОПКИ НА МОБИЛЬНЫХ - ОДИНАКОВО */
  .cta-button {
    width: 100%;
    max-width: 300px; /* Одинаковый максимум */
    min-width: auto; /* На мобильных не фиксируем минимальную ширину */
    justify-content: center;
    padding: 1rem 2rem; /* Одинаковый padding */
    font-size: 1.1rem; /* Немного уменьшаем шрифт */
  }
  
  .cta-icon {
    font-size: 1.2rem; /* Уменьшаем иконку */
  }
  
  .features-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .main-logo {
    height: 80px;
    max-width: 280px;
  }
  
  .hero-section {
    padding: 2rem 1rem;
  }
  
  .hero-description {
    font-size: 1rem;
    line-height: 1.6;
    margin: 1.5rem 0;
  }
  
  /* ЕЩЕ МЕНЬШЕ КНОПКИ НА ОЧЕНЬ МАЛЕНЬКИХ ЭКРАНАХ - ОДИНАКОВО */
  .cta-button {
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
    max-width: 280px;
  }
  
  .cta-icon {
    font-size: 1.1rem;
  }
  
  .cta-section {
    gap: 0.8rem;
    margin-top: 2rem;
  }
  
  .features-section {
    padding: 3rem 1rem;
  }
  
  .feature-image-container {
    height: 250px; /* Немного меньше на мобильных */
  }
  
  .feature-description {
    font-size: 1.1rem;
  }
}
</style>