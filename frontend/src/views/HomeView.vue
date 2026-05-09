<template>
  <div class="home-view">
    <!-- Герой-секция -->
    <div class="hero-section">
      <!-- Убрали .hero-overlay отсюда -->
      <div class="hero-content">
        <div class="hero-decoration top"></div>
        
        <!-- Логотип ВЕРХНЕМ положении -->
        <div class="logo-title-container">
          <img 
            src="/images/logo/logo-chinch.pdf"
            alt="CHINCH Restaurant Logo" 
            class="main-logo"
          >
        </div>
        
        <!-- Текст "ГАСТРОБИСТРО" ПОД логотипом -->
        <p class="hero-subtitle">ГАСТРОБИСТРО С АВТОРСКОЙ КУХНЕЙ</p>
        <div class="hero-decoration bottom"></div>
        <!-- Текст описания УБРАН -->
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
        <!-- Карточка 1 - С ФОТО ДЕСЕРТА -->
        <div class="feature-item">
          <div class="feature-image-container">
            <img 
              src="/images/desert.jpeg" 
              alt="Десерты ручной работы"
              class="feature-image"
            >
            <div class="feature-overlay"></div>
          </div>
          <p class="feature-description">
            Сладкие шедевры, дарящие настоящее гастрономическое удовольствие
          </p>
        </div>
        
        <!-- Карточка 2 - С КАРУСЕЛЬЮ -->
        <div class="feature-item">
          <div class="feature-image-container">
            <!-- Карусель с 4 фотографиями -->
            <div 
              class="carousel"
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd"
              ref="carouselContainer"
            >
              <div 
                class="carousel-slides"
                :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
              >
                <!-- Слайд 1 -->
                <div class="carousel-slide">
                  <img 
                    src="/images/carousel-1.jpg" 
                    alt="Блюдо от шеф-повара 1"
                    class="carousel-image"
                  >
                  <div class="feature-overlay"></div>
                </div>
                <!-- Слайд 2 -->
                <div class="carousel-slide">
                  <img 
                    src="/images/carousel-2.jpg" 
                    alt="Блюдо от шеф-повара 2"
                    class="carousel-image"
                  >
                  <div class="feature-overlay"></div>
                </div>
                <!-- Слайд 3 -->
                <div class="carousel-slide">
                  <img 
                    src="/images/carousel-3.jpg" 
                    alt="Блюдо от шеф-повара 3"
                    class="carousel-image"
                  >
                  <div class="feature-overlay"></div>
                </div>
                <!-- Слайд 4 -->
                <div class="carousel-slide">
                  <img 
                    src="/images/carousel-4.jpg" 
                    alt="Блюдо от шеф-повара 4"
                    class="carousel-image"
                  >
                  <div class="feature-overlay"></div>
                </div>
              </div>
              
              <!-- Индикаторы (точки) -->
              <div class="carousel-indicators">
                <button
                  v-for="index in 4"
                  :key="index"
                  class="carousel-indicator"
                  :class="{ active: currentSlide === (index - 1) }"
                  @click="goToSlide(index - 1)"
                  :aria-label="`Перейти к слайду ${index}`"
                ></button>
              </div>
            </div>
          </div>
          <p class="feature-description">
            Уникальные блюда, созданные нашим шеф-поваром с любовью к деталям
          </p>
        </div>
        
        <!-- Карточка 3 (с фото) -->
        <div class="feature-item">
          <div class="feature-image-container">
            <img 
              src="/images/atmosphere-bg.jpg" 
              alt="Утонченный интерьер"
              class="feature-image"
            >
            <div class="feature-overlay"></div>
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
  name: 'HomeView',
  
  data() {
    return {
      currentSlide: 0,
      carouselInterval: null,
      touchStartX: 0,
      touchEndX: 0,
      isDragging: false
    }
  },
  
  mounted() {
    this.startCarousel();
  },
  
  beforeUnmount() {
    this.stopCarousel();
  },
  
  methods: {
    startCarousel() {
      this.carouselInterval = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % 4;
      }, 3000);
    },
    
    stopCarousel() {
      if (this.carouselInterval) {
        clearInterval(this.carouselInterval);
        this.carouselInterval = null;
      }
    },
    
    goToSlide(index) {
      this.stopCarousel();
      this.currentSlide = index;
      this.startCarousel();
    },
    
    handleTouchStart(e) {
      // Останавливаем автоматическую прокрутку при касании
      this.stopCarousel();
      this.touchStartX = e.touches[0].clientX;
      this.isDragging = true;
    },
    
    handleTouchMove(e) {
      if (!this.isDragging) return;
      e.preventDefault(); // Предотвращаем скролл страницы
    },
    
    handleTouchEnd(e) {
      if (!this.isDragging) return;
      
      this.touchEndX = e.changedTouches[0].clientX;
      this.handleSwipe();
      
      // Перезапускаем автоматическую прокрутку
      setTimeout(() => {
        this.startCarousel();
      }, 100);
      
      this.isDragging = false;
    },
    
    handleSwipe() {
      const swipeThreshold = 50; // Минимальная дистанция свайпа в пикселях
      const diff = this.touchStartX - this.touchEndX;
      
      // Свайп влево (следующее фото)
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Свайп влево - следующее фото
          this.currentSlide = (this.currentSlide + 1) % 4;
        } else {
          // Свайп вправо - предыдущее фото
          this.currentSlide = (this.currentSlide - 1 + 4) % 4;
        }
      }
    }
  }
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
  padding: 0 2rem 4rem 2rem;
  background: url('/images/home-bg.jpg') center/cover no-repeat;
  background-size: cover;
  background-position: center;
}

