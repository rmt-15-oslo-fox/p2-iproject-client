import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'leaflet/dist/leaflet.css';
import swal from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.prototype.$baseEndpoint = `https://covid-app-server-21.herokuapp.com`

Vue.use(swal)
Vue.config.productionTip = false;

new Vue({
  swal,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
