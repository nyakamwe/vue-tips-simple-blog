import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Tips from '../views/tips/TipsView.vue'
import TipDetails from '../views/tips/TipDetailsView.vue'
import NotFound from '../views/404.vue'

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
  },

  // 404 page
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
