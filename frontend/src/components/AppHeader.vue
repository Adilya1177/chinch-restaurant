<template>
  <header class="app-header">
    <!-- Декоративная верхняя линия -->
    <div class="header-top-line"></div>
    
    <div class="header-container">
      <!-- Логотип -->
      <div class="logo-section">
        <router-link to="/" class="logo-link">
          <div class="logo-mark">✦</div>
          <div class="logo-text">CHINCH</div>
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
      ]
    };
  }
};
</script>

<style scoped>
.app-header {
  background: linear-gradient(135deg, #f9f6f0 0%, #f2eee5 100%);
  border-bottom: 1px solid rgba(212, 180, 131, 0.3);
  padding: 0 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
}

.header-top-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, #b08d57, transparent);
  margin-bottom: 1rem;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

/* Логотип */
.logo-section {
  flex-shrink: 0;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
}

.logo-link:hover {
  transform: scale(1.02);
}

.logo-mark {
  font-size: 1.8rem;
  color: #b08d57;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.logo-text {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 600;
  color: #2a1e14;
  letter-spacing: 0.15em;
  text-transform: uppercase;
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
  background: #b08d57;
  border-radius: 50%;
  opacity: 0.5;
}

.ornament-line {
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, #b08d57, transparent);
}

/* Адаптивность */
@media (max-width: 992px) {
  .nav-items {
    gap: 2rem;
  }
  
  .logo-text {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .app-header {
    padding: 0 1rem;
  }
  
  .header-container {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }
  
  .nav-items {
    gap: 1.5rem;
    padding: 0;
  }
  
  .nav-label {
    font-size: 0.8rem;
  }
  
  .header-ornament {
    display: none;
  }
}

@media (max-width: 480px) {
  .nav-items {
    gap: 1rem;
  }
  
  .nav-icon {
    font-size: 1rem;
  }
  
  .nav-label {
    font-size: 0.75rem;
  }
  
  .logo-text {
    font-size: 1.5rem;
  }
}
</style>
