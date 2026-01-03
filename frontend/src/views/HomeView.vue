<template>
  <div class="home-view">
    <!-- Герой-секция -->
    <div class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-decoration top"></div>
        <h1 class="hero-title">CHINCH</h1>
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
        <div class="feature-card">
          <p class="feature-description">
            Отборные продукты от проверенных поставщиков со всего мира
          </p>
        </div>
        
        <div class="feature-card">
          <p class="feature-description">
            Уникальные блюда, созданные нашим шеф-поваром с любовью к деталям
          </p>
        </div>
        
        <div class="feature-card feature-card-photo">
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

.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 5.5rem;
  font-weight: 600;
  color: #2a1e14;
  letter-spacing: 0.25em;
  margin: 1rem 0;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
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

/* Призыв к действию */
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
  padding: 1.2rem 2.5rem;
  border-radius: 40px;
  text-decoration: none;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
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

.feature-card {
  background: white;
  border-radius: 12px;
  padding: 3.5rem 3rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(139, 107, 77, 0.1);
  transition: all 0.4s ease;
  border: 1px solid #e8dcc9;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(139, 107, 77, 0.15);
  border-color: #b08d57;
}

.feature-icon {
  font-size: 2.5rem;
  color: #b08d57;
  margin-bottom: 1.5rem;
}

.feature-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  color: #2a1e14;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.feature-description {
  font-family: 'EB Garamond', serif;
  color: #5d4a30;
  line-height: 1.7;
  font-size: 1.25rem;
}

/* Отзывы */
.testimonials-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f8f4ea 0%, #f1e9d7 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #2a1e14;
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
}

.section-divider {
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, #b08d57, #8b6b4d);
  margin: 0 auto;
}

.testimonials-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8dcc9;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  box-shadow: 0 8px 28px rgba(139, 107, 77, 0.15);
}

.testimonial-quote {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  color: #e8dcc9;
  line-height: 1;
}

.testimonial-text {
  font-family: 'EB Garamond', serif;
  font-size: 1.2rem;
  color: #2a1e14;
  line-height: 1.7;
  margin: 1rem 0 2rem;
  font-style: italic;
  padding-top: 1rem;
}

.testimonial-author {
  border-top: 1px solid #e8dcc9;
  padding-top: 1.5rem;
}

.author-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  color: #2a1e14;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.author-date {
  font-family: 'EB Garamond', serif;
  color: #8b6b4d;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
}

/* Адаптивность */
@media (max-width: 992px) {
  .hero-title {
    font-size: 4.5rem;
  }
  
  .features-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3.5rem;
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
  }
  
  .cta-button {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  
  .features-container {
    grid-template-columns: 1fr;
  }
  
  .testimonials-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.8rem;
  }
  
  .hero-section {
    padding: 2rem 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .features-section,
  .testimonials-section {
    padding: 3rem 1rem;
  }
}

.feature-card-photo {
  background: url('/images/atmosphere-bg.jpg') center/cover no-repeat;
}


.feature-card-photo .feature-icon,
.feature-card-photo .feature-title,
.feature-card-photo .feature-description {
  color: #2a1e14; /* Темный цвет для читаемости на фото */
}

</style>
