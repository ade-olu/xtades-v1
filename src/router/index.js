import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

  const routes = [
  // Home
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Projects
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../components/Projects.vue')
  },
  // Designs
  {
    path: '/designs',
    name: 'Designs',
    component: () => import('../components/Designs.vue')
  },
  // Illustrations
  {
    path: '/illustrations',
    name: 'Illustrations',
    component: () => import('../components/Illustrations.vue')
  },
  // 3D
  {
    path: '/3d',
    name: '3D',
    component: () => import('../components/3D.vue')
  },
  // Contact
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../components/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
