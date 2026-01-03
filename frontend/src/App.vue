<template>
  <div id="app">
    <!-- Красивый заголовок -->
    <AppHeader />
    
    <!-- Основной контент -->
    <main class="app-main">
      <router-view/>
    </main>
    
    <!-- Футер -->
    <footer class="app-footer">
      <div class="footer-container">
        <div class="footer-section">
          <div class="footer-logo">CHINCH</div>
          <p class="footer-tagline">Изысканная кухня с 2024 года</p>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-title">КОНТАКТЫ</h3>
          <p class="footer-info">ул. Берзарина, 28А, корп. 4, Москва</p>
          <p class="footer-info">+7 (915) 054-96-06</p>
          <p class="footer-info">info@chinch.ru</p>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-title">ЧАСЫ РАБОТЫ</h3>
          <p class="footer-info">Пн-Вс: 08:00 - 23:00</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=EB+Garamond:wght@400;500;600&display=swap');

#app {
  font-family: 'EB Garamond', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2a1e14;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f9f6f0 0%, #f2eee5 100%);
}

.app-main {
  flex: 1;
  padding: 2rem 0;
}

/* Футер */
.app-footer {
  background: linear-gradient(135deg, #2a1e14 0%, #3a2a1c 100%);
  color: #f2eee5;
  padding: 3rem 0 1.5rem;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: #f2eee5;
  margin-bottom: 0.5rem;
}

.footer-tagline {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  color: #d4b483;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
}

.footer-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #f2eee5;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, #d4b483, transparent);
}

.footer-info {
  color: #d4b483;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0.3rem 0;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212, 180, 131, 0.3), transparent);
  margin: 2rem 0;
}

.copyright {
  text-align: center;
  color: #8b6b4d;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  padding: 1rem 0;
}

/* Адаптивность */
@media (max-width: 768px) {
  .app-main {
    padding: 1rem 0;
  }
  
  .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1.5rem;
  }
  
  .footer-section {
    text-align: center;
  }
  
  .footer-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .app-footer {
    padding: 2rem 0 1rem;
  }
  
  .footer-container {
    padding: 0 1rem;
  }
  
  .footer-logo {
    font-size: 1.8rem;
  }
}
</style>