/* УБИРАЕМ ЗАТЕМНЕНИЕ ФОНА */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0); /* ИЗМЕНЕНО: было 0.4, стало 0 (прозрачный) */
  z-index: 0; /* Помещаем под контентом */
}

.hero-content {
  position: relative;
  z-index: 1; /* Контент поверх затемнения */
  text-align: center;
  max-width: 800px;
  margin-bottom: 8rem; /* СИЛЬНО УВЕЛИЧИЛ отступ для кнопок (было 5rem) */
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

/* УВЕЛИЧИВАЕМ ТЕНЬ У ЛОГОТИПА */
.main-logo {
  height: 120px;
  width: auto;
  object-fit: contain;
  max-width: 400px;
  /* ЗНАЧИТЕЛЬНО УВЕЛИЧИВАЕМ тень (вместо 0.3-0.15 делаем 0.4-0.25) */
  filter: drop-shadow(0 3px 8px rgba(255, 255, 255, 0.3))
          drop-shadow(0 6px 12px rgba(255, 255, 255, 0.25))
          drop-shadow(0 8px 16px rgba(255, 255, 255, 0.2))
          drop-shadow(0 10px 20px rgba(255, 255, 255, 0.15))
          brightness(0.98) sepia(0.05) saturate(1.02);
  opacity: 0.98;
}

/* УВЕЛИЧИВАЕМ ТЕНЬ У ТЕКСТА */
.hero-subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  color: #f8f4ea; /* Оставляем белый цвет */
  letter-spacing: 0.15em;
  margin: 0.5rem 0 1rem;
  font-weight: 700;
  /* РЕШЕНИЕ: ОПУСКАЕМ ТОЛЬКО ТЕКСТ */
  position: relative;
  top: 30px; /* Текст опускается на 30px */
  /* ЗНАЧИТЕЛЬНО УВЕЛИЧИВАЕМ тень (вместо 0.4-0.25 делаем 0.5-0.35) */
  text-shadow: 
    0 2px 6px rgba(0, 0, 0, 0.5),
    0 4px 8px rgba(0, 0, 0, 0.45),
    0 6px 12px rgba(0, 0, 0, 0.4),
    0 8px 16px rgba(0, 0, 0, 0.35);
}

/* Призыв к действию */
.cta-section {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  position: relative; /* Чтобы был поверх затемнения */
  z-index: 1;
}

.cta-button {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.8rem;
  border-radius: 40px;
  text-decoration: none;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  min-width: 260px;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
}

.cta-button.primary {
  background: linear-gradient(135deg, #2a1e14, #3a2a1c);
  color: #f8f4ea;
  border: 2px solid #2a1e14;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.15),
    0 0 0 2px rgba(255, 255, 255, 0.15),
    0 0 80px 30px rgba(255, 255, 255, 0.25);
}

.cta-button.secondary {
  background: linear-gradient(135deg, #fffdf9, #faf6ef);
  color: #5d4a30;
  border: 2px solid #f3ebdc;
}

.cta-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.cta-button.primary:hover {
  background: linear-gradient(135deg, #3a2a1c, #2a1e14);
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.2),
    0 0 0 2px rgba(255, 255, 255, 0.18),
    0 0 100px 40px rgba(255, 255, 255, 0.3);
}

.cta-button.secondary:hover {
  background: linear-gradient(135deg, #ffffff, #fcf9f3);
  border-color: #f8f2e8;
}

.cta-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.cta-text {
  flex-shrink: 1;
  text-align: center;
}

/* Особенности */
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

/* =========================================================== */
/* ОБЩИЕ СТИЛИ ДЛЯ КОНТЕЙНЕРА С ИЗОБРАЖЕНИЯМИ                 */
/* =========================================================== */
.feature-image-container {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(139, 107, 77, 0.15);
  transition: all 0.3s ease;
  position: relative;
  /* Соотношение сторон 4:3 (как большинство фото) */
  aspect-ratio: 4 / 3;
}

.feature-image-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 28px rgba(139, 107, 77, 0.2);
}

.feature-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.3s ease;
}

.feature-image-container:hover .feature-image {
  transform: scale(1.05);
}

.feature-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(42, 30, 20, 0.1), rgba(42, 30, 20, 0.05));
  pointer-events: none;
}

