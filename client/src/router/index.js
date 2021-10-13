import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Category from "../views/Category.vue"
import Cart from "../views/Cart.vue"
import Noticia1 from "../views/Noticia1.vue"
import Noticia2 from "../views/Noticia2.vue"
import Noticia3 from "../views/Noticia3.vue"
import Noticia4 from "../views/Noticia4.vue"
import Noticia5 from "../views/Noticia5.vue"
import Equipo from "../views/Equipo.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },

  {
    path: '/noticia1',
    name: 'Noticia1',
    component: Noticia1
  },

  {
    path: '/noticia2',
    name: 'Noticia2',
    component: Noticia2
  },

  {
    path: '/noticia3',
    name: 'Noticia3',
    component: Noticia3
  },

  {
    path: '/noticia4',
    name: 'Noticia4',
    component: Noticia4
  },

  {
    path: '/noticia5',
    name: 'Noticia5',
    component: Noticia5
  },

  {
    path: '/equipo',
    name: 'Equipo',
    component: Equipo
  },

  {
    path: '/:category',
    component: Category,
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
