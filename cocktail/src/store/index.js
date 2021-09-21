import Vue from 'vue'
import Vuex from 'vuex'
import http from '../lib/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async register(context, payload){
      try {
        const user = await http({
          method : 'post',
          url : 'users/register',
          data : payload
        })
        if(user){
          router.push({ name : 'Login'})
        }
      } catch (err) {
        console.log(err.response);
      }
    }
  },
  modules: {
  }
})
