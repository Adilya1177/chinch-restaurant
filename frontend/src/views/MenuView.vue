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
            :class="['menu-category', { 'egg-category': subCategory.name === 'БЛЮДА ИЗ ЯИЦ' }]"
          >
            <!-- Заголовок категории -->
            <div class="category-title-section">
              <h2 class="category-name">{{ subCategory.name.toUpperCase() }}</h2>
            </div>

            <!-- Элементы категории -->
            <div class="items-container">
              <!-- Для всех категорий кроме яичных - обычное отображение -->
              <template v-if="subCategory.name !== 'БЛЮДА ИЗ ЯИЦ'">
                <div 
                  v-for="item in subCategory.items" 
                  :key="item.id" 
                  class="dish-card"
                  @click="showDishDetails(item)"
                >
                  <div class="dish-card-inner">
                    <h3 class="dish-title">{{ item.name }}</h3>
                    
                    <!-- Блок с объемом (без цен) -->
                    <div class="price-volume-block" v-if="item.volumeInfo">
                      <div class="volume-info">
                        <span class="volume-label">{{ formatVolume(item.volumeInfo) }}</span>
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
              </template>

              <!-- Для яичных блюд - специальная структура -->
              <template v-else>
                <!-- Основные блюда (первые 3: ГЛАЗУНЬЯ, СКРЭМБЛ, ОМЛЕТ) -->
                <div 
                  v-for="item in getEggMainDishes(subCategory.items)" 
                  :key="item.id" 
                  class="dish-card"
                  @click="showDishDetails(item)"
                >
                  <div class="dish-card-inner">
                    <h3 class="dish-title">{{ item.name }}</h3>
                    
                    <!-- Блок с объемом (без цен) -->
                    <div class="price-volume-block" v-if="item.volumeInfo">
                      <div class="volume-info">
                        <span class="volume-label">{{ formatVolume(item.volumeInfo) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Блок добавок (один большой) -->
                <div 
                  v-if="getEggAddons(subCategory.items).length > 0" 
                  class="addons-container"
                >
                  <div class="addons-card">
                    <h3 class="addons-title">Добавки к яичным блюдам</h3>
                    <div class="addons-grid">
                      <div 
                        v-for="addon in getEggAddons(subCategory.items)" 
                        :key="addon.id" 
                        class="addon-item"
                        @click="showDishDetails(addon)"
                      >
                        <span class="addon-name">{{ addon.name }}</span>
                        <span v-if="addon.volumeInfo" class="addon-volume">{{ formatVolume(addon.volumeInfo) }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Модальное окно с фото и составом блюда -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">✕</button>
        
        <div class="dish-modal">
          <!-- Фото блюда -->
          <div class="dish-photo-container">
            <img 
              :src="selectedDishDetails.photo" 
              :alt="selectedDish.name" 
              class="dish-photo"
              @error="handleImageError"
            />
          </div>
          
          <!-- Информация о блюде -->
          <div class="dish-info">
            <h2 class="dish-modal-title">{{ selectedDish.name }}</h2>
            
            <!-- Объем, если есть -->
            <div v-if="selectedDish.volumeInfo" class="dish-volume">
              <span class="volume-label">{{ formatVolume(selectedDish.volumeInfo) }}</span>
            </div>
            
            <!-- Состав -->
            <div class="dish-composition">
              <h3 class="composition-title">Состав</h3>
              <p class="composition-text">{{ selectedDishDetails.composition }}</p>
            </div>
            
            <!-- Опции, если есть -->
            <div v-if="selectedDish.options" class="dish-options">
              <h3 class="options-title">Варианты</h3>
              <p class="options-text">{{ formatOptions(selectedDish.options) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { menuService } from '../services/api';
import { getDishDetails } from '../data/dishDetails';

export default {
  name: 'MenuView',
  data() {
    return {
      loading: true,
      error: null,
      menuItems: [],
      selectedMainCategory: 'all',
      activeCategory: '',
      
      // Данные для модального окна
      showModal: false,
      selectedDish: null,
      selectedDishDetails: null
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
    
    // Форматирование объема с добавлением пробела перед "мл"
    formatVolume(volumeInfo) {
      if (!volumeInfo) return '';
      
      // Добавляем пробел перед "мл", если его нет
      let formatted = volumeInfo;
      formatted = formatted.replace(/(\d+)(мл)/g, '$1 $2');
      formatted = formatted.replace(/(\d+)(мл)/g, '$1 $2');
      
      // Если есть символ "|", разбиваем на строки
      if (formatted.includes('|')) {
        return formatted.split('|').map(v => v.trim()).join(' / ');
      }
      return formatted;
    },
    
    // Форматирование опций
    formatOptions(options) {
      if (!options) return '';
      // Заменяем "|" на более читаемый разделитель
      return options.replace(/\|/g, ' | ');
    },
    
    // Показать детали блюда
    showDishDetails(item) {
      this.selectedDish = item;
      this.selectedDishDetails = getDishDetails(item.name);
      this.showModal = true;
      
      // Блокируем прокрутку страницы
      document.body.style.overflow = 'hidden';
    },
    
    // Закрыть модальное окно
    closeModal() {
      this.showModal = false;
      this.selectedDish = null;
      this.selectedDishDetails = null;
      
      // Разблокируем прокрутку страницы
      document.body.style.overflow = '';
    },
    
    // Обработчик ошибки загрузки изображения
    handleImageError(event) {
      console.log('Ошибка загрузки изображения:', this.selectedDishDetails.photo);
      event.target.src = '/images/dishes/default-dish.jpg';
    },
    
    // Получить основные яичные блюда (первые 3)
    getEggMainDishes(items) {
      return items.filter(item => !item.isAddon);
    },
    
    // Получить добавки к яичным блюдам
    getEggAddons(items) {
      return items.filter(item => item.isAddon);
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
.menu-view {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f4ea 0%, #e8dcc9 100%);
  padding: 2rem 1rem;
  position: relative;
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
  position: 3rem;
}

.category-title-section {
  text-align: center;
  margin-bottom: 2rem;
}

.menu-category .category-title-section .category-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #2a1e14;
  font-weight: 600;
  letter-spacing: 0.15em;
  margin: 0 auto 1.5rem auto;
  padding-bottom: 0.8rem;
  position: relative;
  width: 90%;
  max-width: 500px;
  border-bottom: none !important; /* Убедиться, что нет других border */
}

.menu-category .category-title-section .category-name::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(176, 141, 87, 0.9), 
    transparent
  );
}

/* Карточки блюд */
.items-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.2rem;
}

.dish-card {
  cursor: pointer;
}

.dish-card-inner {
  background: rgba(248, 244, 234, 0.7);
  border: 1px solid rgba(232, 220, 201, 0.7);
  border-radius: 12px;
  padding: 1.2rem;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 140px;
  overflow: hidden;
  position: relative;
}

.dish-card-inner:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(139, 107, 77, 0.15);
  border-color: #d4b483;
}

.dish-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  color: #2a1e14;
  font-weight: 600;
  margin: 0 0 0.3rem 0;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* Блок с объемами */
.price-volume-block {
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  border-top: 1px solid rgba(232, 220, 201, 0.5);
  border-bottom: 1px solid rgba(232, 220, 201, 0.5);
  width: 100%;
  margin-top: auto;
}

.volume-info {
  margin-bottom: 0.3rem;
}

.volume-label {
  font-family: 'EB Garamond', serif;
  font-size: 0.9rem;
  color: #8b6b4d;
  font-weight: 500;
}

/* Опции */
.dish-details {
  margin-top: 0.8rem;
  text-align: center;
  width: 100%;
}

.options-info .options-text {
  color: #8b6b4d;
  font-family: 'EB Garamond', serif;
  font-size: 0.9rem;
  opacity: 0.7;
  font-style: italic;
}

/* ============ ОСОБЫЕ СТИЛИ ДЛЯ ЯИЧНЫХ БЛЮД ============ */

/* Для яичных блюд - 3 колонки для основных блюд */
.menu-category.egg-category .items-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}

/* Контейнер для всех добавок */
.addons-container {
  grid-column: 1 / -1;
  margin-top: 2rem;
}

/* Карточка с добавками */
.addons-card {
  background: rgba(248, 244, 234, 0.9);
  border: 2px solid rgba(139, 107, 77, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.addons-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(139, 107, 77, 0.15);
  border-color: #8b6b4d;
}

/* Заголовок добавок */
.addons-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  color: #2a1e14;
  font-weight: 600;
  text-align: center;
  margin: 0 0 1.2rem 0;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(139, 107, 77, 0.2);
}

/* Сетка добавок */
.addons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.8rem;
  width: 100%;
}

/* Отдельная добавка */
.addon-item {
  background: white;
  border: 1px solid rgba(232, 220, 201, 0.7);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.addon-item:hover {
  background: rgba(248, 244, 234, 0.7);
  border-color: #b08d57;
  transform: translateY(-2px);
}

.addon-name {
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  color: #2a1e14;
  font-weight: 500;
}

.addon-volume {
  font-family: 'EB Garamond', serif;
  font-size: 0.9rem;
  color: #8b6b4d;
  font-weight: 500;
}

/* ============ МОДАЛЬНОЕ ОКНО ============ */

/* Затемнение фона */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(42, 30, 20, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Контент модального окна */
.modal-content {
  background: linear-gradient(135deg, #f8f4ea 0%, #f2eee5 100%);
  border-radius: 16px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
  border: 1px solid rgba(212, 180, 131, 0.3);
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

/* Кнопка закрытия */
.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(42, 30, 20, 0.1);
  border: none;
  color: #2a1e14;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: rgba(42, 30, 20, 0.2);
  transform: scale(1.1);
}

/* Контейнер модального окна */
.dish-modal {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

@media (min-width: 768px) {
  .dish-modal {
    flex-direction: row;
    gap: 2.5rem;
    padding: 2.5rem;
  }
}

/* Фото блюда */
.dish-photo-container {
  flex: 1;
  min-width: 300px;
}

.dish-photo {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(139, 107, 77, 0.2);
  border: 1px solid rgba(212, 180, 131, 0.5);
}

@media (min-width: 768px) {
  .dish-photo {
    height: 400px;
  }
}

/* Информация о блюде */
.dish-info {
  flex: 1;
  padding-top: 1.5rem;
}

@media (min-width: 768px) {
  .dish-info {
    padding-top: 0;
  }
}

.dish-modal-title {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #2a1e14;
  font-weight: 600;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.dish-volume {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(232, 220, 201, 0.5);
}

.volume-label {
  font-family: 'EB Garamond', serif;
  font-size: 1.1rem;
  color: #8b6b4d;
  font-weight: 500;
}

/* Состав */
.dish-composition {
  margin-bottom: 1.5rem;
}

.composition-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  color: #2a1e14;
  font-weight: 600;
  margin: 0 0 0.8rem 0;
  letter-spacing: 0.05em;
}

.composition-text {
  font-family: 'EB Garamond', serif;
  font-size: 1.1rem;
  color: #5d4a30;
  line-height: 1.6;
  margin: 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  border-left: 3px solid #b08d57;
}

/* Опции */
.dish-options {
  margin-bottom: 2rem;
}

.options-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem;
  color: #2a1e14;
  font-weight: 600;
  margin: 0 0 0.8rem 0;
  letter-spacing: 0.05em;
}

.options-text {
  font-family: 'EB Garamond', serif;
  font-size: 1rem;
  color: #8b6b4d;
  line-height: 1.5;
  margin: 0;
  font-style: italic;
}

/* Кнопка закрытия */
.close-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #2a1e14, #3a2a1c);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.05em;
  margin-top: 1rem;
}

.close-btn:hover {
  background: linear-gradient(135deg, #3a2a1c, #2a1e14);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(42, 30, 20, 0.2);
}

/* Состояния */
.state-loading {
  text-align: center;
  padding: 5rem 2rem;
  color: #8b6b4d;
  font-size: 1.2rem;
}

/* Адаптивность для мобильных */
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
  
  .menu-category.egg-category .items-container {
    grid-template-columns: 1fr;
  }
  
  .addons-container {
    margin-top: 1.5rem;
  }
  
  .addons-grid {
    grid-template-columns: 1fr;
  }
  
  .addons-card {
    padding: 1rem;
  }
  
  .addons-title {
    font-size: 1.1rem;
    margin-bottom: 1rem;
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
  
  /* Адаптивность модального окна */
  .modal-content {
    width: 95%;
    padding: 1rem;
  }
  
  .dish-modal {
    padding: 1rem;
  }
  
  .dish-modal-title {
    font-size: 1.6rem;
  }
  
  .dish-photo {
    height: 250px;
  }
  
  /* Уменьшаем высоту карточек на мобильных */
  .dish-card-inner {
    height: 120px;
    padding: 1rem;
  }
  
  .dish-title {
    font-size: 1.1rem;
  }
}

/* Прокрутка модального окна */
.modal-content::-webkit-scrollbar {
  width: 8px;
}

.modal-content::-webkit-scrollbar-track {
  background: rgba(232, 220, 201, 0.3);
  border-radius: 4px;
}

.modal-content::-webkit-scrollbar-thumb {
  background: #b08d57;
  border-radius: 4px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: #8b6b4d;
}
</style>