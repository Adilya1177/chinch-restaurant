<template>
  <div v-if="showCookieConsent" class="cookie-consent">
    <div class="cookie-container">
      <div class="cookie-content">
        <div class="cookie-icon">🍪</div>
        <div class="cookie-text">
          <p>Мы используем файлы cookie для улучшения работы сайта. Продолжая использовать наш сайт, вы соглашаетесь с 
          <a href="#" @click.prevent="openPrivacyModal" class="cookie-link">Политикой конфиденциальности</a> в части обработки cookie-файлов.</p>
        </div>
        <button @click="acceptCookies" class="cookie-button">Принять</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookieConsent',
  data() {
    return {
      showCookieConsent: false
    }
  },
  mounted() {
    // Проверяем, соглашался ли пользователь раньше
    const cookieAccepted = localStorage.getItem('cookie_consent');
    if (!cookieAccepted) {
      // Показываем через 1 секунду после загрузки
      setTimeout(() => {
        this.showCookieConsent = true;
      }, 1000);
    }
  },
  methods: {
    acceptCookies() {
      // Сохраняем согласие в localStorage
      localStorage.setItem('cookie_consent', 'accepted');
      this.showCookieConsent = false;
    },
    openPrivacyModal() {
      this.$emit('open-privacy');
    }
  }
}
</script>

<style scoped>
.cookie-consent {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: linear-gradient(135deg, #2a1e14 0%, #3a2a1c 100%);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
  animation: slideUp 0.4s ease-out;
}

.cookie-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.cookie-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.cookie-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.cookie-text {
  flex: 1;
  color: #f2eee5;
  font-family: 'EB Garamond', serif;
  font-size: 0.95rem;
  line-height: 1.5;
}

.cookie-text p {
  margin: 0;
}

.cookie-link {
  color: #d4b483;
  text-decoration: underline;
  cursor: pointer;
}

.cookie-link:hover {
  color: #f2eee5;
}

.cookie-button {
  background: linear-gradient(135deg, #b08d57, #8b6b4d);
  color: white;
  border: none;
  padding: 0.7rem 1.8rem;
  border-radius: 8px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  white-space: nowrap;
}

.cookie-button:hover {
  background: linear-gradient(135deg, #c49a6c, #9a7856);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .cookie-container {
    padding: 1rem;
  }
  
  .cookie-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .cookie-icon {
    font-size: 1.8rem;
  }
  
  .cookie-text {
    font-size: 0.85rem;
  }
  
  .cookie-button {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
  }
}
</style>