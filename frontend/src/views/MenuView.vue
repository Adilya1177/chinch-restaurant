<template>
  <div class="menu-view">
    <div class="menu-wrapper">
      <div class="menu-top-padding"></div>

      <header class="page-header"></header>

      <div v-if="loading" class="state-loading">
        <p>Загрузка меню...</p>
      </div>

      <main v-else class="menu-main">
        <div class="categories-grid">
          <div
            v-for="subCategory in groupedMenu"
            :key="subCategory.name"
            :id="'category-' + subCategory.name"
            :class="['menu-category', categoryColsClass(subCategory.name)]"
          >
            <div class="category-title-section">
              <h2 class="category-name">{{ subCategory.name.toUpperCase() }}</h2>
            </div>

            <div class="items-container">
              <div
                v-for="item in subCategory.items"
                :key="item.id"
                class="dish-card"
                :class="{ 'non-clickable': isNonClickableDish(item) }"
              >
                <div class="dish-card-inner">
                  <div class="dish-photo-wrapper">
                    <img
                      :src="getDishPhoto(item)"
                      :alt="item.name"
                      class="dish-card-photo"
                      loading="lazy"
                      @error="handleImageError"
                    >
                  </div>

                  <h3 class="dish-title">{{ item.name }}</h3>

                  <p v-if="item.composition" class="dish-composition-text">
                    {{ item.composition }}
                  </p>

                  <div class="price-volume-block">
                    <div v-if="item.priceInfo || item.basePrice" class="price-info">
                      <span class="price-value">{{ formatPrice(item) }}</span>
                    </div>
                    <div v-if="item.volumeInfo" class="volume-info">
                      <span class="volume-label">{{ formatVolume(item.volumeInfo) }}</span>
                    </div>
                    <div v-if="item.options" class="options-info">
                      <span class="options-label">{{ formatOptions(item.options) }}</span>
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
import { getDishDetails } from '../data/dishDetails';

export default {
  name: 'MenuView',
  data() {
    return {
      loading: true,
      error: null,
      menuItems: [],
      selectedMainCategory: 'all',
      activeCategory: ''
    };
  },
  computed: {
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

      const categoryOrder = [
        'ЗАВТРАКИ НА ВЕСЬ ДЕНЬ',
        'СПЕШЛ',
        'К ВИНУ',
        'СУПЫ',
        'РИМСКАЯ ПИЦЦА',
        'ЗАКУСКИ',
        'САЛАТЫ',
        'НА ГОРЯЧЕЕ',
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
    }
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true;
        this.menuItems = await menuService.getDishes();
      } catch (err) {
        console.error('❌ Ошибка загрузки данных:', err);
        this.error = 'Сервер временно недоступен';
        this.menuItems = [];
      } finally {
        this.loading = false;
      }
    },

    categoryColsClass(name) {
      const map = {
        'ЗАВТРАКИ НА ВЕСЬ ДЕНЬ': 'cols-5',
        'СПЕШЛ': 'cols-3',
        'К ВИНУ': 'cols-3',
        'СУПЫ': 'cols-3',
        'РИМСКАЯ ПИЦЦА': 'cols-5',
        'ЗАКУСКИ': 'cols-5',
        'САЛАТЫ': 'cols-3',
        'НА ГОРЯЧЕЕ': 'cols-5'
      };
      return map[name] || 'cols-5';
    },

    getDishPhoto(item) {
      const details = getDishDetails(item.name);
      if (details.photos && details.photos.length > 0) {
        return details.photos[0];
      }
      return details.photo;
    },

    formatPrice(item) {
      if (!item) return '';
      if (item.priceInfo) return item.priceInfo;
      if (item.basePrice) {
        if (typeof item.basePrice === 'string' && item.basePrice.includes('р')) return item.basePrice;
        if (typeof item.basePrice === 'number') return `${item.basePrice} р`;
        if (typeof item.basePrice === 'string') return item.basePrice.includes('р') ? item.basePrice : `${item.basePrice} р`;
        return item.basePrice;
      }
      return '';
    },

    formatVolume(volumeInfo) {
      if (!volumeInfo) return '';
      let formatted = volumeInfo;
      formatted = formatted.replace(/(\d+)(мл)/g, '$1 $2');
      if (formatted.includes('|')) {
        return formatted.split('|').map(v => v.trim()).join(' / ');
      }
      return formatted;
    },

    formatOptions(options) {
      if (!options) return '';
      return options.replace(/\|/g, ' | ');
    },

    isNonClickableDish(item) {
      return item.mainCategory === 'Напитки' || item.isAddon;
    },

    handleImageError(event) {
      event.target.style.display = 'none';
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
  padding: 0 1rem;
  position: relative;
}