/* =========================================================== */
/* СТИЛИ ДЛЯ КАРУСЕЛИ (только для второй карточки)           */
/* ДЕЛАЕМ ТОЧНО ТАК ЖЕ КАК В ДРУГИХ КАРТОЧКАХ               */
/* =========================================================== */
.carousel {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  /* Добавляем touch-action для предотвращения конфликтов со скроллом */
  touch-action: pan-y pinch-zoom;
}

.carousel-slides {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
}

.carousel-slide {
  flex: 0 0 100%;
  position: relative;
  height: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* ТОЧНО ТАК ЖЕ КАК У feature-image */
  object-position: center; /* ТОЧНО ТАК ЖЕ КАК У feature-image */
  display: block;
  /* Предотвращаем drag изображений */
  user-select: none;
  -webkit-user-drag: none;
}

/* Индикаторы (точки внизу) */
.carousel-indicators {
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  z-index: 10;
}

.carousel-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  touch-action: manipulation; /* Улучшаем тач-взаимодействие */
}

.carousel-indicator:hover {
  background-color: rgba(255, 255, 255, 0.7);
  transform: scale(1.2);
}

.carousel-indicator.active {
  background-color: #b08d57;
  transform: scale(1.2);
}

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
  /* УВЕЛИЧИВАЕМ ТЕНЬ НА МОБИЛЬНЫХ */
  .main-logo {
    height: 90px;
    max-width: 320px;
    /* УВЕЛИЧИВАЕМ тень на мобильных (вместо 0.2-0.14 делаем 0.35-0.2) */
    filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.25))
        drop-shadow(0 4px 6px rgba(255, 255, 255, 0.2))
        drop-shadow(0 6px 8px rgba(255, 255, 255, 0.15))
        drop-shadow(0 8px 10px rgba(255, 255, 255, 0.1))
        brightness(0.98) sepia(0.05) saturate(1.02);
  }
  
  /* УВЕЛИЧИВАЕМ ТЕНЬ ТЕКСТА НА МОБИЛЬНЫХ */
  .hero-subtitle {
    font-size: 1.3rem;
    font-weight: 700;
    color: #f8f4ea;
    /* РЕШЕНИЕ: ОПУСКАЕМ ТОЛЬКО ТЕКСТ НА ПЛАНШЕТАХ */
    top: 25px; /* Меньше на планшетах */
    /* УВЕЛИЧИВАЕМ тень текста (вместо 0.3-0.2 делаем 0.45-0.3) */
    text-shadow: 
      0 1px 3px rgba(0, 0, 0, 0.45),
      0 2px 4px rgba(0, 0, 0, 0.4),
      0 3px 6px rgba(0, 0, 0, 0.35),
      0 4px 8px rgba(0, 0, 0, 0.3);
  }
  
  .hero-content {
    margin-bottom: 6rem; /* Для планшетов тоже увеличил отступ */
  }
  
  .cta-section {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  
  .cta-button {
    width: 100%;
    max-width: 300px;
    min-width: auto;
    justify-content: center;
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
  
  .cta-button.primary {
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.12),
      0 0 50px 20px rgba(255, 255, 255, 0.22);
  }
  
  .cta-button.primary:hover {
    box-shadow: 
      0 6px 18px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.14),
      0 0 60px 25px rgba(255, 255, 255, 0.26);
  }
  
  .cta-icon {
    font-size: 1.2rem;
  }
  
  .features-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  /* =========================================================== */
  /* НА МОБИЛЬНЫХ: ТОЛЬКО меняем gap между карточками */
  /* Контейнер остается с aspect-ratio 4:3, как на ПК */
  /* =========================================================== */
  .feature-image-container {
    aspect-ratio: 4 / 3; /* Такое же соотношение как на ПК */
  }
  
  /* Уменьшаем точки на мобильных */
  .carousel-indicator {
    width: 8px;
    height: 8px;
  }
  
  .carousel-indicators {
    bottom: 10px;
    gap: 6px;
  }
}

