import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/chinch-restaurant/'), // ИЗМЕНИТЕ ЭТО!
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue')
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: () => import('../views/ReservationView.vue')
    },
    // Добавьте catch-all route для 404
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

// Обработка редиректа с GitHub Pages
router.afterEach(() => {
  if (typeof window.handleGitHubPagesRedirect === 'function') {
    window.handleGitHubPagesRedirect(router);
  }
})

export default router