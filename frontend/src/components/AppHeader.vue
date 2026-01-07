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
        { path: '/reservation', label: 'БРОНИРОВАНИЕ', icon: '✎' }
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
  position: fixed; /* Закрепляем на месте */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12); /* Темная тень */
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
  margin-bottom: 0.6rem; /* Еще уменьшил отступ на 0.2rem */
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 0; /* Еще уменьшил шапку на 0.2rem (было 1.3rem) */
  height: 120px; /* Еще уменьшил высоту шапки на 20px (было 140px) */
}

/* Логотип - ПОДНИМАЕМ ЕЩЕ ВЫШЕ */
.logo-section {
  flex-shrink: 0;
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: -15px; /* ПОДНИМАЕМ логотип ЕЩЕ ВЫШЕ на 5px (было -10px) */
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
  max-height: 130px; /* Еще уменьшил максимальную высоту */
}

.header-logo {
  height: 130px; /* Еще уменьшил логотип на 10px (было 140px) - поднимаем фото выше */
  width: auto;
  object-fit: contain;
  max-width: 350px;
  min-height: 130px;
}

/* Навигация - ПОДНИМАЕМ кнопки ЕЩЕ ВЫШЕ */
.main-navigation {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: -15px; /* ПОДНИМАЕМ кнопки ЕЩЕ ВЫШЕ на 5px (было -10px) */
}

