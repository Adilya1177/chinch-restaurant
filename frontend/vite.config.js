import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/chinch-restaurant/', // ДОБАВЬТЕ ЭТУ СТРОЧКУ!
  server: {
    port: 5173
  }
})