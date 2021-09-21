import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/SignIn.vue";
import SetUsername from "../views/SetUsername.vue";
import MainPage from "../views/MainPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/set",
    name: "SetUsername",
    component: SetUsername,
  },
  {
    path: "/main",
    name: "MainPage",
    component: MainPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
