import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sparingku from "../views/Sparingku.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import AddSparring from "../views/AddSparring.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sparingku",
    name: "Sparingku",
    component: Sparingku,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/add-sparring",
    name: "AddSparring",
    component: AddSparring,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let isLogin = localStorage.access_token;
  if ((to.name === "Login" && isLogin) || (to.name === "Register" && isLogin)) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
