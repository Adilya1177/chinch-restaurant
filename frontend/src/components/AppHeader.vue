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
  margin-bottom: 1rem;
  transition: margin-bottom 0.3s ease;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
}

/* Логотип - ОЧЕНЬ большой (максимально для шапки) */
.logo-section {
  flex-shrink: 0;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
}

.logo-link:hover {
  transform: scale(1.02);
}

.logo-container {
  display: flex;
  align-items: center;
  height: 160px; /* Максимально большой контейнер для шапки */
}

.header-logo {
  height: 150px; /* Очень большой логотип */
  width: auto;
  object-fit: contain;
  max-width: 350px; /* Чтобы не растягивался слишком широко */
}

/* Навигация */
.main-navigation {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-items {
  display: flex;
  gap: 3rem;
  padding: 0 2rem;
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

/* Декоративный элемент */
.header-ornament {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
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
    height: 130px;
    max-width: 300px;
  }
  
  .logo-container {
    height: 140px;
  }
}

@media (max-width: 768px) {
  .app-header {
    padding: 0 0.8rem; /* Уменьшен padding */
    height: auto;
  }
  
  .header-container {
    flex-direction: column;
    gap: 0.5rem; /* Уменьшен отступ между элементами */
    padding: 0.6rem 0; /* Уменьшен padding */
  }
  
  .nav-items {
    gap: 1rem;
    padding: 0;
  }
  
  .nav-label {
    font-size: 0.75rem;
  }
  
  .nav-icon {
    font-size: 1rem;
    margin-bottom: 0.1rem;
  }
  
  .header-ornament {
    display: none;
  }
  
  .header-logo {
    height: 120px;
    max-width: 250px;
  }
  
  .logo-container {
    height: 130px;
  }
  
  .header-bottom-shadow {
    bottom: -3px; /* Уменьшена тень */
    height: 3px;
  }
  
  .header-top-line {
    margin-bottom: 0.3rem; /* Уменьшен отступ */
    height: 0.5px; /* Уменьшена толщина линии */
  }
  
  .nav-item {
    padding: 0.2rem 0; /* Уменьшен padding */
    gap: 0.2rem;
  }
}

@media (max-width: 480px) {
  .app-header {
    padding: 0 0.5rem; /* Уменьшен padding */
  }
  
  .nav-items {
    gap: 0.8rem;
  }
  
  .nav-icon {
    font-size: 0.9rem;
  }
  
  .nav-label {
    font-size: 0.65rem;
    letter-spacing: 0.1em;
  }
  
  .header-logo {
    height: 100px;
    max-width: 220px;
  }
  
  .logo-container {
    height: 110px;
  }
  
  .header-bottom-shadow {
    bottom: -2px; /* Еще уменьшена тень */
    height: 2px;
  }
  
  .header-container {
    padding: 0.5rem 0; /* Уменьшен padding */
  }
  
  .nav-item {
    padding: 0.15rem 0; /* Уменьшен padding */
  }
  
  .header-top-line {
    margin-bottom: 0.2rem; /* Уменьшен отступ */
  }
}

/* Для самых маленьких экранов */
@media (max-width: 360px) {
  .app-header {
    padding: 0 0.3rem; /* Уменьшен padding */
  }
  
  .nav-items {
    gap: 0.5rem;
  }
  
  .header-logo {
    height: 80px;
    max-width: 180px;
  }
  
  .logo-container {
    height: 90px;
  }
  
  .nav-label {
    font-size: 0.6rem;
  }
  
  .header-container {
    padding: 0.4rem 0; /* Уменьшен padding */
  }
  
  .header-bottom-shadow {
    bottom: -1px; /* Минимальная тень */
    height: 1px;
  }
}
</style>