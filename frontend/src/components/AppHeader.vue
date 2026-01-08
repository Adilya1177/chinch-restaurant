<template>
  <header class="app-header" :class="{ 'header-hidden': isHidden }">
    <!-- Декоративная верхняя линия -->
    <div class="header-top-line"></div>
    
    <div class="header-container">
      <!-- Логотип -->
      <div class="logo-section">
        <router-link to="/" class="logo-link">
          <div class="logo-container">
            <img 
              src="/images/logo/Artboard 4 copy 6@3x.png" 
              alt="CHINCH Restaurant Logo" 
              class="header-logo"
              style="filter: brightness(0.7) sepia(0.3) saturate(1.2); opacity: 0.95;"
            >
          </div>
        </router-link>
      </div>

      <!-- Основная навигация -->
      <nav class="main-navigation">
        <div class="nav-items">
          <router-link 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            class="nav-item"
            active-class="nav-item-active"
          >
            <span class="nav-icon">{{ item.icon }}</span>
            <span class="nav-label">{{ item.label }}</span>
            <div class="nav-underline"></div>
          </router-link>
        </div>
      </nav>

      <!-- Декоративный элемент -->
      <div class="header-ornament">
        <div class="ornament-dot"></div>
        <div class="ornament-line"></div>
        <div class="ornament-dot"></div>
      </div>
    </div>
    
    <!-- Темная тень внизу шапки -->
    <div class="header-bottom-shadow"></div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      navItems: [
        { path: '/', label: 'ГЛАВНАЯ', icon: '⌂' },
        { path: '/menu', label: 'МЕНЮ', icon: '☰' },
        { path: '/reservation', label: 'БРОНИРОВАНИЕ', icon: '✎' },
        { path: '/delivery', label: 'ДОСТАВКА', icon: '⏷' }
      ],
      isHidden: false,
      lastScrollTop: 0
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Простая логика: если скроллим вниз больше 50px - скрываем
      if (scrollTop > this.lastScrollTop && scrollTop > 50) {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }
      
      this.lastScrollTop = scrollTop;
    }
  }
};
</script>

<style scoped>
.app-header {
  background: linear-gradient(135deg, #f9f6f0 0%, #f2eee5 100%);
  border-bottom: 1px solid rgba(212, 180, 131, 0.3);
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transition: transform 0.4s ease-in-out;
  transform: translateY(0);
}

/* Усиленная тень при скролле */
.app-header:not(.header-hidden) {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Скрытое состояние - плавно уезжает вверх */
.app-header.header-hidden {
  transform: translateY(-100%);
}

/* Дополнительная темная тень внизу */
.header-bottom-shadow {
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 8px;
  background: linear-gradient(to bottom, 
    rgba(0, 0, 0, 0.1) 0%, 
    rgba(0, 0, 0, 0.08) 30%, 
    rgba(0, 0, 0, 0.04) 60%, 
    transparent 100%);
  pointer-events: none;
}

.header-top-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, #b08d57, transparent);
  margin-bottom: 0.6rem;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 0;
  height: 120px;
}

/* Логотип */
.logo-section {
  flex-shrink: 0;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: -15px;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
  height: 100%;
}

.logo-link:hover {
  transform: scale(1.02);
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
  max-height: 130px;
}

.header-logo {
  height: 130px;
  width: auto;
  object-fit: contain;
  max-width: 350px;
  min-height: 130px;
}

/* НАВИГАЦИЯ - ПК ВЕРСИЯ (не трогаем) */
.main-navigation {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: -15px;
}

.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
  gap: 2.5rem; /* ПК расстояние - оставляем как есть */
}

.nav-item {
  position: relative;
  text-decoration: none;
  color: #8b6b4d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.8rem;
  transition: all 0.3s ease;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  letter-spacing: 0.1em;
  font-size: 1.1rem;
  flex: 0 1 auto;
  min-width: 0;
  text-align: center;
}

.nav-item:hover {
  color: #2a1e14;
}

.nav-item-active {
  color: #2a1e14;
}

.nav-item-active .nav-underline {
  width: 100%;
  opacity: 1;
}

.nav-icon {
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 0.2rem;
  color: #8b6b4d;
  line-height: 1;
  display: block;
}

.nav-item-active .nav-icon {
  color: #2a1e14;
}

.nav-label {
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  line-height: 1.2;
  display: block;
}

