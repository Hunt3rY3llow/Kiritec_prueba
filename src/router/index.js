import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/LoginFirebase.vue'
import Register from '../components/RegisterForm.vue'
import Dashboard from '../components/DashboardPokedex.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
   {
    path: '/Register',
    name: 'register',
    component: Register
  },
   {
    path: '/Dashboard',
    name: 'dashboard',
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
