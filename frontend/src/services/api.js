import axios from 'axios'

// Умное определение baseURL и мок-данных
const getApiConfig = () => {
  console.log('Текущий hostname:', window.location.hostname)
  console.log('Полный URL:', window.location.href)
  
  // Если мы на GitHub Pages
  if (window.location.hostname.includes('github.io')) {
    console.log('Режим: GitHub Pages - используем мок-данные')
    return {
      useMock: true,
      baseURL: ''
    }
  }
  // Иначе локальная разработка
  console.log('Режим: локальная разработка - используем API')
  return {
    useMock: false,
    baseURL: 'http://localhost:5277/api'
  }
}

const config = getApiConfig()
console.log('Конфигурация API:', config)

const api = axios.create({
  baseURL: config.baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Мок-данные для меню (упрощенные) - ДОБАВИМ БОЛЬШЕ ДАННЫХ
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
  }
]

export const menuService = {
  async getDishes() {
    console.log('getDishes вызван, useMock:', config.useMock)
    
    if (config.useMock) {
      console.log('Возвращаем мок-данные:', mockMenuData.length, 'блюд')
      return mockMenuData
    }
    
    try {
      console.log('Пытаемся подключиться к API:', config.baseURL)
      const response = await api.get('/menu')
      return response.data
    } catch (error) {
      console.error('API Error:', error)
      console.log('Возвращаем мок-данные из-за ошибки')
      return mockMenuData
    }
  },
  
  async getAll() {
    return this.getDishes()
  },
  
  async getRecommended() {
    if (config.useMock) {
      return mockMenuData.slice(0, 3)
    }
    
    try {
      const response = await api.get('/menu/recommended')
      return response.data
    } catch (error) {
      return mockMenuData.slice(0, 3)
    }
  },
  
  async getByCategory(category) {
    if (config.useMock) {
      const filtered = mockMenuData.filter(dish => 
        dish.category === category || dish.mainCategory === category
      )
      console.log(`Мок: фильтр по категории "${category}":`, filtered.length, 'блюд')
      return filtered
    }
    
    try {
      const response = await api.get(`/menu/category/${category}`)
      return response.data
    } catch (error) {
      const filtered = mockMenuData.filter(dish => 
        dish.category === category || dish.mainCategory === category
      )
      return filtered
    }
  }
}

export const reservationService = {
  async getAll() {
    if (config.useMock) {
      console.log('Мок: запрос бронирований')
      return []
    }
    
    const response = await api.get('/reservation')
    return response.data
  },
  
  async create(reservation) {
    if (config.useMock) {
      console.log('Мок: создано бронирование', reservation)
      return { 
        success: true, 
        message: 'Бронирование отправлено (демо-режим). На реальном сайте мы бы связались с вами.' 
      }
    }
    
    const response = await api.post('/reservation', reservation)
    return response.data
  }
}

export default api