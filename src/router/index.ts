import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
