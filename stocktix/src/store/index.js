import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Swal from "sweetalert2/dist/sweetalert2.js";

Vue.use(Vuex)

const url = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    isLogin: false,
    successRegister: false,
    composites: {},
    region: ''
  },
  mutations: {
    SET_ISLOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_SUCCESSREGISTER (state, payload) {
      state.successRegister = payload
    },
    SET_COMPOSITES (state, payload) {
      state.composites = payload
    },
    SET_REGION(state, payload) {
      state.region = payload
    }
  },
  actions: {
    async registerUser(context, payload) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${url}/register`,
          data: payload
        })
        Swal.fire(`Successfully created ${data.email}'s account`)
        context.commit('SET_SUCCESSREGISTER', true)
      } catch (error) {
        Swal.fire(error.response.data.message)
      }
    },
    async loginUser (context, payload) {
      try {
        const data = await axios({
          method: 'POST',
          url: `${url}/login`,
          data: payload
        })
        localStorage.setItem('access_token', data.data.access_token)
        context.commit('SET_ISLOGIN', true)
      } catch (error) {
        Swal.fire(error.response.data.message)
      }
    },
    async fetchCompositeIndex(context, payload) {
      try {
        const data = await axios({
          method: 'GET',
          url: `${url}/composites?index=${payload}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
        context.commit('SET_COMPOSITES', data)
      } catch (error) {
        Swal.fire(error.response.data.message)
      }
    }
  },
  modules: {
  }
})
