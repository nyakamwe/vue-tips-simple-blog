import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Tips from '../views/tips/TipsView.vue'
import TipDetails from '../views/tips/TipDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/tips',
    name: 'tips',
    component: Tips
  },
  {
    path: '/tips/:id',
    name: 'tipDetails',
    component: TipDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
