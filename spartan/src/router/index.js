import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sparingku from "../views/Sparingku.vue";
import Login from "../views/Login.vue";
import Daftar from "../views/Daftar.vue";

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
    path: "/masuk",
    name: "Masuk",
    component: Login,
  },
  {
    path: "/daftar",
    name: "Daftar",
    component: Daftar,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
