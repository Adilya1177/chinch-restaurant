<template>
  <div class="menu-view">
    <div class="menu-wrapper">
      <!-- Заголовок -->
      <header class="page-header">
        <h1 class="restaurant-logo">CHINCH</h1>
        <p class="restaurant-description">Авторская кухня и коктейли</p>
      </header>

      <!-- Основная навигация -->
      <nav class="primary-navigation">
        <div class="nav-container">
          <button 
            v-for="category in mainCategories" 
            :key="category.value"
            @click="selectMainCategory(category.value)"
            :class="['primary-nav-btn', { active: selectedMainCategory === category.value }]"
          >
            <span class="btn-label">{{ category.label }}</span>
            <span class="btn-counter">{{ category.count }}</span>
          </button>
        </div>
        <div class="scroll-hint">
          <span class="hint-text">← Прокрутите для выбора →</span>
          <div class="hint-dots">
            <span class="hint-dot active"></span>
            <span class="hint-dot"></span>
            <span class="hint-dot"></span>
          </div>
        </div>
      </nav>

      <!-- Навигация по подкатегориям -->
      <div v-if="!loading && subCategories.length > 0" class="secondary-navigation">
        <div class="nav-scroll-container">
          <button 
            v-for="subCat in subCategories" 
            :key="subCat.name"
            @click="scrollToCategory(subCat.name)"
            :class="['secondary-nav-btn', { active: activeCategory === subCat.name }]"
          >
            {{ formatCategoryName(subCat.name) }}
          </button>
        </div>
      </div>

      <!-- Состояния -->
      <div v-if="loading" class="state-loading">
        <p>Загрузка меню...</p>
      </div>

      <!-- Основное содержимое меню -->
      <main v-else class="menu-main">
        <div class="categories-grid">
          <div 
            v-for="subCategory in groupedMenu" 
            :key="subCategory.name" 
            :id="'category-' + subCategory.name"
            class="menu-category"
          >
            <!-- Заголовок категории -->
            <div class="category-title-section">
              <h2 class="category-name">{{ subCategory.name.toUpperCase() }}</h2>
            </div>

            <!-- Элементы категории -->
            <div class="items-container">
              <div 
                v-for="item in subCategory.items" 
                :key="item.id" 
                class="dish-card"
              >
                <div class="dish-card-inner">
                  <h3 class="dish-title">{{ item.name }}</h3>
                  
                  <!-- Блок с объемом и ценами -->
                  <div class="price-volume-block" v-if="item.volumeInfo || item.basePrice || item.priceInfo">
                    <!-- Объем -->
                    <div v-if="item.volumeInfo" class="volume-info">
                      <span class="volume-label">{{ formatVolume(item.volumeInfo) }}</span>
                    </div>
                    
                    <!-- Цены -->
                    <div class="prices-container">
                      <!-- Базовая цена (для простых товаров) -->
                      <div v-if="item.basePrice && !item.priceInfo" class="price-single">
                        <span class="price-value">{{ formatPrice(item.basePrice) }}</span>
                      </div>
                      
                      <!-- Множественные цены (для напитков с разными объемами) -->
                      <div v-if="item.priceInfo" class="price-multiple">
                        <span class="price-values">{{ formatPriceInfo(item.priceInfo, item.name) }}</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Опции (дополнительные варианты) -->
                  <div v-if="item.options" class="dish-details">
                    <div class="detail-item options-info">
                      <span class="options-text">{{ formatOptions(item.options) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { menuService } from '../services/api';

export default {
  name: 'MenuView',
  data() {
    return {
      loading: true,
      error: null,
      menuItems: [],
      eggDishes: [],
      eggAddons: [],
      selectedMainCategory: 'all',
      activeCategory: '',
    };
  },
  computed: {
    mainCategories() {
      return [
        { value: 'all', label: 'ВСЁ МЕНЮ', count: this.menuItems.length },
        { value: 'Еда', label: 'БЛЮДА', count: this.menuItems.filter(item => item.mainCategory === 'Еда').length },
        { value: 'Напитки', label: 'НАПИТКИ', count: this.menuItems.filter(item => item.mainCategory === 'Напитки').length },
      ];
    },
    
    groupedMenu() {
      let filteredItems = this.menuItems;
      
      if (this.selectedMainCategory !== 'all') {
        filteredItems = filteredItems.filter(item => 
          item.mainCategory === this.selectedMainCategory
        );
      }
      
      const groups = {};
      filteredItems.forEach(item => {
        if (!groups[item.subCategory]) {
          groups[item.subCategory] = {
            name: item.subCategory,
            items: []
          };
        }
        groups[item.subCategory].items.push(item);
      });
      
      // Порядок категорий
      const categoryOrder = [
        'ЗАВТРАКИ НА ВЕСЬ ДЕНЬ',
        'NEW YEAR SPECIAL',
        'СУПЫ',
        'РИМСКАЯ ПИЦЦА',
        'ЗАКУСКИ',
        'САЛАТЫ',
        'НА ГОРЯЧЕЕ',
        'БЛЮДА ИЗ ЯИЦ',
        'КОФЕ',
        'ФРЕШ',
        'SPECIAL',
        'ХОЛОДНЫЕ НАПИТКИ',
        'ЧАЙ / ТИЗАН',
        'СОК БУТ.',
        'ВОДА',
        'ПИВО'
      ];
      
      const sortedGroups = {};
      categoryOrder.forEach(category => {
        if (groups[category]) {
          sortedGroups[category] = groups[category];
        }
      });
      
      Object.keys(groups).forEach(category => {
        if (!sortedGroups[category]) {
          sortedGroups[category] = groups[category];
        }
      });
      
      return sortedGroups;
    },
    
    subCategories() {
      return Object.values(this.groupedMenu);
    }
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true;
        
        // Используем наш сервис вместо прямого вызова axios
        this.menuItems = await menuService.getDishes();
        
        console.log('✅ Загружены блюда:', this.menuItems.length);
        
      } catch (err) {
        console.error('❌ Ошибка загрузки данных:', err);
        this.error = 'Сервер временно недоступен';
        // На GitHub Pages покажем мок-данные из catch
        this.menuItems = [];
      } finally {
        this.loading = false;
      }
    },
    
    selectMainCategory(category) {
      this.selectedMainCategory = category;
      this.activeCategory = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    
    formatCategoryName(name) {
      if (name === 'ЗАВТРАКИ НА ВЕСЬ ДЕНЬ') return 'ЗАВТРАКИ';
      if (name === 'ХОЛОДНЫЕ НАПИТКИ') return 'ХОЛОДНЫЕ';
      return name;
    },
    
    scrollToCategory(categoryName) {
      this.activeCategory = categoryName;
      
      setTimeout(() => {
        const element = document.getElementById(`category-${categoryName}`);
        if (element) {
          const offset = 150;
          const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementTop - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    },
    
    // Форматирование объема
    formatVolume(volumeInfo) {
      if (!volumeInfo) return '';
      // Если есть символ "|", разбиваем на строки
      if (volumeInfo.includes('|')) {
        return volumeInfo.split('|').map(v => v.trim()).join(' / ');
      }
      return volumeInfo;
    },
    
    // Форматирование цены
    formatPrice(price) {
      if (!price) return '';
      return price;
    },
    
    // Форматирование информации о ценах (несколько цен)
    formatPriceInfo(priceInfo, itemName) {
      if (!priceInfo) return '';
      
      // Для БАМБЛ-КАРАМЕЛЬ: "420 450 850 р" → "420 / 450 / 850 р"
      if (itemName && itemName.includes('БАМБЛ-КАРАМЕЛЬ')) {
        // Разбиваем по пробелам и собираем обратно с разделителями
        const parts = priceInfo.match(/\d+/g);
        if (parts && parts.length === 3) {
          return `${parts[0]} / ${parts[1]} / ${parts[2]} р`;
        }
        return priceInfo.replace(/\s+/g, " / ");
      }
      
      // Для других напитков с форматом "240 | 260 р" → "240 / 260 р"
      if (priceInfo.includes('|')) {
        return priceInfo.split('|').map(p => p.trim()).join(' / ');
      }
      
      return priceInfo;
    },
    
    // Форматирование опций
    formatOptions(options) {
      if (!options) return '';
      // Заменяем "|" на более читаемый разделитель
      return options.replace(/\|/g, ' | ');
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
/* Стили остаются те же, добавим только новые */
.menu-view {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f4ea 0%, #e8dcc9 100%);
  padding: 2rem 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.restaurant-logo {
  font-family: 'Playfair Display', serif;
  font-size: 4rem;
  color: #2a1e14;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin: 0 0 0.5rem 0;
}

.restaurant-description {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  color: #8b6b4d;
  font-style: italic;
  margin: 0;
}

/* Основная навигация */
.primary-navigation {
  margin-bottom: 2.5rem;
}

.nav-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.primary-nav-btn {
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid #d4b483;
  color: #2a1e14;
  padding: 1rem 2rem;
  border-radius: 999px;
  cursor: pointer;
  font-family: 'EB Garamond', serif;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.primary-nav-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(139, 107, 77, 0.2);
  background: white;
}

.primary-nav-btn.active {
  background: #8b6b4d;
  border-color: #8b6b4d;
  color: #f8f4ea;
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(139, 107, 77, 0.3);
}

.btn-label {
  font-family: 'EB Garamond', serif;
  letter-spacing: 0.05em;
}

.btn-counter {
  background: rgba(255, 255, 255, 0.9);
  color: #8b6b4d;
  border-radius: 999px;
  padding: 0.2rem 0.6rem;
  font-size: 0.85rem;
  font-weight: 500;
}

.primary-nav-btn.active .btn-counter {
  background: rgba(248, 244, 234, 0.2);
  color: #f8f4ea;
}

.scroll-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.hint-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.9rem;
  color: #8b6b4d;
  opacity: 0.8;
  font-style: italic;
}

.hint-dots {
  display: flex;
  gap: 0.5rem;
}

.hint-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(139, 107, 77, 0.3);
  transition: all 0.3s ease;
}

.hint-dot.active {
  background: #8b6b4d;
  transform: scale(1.2);
}

/* Вторичная навигация */
.secondary-navigation {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
}

.nav-scroll-container {
  display: flex;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  overflow-x: auto;
  scrollbar-width: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  border: 1px solid rgba(232, 220, 201, 0.5);
  backdrop-filter: blur(10px);
  max-width: 90%;
  margin: 0 auto;
}

.nav-scroll-container::-webkit-scrollbar {
  display: none;
}

.secondary-nav-btn {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #e8dcc9;
  color: #8b6b4d;
  padding: 1rem 2.5rem;
  border-radius: 999px;
  cursor: pointer;
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.secondary-nav-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(139, 107, 77, 0.15);
}

.secondary-nav-btn.active {
  background: #8b6b4d;
  border-color: #8b6b4d;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 107, 77, 0.25);
}

/* Категории */
.categories-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 4rem;
}

.menu-category {
  margin-bottom: 3rem;
}

.category-title-section {
  text-align: center;
  margin-bottom: 2rem;
}

.category-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #2a1e14;
  font-weight: 600;
  letter-spacing: 0.15em;
  margin: 0;
}

/* Карточки блюд */
.items-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.2rem;
}

.dish-card-inner {
  background: rgba(248, 244, 234, 0.7);
  border: 1px solid rgba(232, 220, 201, 0.7);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.dish-card-inner:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(139, 107, 77, 0.15);
  border-color: #d4b483;
}

.dish-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  color: #2a1e14;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

/* Блок с ценами и объемами */
.price-volume-block {
  margin: 0.8rem 0;
  padding: 0.8rem 0;
  border-top: 1px solid rgba(232, 220, 201, 0.5);
  border-bottom: 1px solid rgba(232, 220, 201, 0.5);
}

.volume-info {
  margin-bottom: 0.5rem;
}

.volume-label {
  font-family: 'EB Garamond', serif;
  font-size: 0.95rem;
  color: #8b6b4d;
  font-weight: 500;
}

.prices-container {
  display: flex;
  align-items: center;
}

.price-single {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  color: #2a1e14;
  font-weight: 600;
}

.price-multiple {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  color: #2a1e14;
  font-weight: 600;
}

.price-values {
  font-weight: 500;
}

/* Опции */
.dish-details {
  margin-top: 0.8rem;
}

.options-info .options-text {
  color: #8b6b4d;
  font-family: 'EB Garamond', serif;
  font-size: 0.95rem;
  opacity: 0.7;
  font-style: italic;
}

/* Состояния */
.state-loading {
  text-align: center;
  padding: 5rem 2rem;
  color: #8b6b4d;
  font-size: 1.2rem;
}

/* Адаптивность */
@media (max-width: 768px) {
  .restaurant-logo {
    font-size: 3rem;
  }
  
  .nav-container {
    flex-direction: column;
    align-items: center;
  }
  
  .primary-nav-btn {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  
  .items-container {
    grid-template-columns: 1fr;
  }
  
  .nav-scroll-container {
    max-width: 100%;
    padding: 0.8rem 1rem;
  }
  
  .secondary-nav-btn {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
  
  .hint-text {
    font-size: 0.8rem;
  }
}
</style>