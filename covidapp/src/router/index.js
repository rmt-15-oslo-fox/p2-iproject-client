import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"
import Search from "../views/Search.vue"
import Maps from "../views/Map.vue"
import Register from "../views/Rgister.vue"
import Result from "../views/Result.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Login",
    name : "Login",
    component : Login
  },
  {
    path: "/Search",
    name : "Search",
    component : Search
  },
  {
    path: "/Map",
    name : "Map",
    component : Maps
  },
  {
    path: "/Register",
    name : "Register",
    component : Register
  },
  {
    path: "/Result",
    name : "Result",
    component : Result
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.access_token 
  if (to.name === 'Result' && !isAuthenticated){
    next({ name: 'Home' })
  }
  else if(to.name === 'Search' && !isAuthenticated){
    next({ name: 'Home' })
  }
  else if(to.name === 'Map' && !isAuthenticated){
    next({ name: 'Home' })
  }else if(to.name === 'Login' && isAuthenticated){
    next({ name: 'Home' })
  }else if(to.name === 'Register' && isAuthenticated){
    next({ name: 'Home' })
  }
  else next()
})

export default router;
