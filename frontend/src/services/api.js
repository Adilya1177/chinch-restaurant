import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5277/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const menuService = {
  // Метод для получения всех блюд
  async getDishes() {
    try {
      const response = await api.get('/menu')
      return response.data
    } catch (error) {
      console.error('API Error:', error)
      throw error // Пробрасываем ошибку дальше
    }
  },
  
  // Альтернативное название для совместимости
  async getAll() {
    return this.getDishes()
  },
  
  async getRecommended() {
    const response = await api.get('/menu/recommended')
    return response.data
  },
  
  async getByCategory(category) {
    const response = await api.get(`/menu/category/${category}`)
    return response.data
  }
}

export const reservationService = {
  async getAll() {
    const response = await api.get('/reservation')
    return response.data
  },
  
  async create(reservation) {
    const response = await api.post('/reservation', reservation)
    return response.data
  }
}

export default api