.menu-top-padding {
  height: 60px;
  width: 100%;
}

.menu-wrapper {
  padding-bottom: 3rem;
}

.page-header {
  text-align: center;
  margin-bottom: 0;
}

.categories-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 4rem;
}

.menu-category {
  position: relative;
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
}

.menu-category .category-title-section .category-name::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(176, 141, 87, 0.9), transparent);
}

.items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.2rem;
  padding-bottom: 1.2rem;
  margin: 0 auto;
}

.dish-card {
  width: 240px;
  margin-bottom: 1.2rem;
  flex-shrink: 0;
}

.menu-category.cols-5 .items-container {
  max-width: calc(5 * 240px + 4 * 1.2rem + 0.1rem);
}

.menu-category.cols-4 .items-container {
  max-width: calc(4 * 240px + 3 * 1.2rem + 0.1rem);
}

.menu-category.cols-3 .items-container {
  max-width: calc(3 * 240px + 2 * 1.2rem + 0.1rem);
}

.dish-card-inner {
  background: rgba(248, 244, 234, 0.7);
  border: 1px solid rgba(232, 220, 201, 0.7);
  border-radius: 12px;
  padding: 0.6rem;
  backdrop-filter: blur(8px);
  transition: box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 6px 18px rgba(42, 30, 20, 0.25);
}

.dish-card-inner:hover {
  box-shadow: 0 12px 28px rgba(42, 30, 20, 0.35);
  border-color: #b08d57;
}

.dish-photo-wrapper {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 0.5rem;
  background: #e8dcc9;
  flex-shrink: 0;
  position: relative;
  line-height: 0;
  font-size: 0;
}

.dish-card-photo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.dish-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  color: #2a1e14;
  font-weight: 600;
  margin: 0.2rem 0;
  text-align: center;
  width: 100%;
  flex-shrink: 0;
}

.dish-composition-text {
  font-family: 'EB Garamond', serif;
  font-size: 0.85rem;
  color: #8b6b4d;
  font-style: italic;
  line-height: 1.4;
  margin: 0.2rem 0 0.4rem 0;
  text-align: center;
}

.price-volume-block {
  margin: 0.2rem 0;
  padding: 0.2rem 0;
  border-top: 1px solid rgba(232, 220, 201, 0.5);
  border-bottom: 1px solid rgba(232, 220, 201, 0.5);
  width: 100%;
  margin-top: auto;
  flex-shrink: 0;
  text-align: center;
}

.price-info {
  margin-bottom: 0.2rem;
}

.price-value {
  font-family: 'Playfair Display', serif;
  font-size: 0.95rem;
  color: #d4af37;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.volume-info {
  margin-bottom: 0.2rem;
}

.volume-label {
  font-family: 'EB Garamond', serif;
  font-size: 0.8rem;
  color: #8b6b4d;
  font-weight: 500;
}

.options-info {
  margin-top: 0.2rem;
  padding-top: 0.2rem;
  border-top: 1px dashed rgba(139, 107, 77, 0.3);
  width: 100%;
}

.options-label {
  font-family: 'EB Garamond', serif;
  font-size: 0.75rem;
  color: #8b6b4d;
  font-weight: 500;
  font-style: italic;
}

.state-loading {
  text-align: center;
  padding: 5rem 2rem;
  color: #8b6b4d;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .menu-top-padding {
    height: 40px;
  }

  .items-container {
    flex-direction: column;
    align-items: center;
  }

  .dish-card {
    width: 100%;
    max-width: 400px;
    margin-bottom: 1.2rem;
  }

  .dish-title {
    font-size: 0.95rem;
    min-height: 2em;
  }

  .dish-composition-text {
    font-size: 0.8rem;
  }

  .price-value {
    font-size: 0.9rem;
  }

  .options-info {
    margin-top: 0.1rem;
    padding-top: 0.1rem;
  }

  .options-label {
    font-size: 0.7rem;
  }
}
</style>