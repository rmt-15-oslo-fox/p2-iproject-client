import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"

Vue.config.productionTip = false;

Vue.use(Toast, {
  transition: "Vue-Toastification__fade",
  timeout: 4000,
  maxToasts: 5,
  newestOnTop: true,
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
