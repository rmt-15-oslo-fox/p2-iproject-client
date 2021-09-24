import Vue from "vue";
import VueRouter from "vue-router";
import Swal from "sweetalert2";

import Home from "../views/Home.vue";
import MySparring from "../views/MySparring.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import AddSparring from "../views/AddSparring.vue";
import SparringChat from "../views/SparringChat.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/my-sparring",
    name: "MySparring",
    component: MySparring,
  },
  {
    path: "/sparring-chat",
    name: "SparringChat",
    component: SparringChat,
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
    next(false);
  } else if (to.name === "AddSparring" && !isLogin) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'warning',
      title: 'You must login first!'
    })
    next(false)
  } else {
    next();
  }
});

export default router;
