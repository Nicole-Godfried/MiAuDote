import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Adote from '../views/Adote.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path: '/adote',
    name: 'Adote',
    component: Adote
  }
]

const router = new VueRouter({
  routes
})

export default router