@media (max-width: 480px) {
  /* УВЕЛИЧИВАЕМ ТЕНЬ НА МОБИЛЬНЫХ */
  .main-logo {
    height: 80px;
    max-width: 280px;
    /* УВЕЛИЧИВАЕМ тень (вместо 0.15-0.09 делаем 0.3-0.15) */
    filter: drop-shadow(0 1px 3px rgba(255, 255, 255, 0.2))
        drop-shadow(0 2px 4px rgba(255, 255, 255, 0.15))
        drop-shadow(0 3px 5px rgba(255, 255, 255, 0.1))
        drop-shadow(0 4px 6px rgba(255, 255, 255, 0.05))
        brightness(0.98) sepia(0.05) saturate(1.02);
  }
  
  .hero-section {
    padding: 2rem 1rem;
  }
  
  /* УВЕЛИЧИВАЕМ ТЕНЬ ТЕКСТА НА МОБИЛЬНЫХ */
  .hero-subtitle {
    font-size: 1.2rem;
    font-weight: 700;
    color: #f8f4ea;
    /* РЕШЕНИЕ: ОПУСКАЕМ ТОЛЬКО ТЕКСТ НА МОБИЛЬНЫХ */
    top: 20px; /* Еще меньше на мобильных */
    /* УВЕЛИЧИВАЕМ тень текста (вместо 0.25-0.15 делаем 0.35-0.2) */
    text-shadow: 
      0 1px 2px rgba(0, 0, 0, 0.35),
      0 2px 3px rgba(0, 0, 0, 0.3),
      0 3px 4px rgba(0, 0, 0, 0.25),
      0 4px 5px rgba(0, 0, 0, 0.2);
  }
  
  .hero-content {
    margin-bottom: 5rem; /* Для мобильных тоже увеличил отступ */
  }
  
  .cta-button {
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
    max-width: 280px;
  }
  
  .cta-button.primary {
    box-shadow: 
      0 3px 10px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.1),
      0 0 35px 15px rgba(255, 255, 255, 0.22);
  }
  
  .cta-button.primary:hover {
    box-shadow: 
      0 5px 14px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.12),
      0 0 45px 20px rgba(255, 255, 255, 0.26);
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
  
  .feature-description {
    font-size: 1.1rem;
  }
  
  /* Еще меньше точки на очень маленьких экранах */
  .carousel-indicator {
    width: 6px;
    height: 6px;
  }
  
  .carousel-indicators {
    bottom: 8px;
    gap: 5px;
  }
}

/* =========================================================== */
/* ДОБАВЛЕНО: Убираем отступ на мобильных устройствах         */
/* =========================================================== */
@media (max-width: 768px) {
  .hero-section {
    margin-top: -25px !important; /* Убираем отступ для планшетов */
    min-height: 80vh; /* Немного уменьшаем высоту */
    background-position: center 0%;
  }
}

@media (max-width: 480px) {
  .hero-section {
    margin-top: -25px !important; /* Убираем отступ для мобильных */
    min-height: 85vh; /* Еще уменьшаем высоту */
    padding: 0 1rem 3rem 1rem; /* Уменьшаем нижний отступ */
    background-position: center 0%; /* ДОБАВИЛ */
  }
  
  .hero-content {
    margin-bottom: 4rem; /* Уменьшаем отступ для кнопок */
  }
  
  .main-logo {
    height: 100px !important; /* УВЕЛИЧИВАЕМ логотип на мобильных */
    max-width: 320px !important;
  }
}

@media (max-width: 375px) {
  .hero-section {
    margin-top: -90px !important; /* Еще больше убираем отступ */
    min-height: 50vh;
    background-position: center 0%; /* ДОБАВИЛ */
  }
  
  .main-logo {
    height: 110px !important; /* ЕЩЕ БОЛЬШЕ увеличиваем логотип */
    max-width: 340px !important;
  }
  
  .hero-subtitle {
    top: 15px; /* Самый маленький отступ на очень маленьких экранах */
  }
  
  .cta-section {
    gap: 1.5rem !important; /* ДОБАВЛЯЕМ расстояние между кнопками */
  }
  
  .cta-button {
    margin-bottom: 0.5rem; /* Отступ между кнопками */
  }
}
</style>