import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultPage from '../views/DefaultPage.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Forums from '../views/Forums.vue'
import Watchlist from '../views/Watchlist.vue'
import Demo from '../views/Demo.vue'
import NewsPage from '../views/NewsPage.vue'
import DetailPage from '../views/DetailPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Default',
    component: DefaultPage
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
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/forum',
    name: 'Forums',
    component: Forums
  },
  {
    path: '/watchlist',
    name: 'Watchlist',
    component: Watchlist
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/news',
    name: 'NewsPage',
    component: NewsPage
  },
  {
    path: '/details',
    name: 'DetailPage',
    component: DetailPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.name === 'Login' || to.name === 'Register') && localStorage.access_token) {
    next({ name: 'Home' })
  } else if ((to.name !== 'Login' || to.name !== 'Register') && !localStorage.access_token) {
    next({ name: 'Default'})
  } else {
    next()
  }
})

export default router
