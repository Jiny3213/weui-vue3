import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/home.vue')
    },
    {
      path: '/button',
      component: () => import('../example/example-button.vue')
    },
    {
      path: '/dialog',
      component: () => import('../example/example-dialog.vue')
    },
    // これはランダムFUNCTION（h）のテストです
    {
      path: '/gallery',
      component: () => import('../example/example-gallery.ts')
    },
  ],
})

export default router
