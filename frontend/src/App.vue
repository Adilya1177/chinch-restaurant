<template>
  <div id="app">
    <!-- Красивый заголовок -->
    <AppHeader />
    
    <!-- Основной контент С БОЛЬШИМ ОТСТУПОМ -->
    <main class="app-main">
      <router-view @open-privacy="openPrivacyModal" />
    </main>
    
    <!-- Футер -->
    <footer class="app-footer">
      <div class="footer-container">
        <div class="footer-section">
          <div class="footer-logo-container">
            <img 
              src="/images/logo/logo-chinch.png" 
              alt="CHINCH Restaurant Logo" 
              class="footer-logo-img"
              style="filter: brightness(0.9) sepia(0.2) saturate(1.1);"
            >
          </div>
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
        
        <div class="footer-section">
          <h3 class="footer-title">РЕКВИЗИТЫ</h3>
          <p class="footer-info-small">ИНН: 7718722140</p>
          <p class="footer-info-small">ОГРН: 1237700012345</p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-line"></div>
        <!-- ССЫЛКА ОТКРЫВАЕТ МОДАЛЬНОЕ ОКНО -->
        <div class="footer-links">
          <a href="#" @click.prevent="openPrivacyModal" class="privacy-link">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
    
    <!-- Модальное окно -->
    <PrivacyModal ref="privacyModal" />
    
    <!-- Cookie уведомление -->
    <CookieConsent @open-privacy="openPrivacyModal" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import PrivacyModal from './components/PrivacyModal.vue';
import CookieConsent from './components/CookieConsent.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    PrivacyModal,
    CookieConsent
  },
  methods: {
    openPrivacyModal() {
      this.$refs.privacyModal.openModal();
    }
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

/* ОСНОВНОЙ КОНТЕНТ - БОЛЬШОЙ ОТСТУП ДЛЯ ФИКСИРОВАННОЙ ШАПКИ */
.app-main {
  flex: 1;
  padding: 0;
  padding-top: 160px; /* БОЛЬШОЙ отступ для десктопа */
  min-height: calc(100vh - 250px);
}

/* Футер */
.app-footer {
  background: linear-gradient(135deg, #2a1e14 0%, #3a2a1c 100%);
  color: #f2eee5;
  padding: 3rem 0 1rem;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-bottom: 1.5rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Контейнер для логотипа в футере */
.footer-logo-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.5rem;
  height: 60px;
}

.footer-logo-img {
  height: 50px;
  width: auto;
  object-fit: contain;
  max-width: 200px;
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

.footer-info-small {
  color: #d4b483;
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0.2rem 0;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212, 180, 131, 0.3), transparent);
  margin: 0.5rem 0 1rem 0;
}

/* СТИЛИ ДЛЯ ССЫЛКИ */
.footer-links {
  text-align: center;
  margin-top: 1rem;
}

.privacy-link {
  color: #d4b483;
  text-decoration: none;
  font-family: 'EB Garamond', serif;
  font-size: 0.85rem;
  transition: color 0.3s ease;
  cursor: pointer;
}

.privacy-link:hover {
  color: #f2eee5;
  text-decoration: underline;
}

/* Адаптивность футера */
@media (max-width: 768px) {
  .app-main {
    padding: 1rem 0;
    padding-top: 200px;
  }
  
  .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1.5rem;
  }
  
  .footer-section {
    text-align: center;
  }
  
  .footer-logo-container {
    justify-content: center;
  }
  
  .footer-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .app-footer {
    padding: 2rem 0 0.5rem;
  }
  
  .privacy-link {
    font-size: 0.75rem;
  }
  
  .footer-info-small {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .app-main {
    padding-top: 220px;
  }
  
  .footer-container {
    padding: 0 1rem;
  }
  
  .footer-logo-img {
    height: 45px;
    max-width: 180px;
  }
  
  .footer-logo-container {
    height: 55px;
  }
  
  .app-footer {
    padding: 1.5rem 0 0.5rem;
  }
}

@media (max-width: 375px) {
  .app-main {
    padding-top: 230px;
  }
}
</style>