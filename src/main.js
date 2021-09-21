import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GSignInButton from 'vue-google-signin-button'
import toasted from 'vue-toasted'

Vue.config.productionTip = false
Vue.use(GSignInButton)
Vue.use(toasted)
// Vue.directive('scroll', {
//   inserted: function (el, binding) {
//     let f = function (evt) {
//       if (binding.value(evt, el)) {
//         window.removeEventListener('scroll', f)
//       }
//     }
//     window.addEventListener('scroll', f)
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
