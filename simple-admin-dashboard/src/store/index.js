import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../apis/axios"
import router from "../router/index"
import Swal from "sweetalert2"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    items: []
  },
  mutations: {
    SET_IS_LOGIN(state, payload) {
      state.isLogin = payload
    },
    SET_ITEMS(state, payload) {
      state.items = payload
    }
  },
  actions: {
    async login({commit}, payload) {
      try {
        const response = await axios.post("/users/login", {
          email: payload.email,
          password: payload.password
        })
        localStorage.setItem("access_token", response.data.access_token)
        commit("SET_IS_LOGIN", true)
        router.push({path: "/"})
        Swal.fire(
          'Success!',
          'Successfully logged in!',
          'success'
        )
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Wrong Email and Password combination!'
        })
        console.log(err)
      }
    },
    async register(_, payload) {
      try {
        const { data } = await axios.get("https://api.ipify.org?format=json")
        const result = await axios.post("/users/register", {
          email: payload.email,
          password: payload.password,
          ip: data.ip
        })
        console.log(result)
        Swal.fire(
          'Success!',
          'User has been registered!',
          'success'
        )
        router.push({path: "/login"})
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please input all the fields properly!'
        })
        console.log(err)
      }
    },
    async getItems({commit}) {
      try {
        const result = await axios.get("/items", {
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        commit("SET_ITEMS", result.data)
      } catch (err) {
        console.log(err)
      }
    },
    async addItem(_, payload) {
      try {
        const result = await axios.post("/items", payload, {
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        Swal.fire(
          'Success!',
          'Item has been added!',
          'success'
        )
        return result
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please input all the fields properly!'
        })
      }
    },
    async updateItem(_, payload) {
      try {
        const result = await axios.put(`/items/${payload.id}`, payload, {
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        console.log(result)
        Swal.fire(
          'Success!',
          'Item has been edited!',
          'success'
        )
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "You're not authorized!"
        })
      }
    },
    async deleteItem(_, payload) {
      try {
        console.log(payload)
        const result = await axios.delete(`/items/${payload.id}`, {
          headers: {
            access_token: localStorage.getItem("access_token")
          }
        })
        console.log(result)
        Swal.fire(
          'Success!',
          result.data.message,
          'success'
        )
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "You're not authorized!"
        })
      }
    }
  },
  modules: {
  }
})
