import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/dashboard.vue";
import LoginPage from "../views/login.vue";
import RegisterPage from "../views/register.vue";
import ChargePage from "../views/addBalance.vue";
import Reminder from "../views/reminderList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/charge",
    name: "ChargePage",
    component: ChargePage
  },
  {
    path: "/reminder",
    name: "Reminder",
    component: Reminder
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
