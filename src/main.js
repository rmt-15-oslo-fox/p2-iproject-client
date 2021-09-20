import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GSignInButton from 'vue-google-signin-button'
import toasted from 'vue-toasted'

Vue.config.productionTip = false
Vue.use(GSignInButton)
Vue.use(toasted)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
