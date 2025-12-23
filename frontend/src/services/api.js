// frontend/src/services/api.js - ФИНАЛЬНАЯ ВЕРСИЯ ДЛЯ GITHUB PAGES

// Мок-данные для меню
const mockMenuData = [
  {
    id: 1,
    name: "БАМБЛ-КАРАМЕЛЬ",
    description: "Эспрессо, карамель, молоко",
    price: "420 / 450 / 850",
    category: "КОФЕ",
    mainCategory: "Напитки"
  },
  {
    id: 2,
    name: "ПАНЧО КАРБОНАРА",
    description: "Паста карбонара",
    price: "1200",
    category: "НА ГОРЯЧЕЕ",
    mainCategory: "Основные блюда"
  },
  {
    id: 3,
    name: "ОЛИВЬЕ КРАБ | БРИСКЕТ",
    description: "Салат Оливье",
    price: "890",
    category: "NEW YEAR SPECIAL",
    mainCategory: "Специальные предложения"
  },
  {
    id: 4,
    name: "КРУАССАН | БЛИНЫ",
    description: "Завтрак",
    price: "450",
    category: "NEW YEAR SPECIAL",
    mainCategory: "Специальные предложения"
  },
  {
    id: 5,
    name: "СУП ТОМ ЯМ",
    description: "Острый тайский суп",
    price: "790",
    category: "СУПЫ",
    mainCategory: "Закуски и супы"
  },
  {
    id: 6,
    name: "ПИЦЦА МАРГАРИТА",
    description: "Классическая итальянская пицца",
    price: "950",
    category: "РИМСКАЯ ПИЦЦА",
    mainCategory: "Основные блюда"
  },
  {
    id: 7,
    name: "САЛАТ ЦЕЗАРЬ",
    description: "С курицей и пармезаном",
    price: "850",
    category: "САЛАТЫ",
    mainCategory: "Закуски и супы"
  },
  {
    id: 8,
    name: "ЯИЧНИЦА С БЕКОНОМ",
    description: "С беконом и зеленью",
    price: "550",
    category: "БЛЮДА ИЗ ЯИЦ",
    mainCategory: "Завтраки"
  }
]

console.log('✅ API: Загружены мок-данные для меню');

export const menuService = {
  async getDishes() {
    console.log('✅ API: Возвращаем мок-данные меню');
    return mockMenuData;
  },
  
  async getAll() {
    return this.getDishes();
  },
  
  async getRecommended() {
    console.log('✅ API: Рекомендованные блюда');
    return mockMenuData.slice(0, 3);
  },
  
  async getByCategory(category) {
    console.log(`✅ API: Фильтр по категории "${category}"`);
    const filtered = mockMenuData.filter(dish => 
      dish.category === category || dish.mainCategory === category
    );
    console.log(`✅ Найдено блюд: ${filtered.length}`);
    return filtered;
  }
}

export const reservationService = {
  async getAll() {
    console.log('✅ API: Запрос всех бронирований');
    return [];
  },
  
  async create(reservation) {
    console.log('✅ API: Создано бронирование', reservation);
    return { 
      success: true, 
      message: 'Бронирование успешно отправлено! Мы свяжемся с вами для подтверждения. (Демо-режим)' 
    };
  }
}

// Простой экспорт для совместимости
const api = {
  menuService,
  reservationService
};

export default api;