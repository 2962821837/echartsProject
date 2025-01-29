import { createRouter, createWebHistory } from 'vue-router'
import homeIndex from '@/views/home/homeIndex.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homeIndex
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
