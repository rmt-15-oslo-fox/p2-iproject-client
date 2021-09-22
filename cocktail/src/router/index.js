import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import LandingPage from '../views/LandingPage.vue'
import DrinkDetail from '../views/DrinkDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/drinkDetail/:id',
    name: 'DrinkDetail',
    component: DrinkDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
