import Vue from "vue";
import Toast from "vue-toastification";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false;
Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 5,
  newestOnTop: true,
  timeout: 4000,
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
