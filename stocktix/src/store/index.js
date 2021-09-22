import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {
    SET_ISLOGIN (state, payload) {
      state.isLogin = payload
    },
  },
  actions: {
    registerUser(context, payload) {
      console.log(payload);
      return axios({
        method: 'POST',
        url: `${url}/customers/register`,
        data: payload
      })
    },
    loginUser (context, payload) {
      return axios({
        method: 'POST',
        url: `${url}/customers/login`,
        data: payload
      })
    },
  },
  modules: {
  }
})
