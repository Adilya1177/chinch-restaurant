// frontend/src/services/api.js - ОБНОВЛЕННЫЕ МОК-ДАННЫЕ
const mockMenuData = [
  {
    id: 1,
    name: "БАМБЛ-КАРАМЕЛЬ",
    description: "Эспрессо, карамель, молоко",
    priceInfo: "420 / 450 / 850",
    category: "КОФЕ",
    mainCategory: "Напитки",
    subCategory: "КОФЕ", // ДОБАВИЛИ
    volumeInfo: "Маленький | Средний | Большой", // ДОБАВИЛИ
    basePrice: null, // ДОБАВИЛИ
    options: null // ДОБАВИЛИ
  },
  {
    id: 2,
    name: "ПАНЧО КАРБОНАРА",
    description: "Паста карбонара",
    priceInfo: "1200",
    category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда", // ИЗМЕНИЛИ на "Еда"
    subCategory: "НА ГОРЯЧЕЕ", // ДОБАВИЛИ
    volumeInfo: null,
    basePrice: "1200", // ДОБАВИЛИ
    options: null
  },
  {
    id: 3,
    name: "ОЛИВЬЕ КРАБ | БРИСКЕТ",
    description: "Салат Оливье",
    priceInfo: "890",
    category: "NEW YEAR SPECIAL",
    mainCategory: "Еда",
    subCategory: "NEW YEAR SPECIAL",
    volumeInfo: null,
    basePrice: "890",
    options: null
  },
  {
    id: 4,
    name: "КРУАССАН | БЛИНЫ",
    description: "Завтрак",
    priceInfo: "450",
    category: "NEW YEAR SPECIAL",
    mainCategory: "Еда",
    subCategory: "NEW YEAR SPECIAL",
    volumeInfo: null,
    basePrice: "450",
    options: null
  },
  {
    id: 5,
    name: "СУП ТОМ ЯМ",
    description: "Острый тайский суп",
    priceInfo: "790",
    category: "СУПЫ",
    mainCategory: "Еда",
    subCategory: "СУПЫ",
    volumeInfo: null,
    basePrice: "790",
    options: null
  },
  {
    id: 6,
    name: "ПИЦЦА МАРГАРИТА",
    description: "Классическая итальянская пицца",
    priceInfo: "950",
    category: "РИМСКАЯ ПИЦЦА",
    mainCategory: "Еда",
    subCategory: "РИМСКАЯ ПИЦЦА",
    volumeInfo: null,
    basePrice: "950",
    options: null
  },
  {
    id: 7,
    name: "САЛАТ ЦЕЗАРЬ",
    description: "С курицей и пармезаном",
    priceInfo: "850",
    category: "САЛАТЫ",
    mainCategory: "Еда",
    subCategory: "САЛАТЫ",
    volumeInfo: null,
    basePrice: "850",
    options: null
  },
  {
    id: 8,
    name: "ЯИЧНИЦА С БЕКОНОМ",
    description: "С беконом и зеленью",
    priceInfo: "550",
    category: "БЛЮДА ИЗ ЯИЦ",
    mainCategory: "Еда",
    subCategory: "БЛЮДА ИЗ ЯИЦ",
    volumeInfo: null,
    basePrice: "550",
    options: null
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
      dish.subCategory === category || dish.mainCategory === category
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

const api = {
  menuService,
  reservationService
};

export default api;