.nav-items {
  display: flex;
  gap: 3rem;
  padding: 0 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.nav-item {
  position: relative;
  text-decoration: none;
  color: #8b6b4d;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 500;
  letter-spacing: 0.1em;
  font-size: 1.1rem;
  flex: 0 0 auto;
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
}

.nav-label {
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-align: center;
  white-space: nowrap;
}

.nav-underline {
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #b08d57, #8b6b4d);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}

.nav-item:hover .nav-underline {
  width: 100%;
  opacity: 0.5;
}

/* Декоративный элемент - ПОДНИМАЕМ ЕЩЕ ВЫШЕ */
.header-ornament {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  height: 100%;
  align-items: center;
  margin-top: -15px; /* ПОДНИМАЕМ декоративный элемент ЕЩЕ ВЫШЕ на 5px (было -10px) */
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

/* Адаптивность */
@media (max-width: 992px) {
  .nav-items {
    gap: 2rem;
  }
  
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

@media (max-width: 768px) {
  .app-header {
    padding: 0 0.8rem;
  }
  
  .header-container {
    flex-direction: column;
    gap: 0 !important;
    padding: 0.5rem 0 !important; /* ЕЩЕ УМЕНЬШИЛ (было 0.7rem) */
    height: auto;
    min-height: 145px !important; /* ЕЩЕ УМЕНЬШИЛ (было 160px) */
  }
  
  .nav-items {
    gap: 1rem;
    padding: 0;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin-top: -5px;
  }
  
  .header-ornament {
    display: none;
  }
  
  .header-logo {
    height: 160px !important; /* ОГРОМНЫЙ ЛОГОТИП (не меняем) */
    max-width: 350px !important;
    min-height: 160px !important;
    margin-top: -25px !important; /* ЧУТЬ ПОДНЯЛ ВЫШЕ */
    margin-bottom: -15px !important; /* ЧУТЬ УВЕЛИЧИЛ ОТРИЦАТЕЛЬНЫЙ ОТСТУП */
  }
  
  .logo-container {
    max-height: 165px;
    height: auto;
    padding: 0;
    margin: 0;
  }
  
  .header-bottom-shadow {
    bottom: -3px;
    height: 3px;
  }
  
  .header-top-line {
    margin-bottom: 0 !important;
    height: 0.5px;
  }
  
  .nav-item {
    padding: 0.4rem 0 !important; /* ЧУТЬ УМЕНЬШИЛ */
    gap: 0.1rem !important;
    flex: 1;
    max-width: 110px;
    min-width: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .logo-section,
  .logo-link {
    height: auto;
    margin-top: 0;
  }
  
  .main-navigation {
    margin-top: 0 !important;
  }
  
  .nav-icon {
    font-size: 1.2rem !important;
    margin-bottom: 0.1rem !important;
  }
  
  .nav-label {
    font-size: 0.85rem !important;
  }

  .nav-item:nth-child(2) {
    margin-right: 5px; /* Отступ справа для МЕНЮ */
  }
  
  .nav-item:nth-child(3) {
    margin-left: 5px; /* Отступ слева для БРОНИРОВАНИЯ */
  }
}

@media (max-width: 480px) {
  .app-header {
    padding: 0 0.5rem;
  }
  
  .nav-items {
    gap: 0.8rem;
    justify-content: space-between;
    margin-top: 0;
  }
  
  .header-logo {
    height: 150px !important; /* ОГРОМНЫЙ ЛОГОТИП (не меняем) */
    max-width: 320px !important;
    min-height: 150px !important;
    margin-top: -20px !important; /* ЧУТЬ ПОДНЯЛ ВЫШЕ */
    margin-bottom: -10px !important; /* ЧУТЬ УВЕЛИЧИЛ ОТРИЦАТЕЛЬНЫЙ ОТСТУП */
  }
  
  .logo-container {
    max-height: 155px;
  }
  
  .header-bottom-shadow {
    bottom: -2px;
    height: 2px;
  }
  
  .header-container {
    padding: 0.4rem 0 !important; /* ЕЩЕ УМЕНЬШИЛ (было 0.6rem) */
    min-height: 135px !important; /* ЕЩЕ УМЕНЬШИЛ (было 150px) */
    gap: 0 !important;
  }
  
  .nav-item {
    padding: 0.3rem 0 !important; /* ЧУТЬ УМЕНЬШИЛ */
    min-width: 75px;
    flex: 1;
  }
  
  .header-top-line {
    margin-bottom: 0 !important;
  }
  
  .main-navigation {
    margin-top: 0 !important;
  }
  
  .nav-icon {
    font-size: 1.1rem !important;
  }
  
  .nav-label {
    font-size: 0.8rem !important;
  }

  .nav-item:nth-child(2) {
    margin-right: 10px !important; /* УВЕЛИЧИЛ отступ */
  }
  
  .nav-item:nth-child(3) {
    margin-left: 10px !important; /* УВЕЛИЧИЛ отступ */
  }

}

@media (max-width: 360px) {
  .app-header {
    padding: 0 0.3rem;
  }
  
  .nav-items {
    gap: 0.5rem;
    justify-content: space-between;
    margin-top: 0;
  }
  
  .header-logo {
    height: 140px !important; /* ОГРОМНЫЙ ЛОГОТИП (не меняем) */
    max-width: 290px !important;
    min-height: 140px !important;
    margin-top: -15px !important; /* ЧУТЬ ПОДНЯЛ ВЫШЕ */
    margin-bottom: -5px !important; /* ЧУТЬ УВЕЛИЧИЛ ОТРИЦАТЕЛЬНЫЙ ОТСТУП */
  }
  
  .logo-container {
    max-height: 145px;
  }
  
  .header-container {
    padding: 0.3rem 0 !important; /* ЕЩЕ УМЕНЬШИЛ (было 0.5rem) */
    min-height: 125px !important; /* ЕЩЕ УМЕНЬШИЛ (было 140px) */
    gap: 0 !important;
  }
  
  .header-bottom-shadow {
    bottom: -1px;
    height: 1px;
  }
  
  .nav-item {
    padding: 0.2rem 0 !important; /* ЧУТЬ УМЕНЬШИЛ */
    flex: 1;
    min-width: 65px;
  }
  
  .header-top-line {
    margin-bottom: 0 !important;
  }
  
  .main-navigation {
    margin-top: 0 !important;
  }
  
  .nav-icon {
    font-size: 1rem !important;
  }
  
  .nav-label {
    font-size: 0.75rem !important;
  }

  .nav-item:nth-child(2) {
    margin-right: 15px !important; /* МАКСИМАЛЬНЫЙ отступ */
  }
  
  .nav-item:nth-child(3) {
    margin-left: 15px !important; /* МАКСИМАЛЬНЫЙ отступ */
  }

}
</style>