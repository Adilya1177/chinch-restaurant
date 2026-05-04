import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',
  server: {
    port: 5173
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        '404': './public/404.html'
      }
    }
  }
})