import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/home/index.vue'
import ContactUs from '../views/pages/contact_us/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactUs
    },
    
  ]
})

export default router
