// frontend/src/services/api.js
import axios from 'axios';

// Создаем базовый экземпляр axios
// В зависимости от среды будет использоваться разный URL
const api = axios.create({
  // Важно: оставляем путь пустым, будем добавлять префиксы в методах
  baseURL: '',
  headers: {
    'Content-Type': 'application/json'
  }
});

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5277';

console.log(`✅ API: Используется базовый URL: ${API_BASE_URL}`);

// СЕРВИС ДЛЯ РАБОТЫ С МЕНЮ
export const menuService = {
  // Получить все блюда из реального API
  async getDishes() {
    try {
      console.log('✅ API: Запрос всех блюд с реального сервера');
      const response = await axios.get(`${API_BASE_URL}/api/menu`);
      console.log(`✅ API: Получено ${response.data.length} блюд с сервера`);
      return response.data;
    } catch (error) {
      console.error('❌ API: Ошибка при получении меню:', error);
      // В случае ошибки возвращаем пустой массив
      return [];
    }
  },
  
  async getAll() {
    return this.getDishes();
  },
  
  async getRecommended() {
    console.log('✅ API: Рекомендованные блюда');
    try {
      const allDishes = await this.getDishes();
      return allDishes.slice(0, 3);
    } catch (error) {
      console.error('❌ API: Ошибка при получении рекомендованных:', error);
      return [];
    }
  },
  
  async getByCategory(category) {
    console.log(`✅ API: Фильтр по категории "${category}"`);
    try {
      // Сначала пытаемся получить по основной категории
      const response = await axios.get(`${API_BASE_URL}/api/menu/maincategory/${encodeURIComponent(category)}`);
      if (response.data && response.data.length > 0) {
        console.log(`✅ API: Найдено ${response.data.length} блюд в категории "${category}"`);
        return response.data;
      }
      
      // Если не нашли, пытаемся по подкатегории
      const response2 = await axios.get(`${API_BASE_URL}/api/menu/category/${encodeURIComponent(category)}`);
      if (response2.data && response2.data.length > 0) {
        console.log(`✅ API: Найдено ${response2.data.length} блюд в подкатегории "${category}"`);
        return response2.data;
      }
      
      // Если ничего не нашли, пробуем фильтровать локально
      const allDishes = await this.getDishes();
      const filtered = allDishes.filter(dish => 
        dish.subCategory === category || 
        dish.mainCategory === category ||
        (dish.category && dish.category === category)
      );
      console.log(`✅ API: Найдено ${filtered.length} блюд фильтрацией`);
      return filtered;
    } catch (error) {
      console.error(`❌ API: Ошибка при фильтрации по категории "${category}":`, error);
      return [];
    }
  }
}

// СЕРВИС ДЛЯ БРОНИРОВАНИЙ
export const reservationService = {
  async getAll() {
    console.log('✅ API: Запрос всех бронирований');
    try {
      const response = await axios.get(`${API_BASE_URL}/api/reservation`);
      return response.data;
    } catch (error) {
      console.error('❌ API: Ошибка при получении бронирований:', error);
      return [];
    }
  },
  
  async create(reservation) {
    console.log('✅ API: Отправка бронирования на сервер', reservation);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/reservation`, reservation);
      console.log('✅ API: Бронирование успешно создано');
      return { 
        success: true, 
        message: 'Бронирование успешно отправлено! Мы свяжемся с вами для подтверждения.',
        data: response.data
      };
    } catch (error) {
      console.error('❌ API: Ошибка при создании бронирования:', error);
      return { 
        success: false, 
        message: 'Ошибка при отправке бронирования. Пожалуйста, попробуйте позже или позвоните по телефону.'
      };
    }
  }
}

// Экспортируем объект API для совместимости
export default {
  menuService,
  reservationService
};