.nav-underline {
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 2px;
  background: linear-gradient(90deg, #b08d57, #8b6b4d);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}

.nav-item:hover .nav-underline {
  opacity: 0.5;
}

.nav-item-active .nav-underline {
  opacity: 1;
}

/* Декоративный элемент */
.header-ornament {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  height: 100%;
  align-items: center;
  margin-top: -15px;
}

.ornament-dot {
  width: 4px;
  height: 4px;
  background: #8b6b4d;
  border-radius: 50%;
  opacity: 0.5;
}

.ornament-line {
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, #8b6b4d, transparent);
}

/* ========================================= */
/* ТОЛЬКО МОБИЛЬНАЯ ВЕРСИЯ - ДЕЛАЕМ БЛИЖЕ   */
/* ========================================= */

/* Планшет (992px и меньше) - НЕ МЕНЯЕМ */
@media (max-width: 992px) {
  .header-logo {
    height: 110px;
    max-width: 300px;
  }
  
  .logo-container {
    max-height: 120px;
  }
  
  .header-container {
    height: 110px;
    padding: 0.9rem 0;
  }
  
  .logo-section {
    margin-top: -13px;
  }
  
  .main-navigation {
    margin-top: -13px;
  }
  
  .header-ornament {
    margin-top: -13px;
  }
}

/* Мобильные (768px и меньше) - ДЕЛАЕМ БЛИЖЕ */
@media (max-width: 768px) {
  .app-header {
    padding: 0 0.5rem;
  }
  
  .header-container {
    flex-direction: column;
    padding: 0.4rem 0 !important;
    height: auto;
    min-height: 140px !important;
    gap: 0.3rem !important;
  }
  
  /* МЕНЯЕМ ТОЛЬКО ЭТО - ДЕЛАЕМ БЛИЖЕ */
  .nav-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.2rem !important; /* БЫЛО: 0.5rem, СТАЛО: 0.2rem - НАМНОГО БЛИЖЕ! */
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin: 0 auto;
  }
  
  .nav-item {
    padding: 0.25rem 0.05rem !important; /* Уменьшили padding для компактности */
    width: 100%;
    min-height: 45px;
    margin: 0;
  }
  
  .header-ornament {
    display: none;
  }
  
  .header-logo {
    height: 150px !important;
    max-width: 320px !important;
    min-height: 150px !important;
    margin: -20px auto -10px auto !important;
  }
  
  .logo-container {
    max-height: 155px;
    height: auto;
    padding: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  
  .header-bottom-shadow {
    bottom: -3px;
    height: 3px;
  }
  
  .header-top-line {
    margin-bottom: 0 !important;
    height: 0.5px;
  }
  
  .logo-section,
  .logo-link {
    height: auto;
    margin-top: 0;
    width: 100%;
    justify-content: center;
  }
  
  .main-navigation {
    margin-top: 0 !important;
    width: 100%;
  }
  
  .nav-icon {
    font-size: 1.1rem !important;
    margin-bottom: 0.05rem !important; /* Уменьшили отступ под иконкой */
  }
  
  .nav-label {
    font-size: 0.75rem !important;
    white-space: normal;
    line-height: 1.1;
    padding: 0 0.1rem; /* Минимальный padding по бокам */
  }
  
  .nav-underline {
    width: 50%;
  }
}

/* Маленькие мобильные (480px и меньше) - ЕЩЕ БЛИЖЕ */
@media (max-width: 480px) {
  .app-header {
    padding: 0 0.3rem;
  }
  
  /* ЕЩЕ БЛИЖЕ */
  .nav-items {
    gap: 0.15rem !important; /* БЫЛО: 0.3rem, СТАЛО: 0.15rem */
  }
  
  .header-logo {
    height: 140px !important;
    max-width: 290px !important;
    min-height: 140px !important;
    margin: -15px auto -5px auto !important;
  }
  
  .logo-container {
    max-height: 145px;
  }
  
  .header-container {
    padding: 0.3rem 0 !important;
    min-height: 130px !important;
    gap: 0.2rem !important;
  }
  
  .nav-item {
    padding: 0.2rem 0.03rem !important; /* Еще меньше padding */
    min-height: 40px;
  }
  
  .nav-icon {
    font-size: 1rem !important;
    margin-bottom: 0.03rem !important;
  }
  
  .nav-label {
    font-size: 0.7rem !important;
    padding: 0 0.05rem;
  }
}

/* Очень маленькие мобильные (360px и меньше) - СУПЕР КОМПАКТНО */
@media (max-width: 360px) {
  .app-header {
    padding: 0 0.2rem;
  }
  
  /* СУПЕР БЛИЗКО */
  .nav-items {
    gap: 0.1rem !important; /* БЫЛО: 0.2rem, СТАЛО: 0.1rem - МИНИМАЛЬНОЕ РАССТОЯНИЕ */
  }
  
  .header-logo {
    height: 130px !important;
    max-width: 270px !important;
    min-height: 130px !important;
    margin: -10px auto -5px auto !important;
  }
  
  .logo-container {
    max-height: 135px;
  }
  
  .header-container {
    padding: 0.2rem 0 !important;
    min-height: 120px !important;
  }
  
  .nav-item {
    padding: 0.15rem 0.02rem !important; /* Минимальный padding */
    min-height: 35px;
  }
  
  .nav-icon {
    font-size: 0.9rem !important;
  }
  
  .nav-label {
    font-size: 0.65rem !important;
    letter-spacing: 0.1em; /* Немного уменьшили междубуквенный интервал */
  }
}

/* Для очень широких экранов (больше 1200px) - ПК НЕ ТРОГАЕМ */
@media (min-width: 1200px) {
  .nav-items {
    max-width: 700px;
  }
}
</style>