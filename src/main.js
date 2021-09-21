import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GSignInButton from 'vue-google-signin-button'
import toasted from 'vue-toasted'
import VueSocketIO from 'vue-socket.io'
import VueChatScroll from 'vue-chat-scroll';

Vue.config.productionTip = false
Vue.use(GSignInButton)
Vue.use(toasted)
Vue.use(VueChatScroll);

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000'
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
