// frontend/src/services/api.js
import axios from 'axios';

// Определяем, где мы находимся
const isLocalhost = window.location.hostname === 'localhost' || 
                    window.location.hostname === '127.0.0.1';
const isGitHubPages = window.location.hostname.includes('github.io');

console.log(`📍 Определено окружение: ${isLocalhost ? 'Локально' : 'Продакшен'}`);
console.log(`🌐 Хост: ${window.location.hostname}`);

// МОК-ДАННЫЕ для GitHub Pages (временное решение)
const mockMenuData = [
  // Сюда позже вставим все 161 блюдо из базы
  {
    id: 1,
    name: "БАМБЛ-КАРАМЕЛЬ",
    description: "Эспрессо, карамель, молоко",
    priceInfo: "420 / 450 / 850",
    category: "КОФЕ",
    mainCategory: "Напитки",
    subCategory: "КОФЕ",
    volumeInfo: "Маленький | Средний | Большой",
    basePrice: null,
    options: null
  },
  {
    id: 2,
    name: "ПАНЧО КАРБОНАРА",
    description: "Паста карбонара",
    priceInfo: "1200",
    category: "НА ГОРЯЧЕЕ",
    mainCategory: "Еда",
    subCategory: "НА ГОРЯЧЕЕ",
    volumeInfo: null,
    basePrice: "1200",
    options: null
  },
  // ... остальные блюда
];

// Функция для получения данных
const getApiData = async () => {
  // Если локально - используем реальный API
  if (isLocalhost) {
    try {
      console.log('🚀 Локальный режим: запрос к реальному API');
      const response = await axios.get('http://localhost:5277/api/menu');
      return response.data;
    } catch (error) {
      console.error('❌ Ошибка API:', error);
      return mockMenuData; // fallback
    }
  }
  
  // Если GitHub Pages - используем мок-данные
  console.log('🌐 Режим GitHub Pages: используем демо-данные');
  console.log('💡 Чтобы показать реальное меню, нужно развернуть бэкенд в облаке');
  return mockMenuData;
};

// СЕРВИС ДЛЯ РАБОТЫ С МЕНЮ
export const menuService = {
  async getDishes() {
    return await getApiData();
  },
  
  async getAll() {
    return this.getDishes();
  },
  
  async getRecommended() {
    const dishes = await this.getDishes();
    return dishes.slice(0, 3);
  },
  
  async getByCategory(category) {
    const dishes = await this.getDishes();
    return dishes.filter(dish => 
      dish.subCategory === category || 
      dish.mainCategory === category
    );
  }
};

// СЕРВИС ДЛЯ БРОНИРОВАНИЙ
export const reservationService = {
  async getAll() {
    if (isLocalhost) {
      try {
        const response = await axios.get('http://localhost:5277/api/reservation');
        return response.data;
      } catch (error) {
        console.error('Ошибка получения бронирований:', error);
        return [];
      }
    }
    return [];
  },
  
  async create(reservation) {
    if (isLocalhost) {
      try {
        await axios.post('http://localhost:5277/api/reservation', reservation);
        return { 
          success: true, 
          message: 'Бронирование успешно отправлено!' 
        };
      } catch (error) {
        console.error('Ошибка бронирования:', error);
        return { 
          success: false, 
          message: 'Ошибка при отправке' 
        };
      }
    }
    
    // Для GitHub Pages - демо-режим
    console.log('📅 Демо-бронирование:', reservation);
    return { 
      success: true, 
      message: 'Демо-режим: бронирование имитировано (на GitHub Pages)' 
    };
  }
};

export default {
  menuService,
  reservationService
};