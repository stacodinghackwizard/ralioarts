import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/home/index.vue'
import ContactUs from '../views/pages/contact_us/index.vue'
import AllProject from '../views/pages/all_project/index.vue'
import Services from '../views/pages/services/index.vue'
import Website from '../views/pages/webite/index.vue'
import MobileApp from '../views/pages/mobile_app/index.vue'
import Branding from '../views/pages/branding/index.vue'
import Social from '../views/pages/social/index.vue'
import AboutUs from '../views/pages/about_us/index.vue'
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
    {
      path: '/all-project',
      name: 'all-project',
      component: AllProject
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/website',
      name: 'Website',
      component: Website
    },
    {
      path: '/mobile-app',
      name: 'MobileApp',
      component: MobileApp
    },
    {
      path: '/branding',
      name: 'Branding',
      component: Branding
    },
    {
      path: '/social',
      name: 'Social',
      component: Social
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    
  ]
})

export default router
