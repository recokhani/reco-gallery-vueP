import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: () => import( '../views/Shopping.vue')
  },
  {
    path: '/selling',
    name: 'Selling',
    component: () => import( '../views/Selling.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
