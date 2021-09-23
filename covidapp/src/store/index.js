import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

const baseUrl = `https://covid-app-server-21.herokuapp.com`

// const baseUrl = `http://localhost:3000`

export default new Vuex.Store({
  state: {
    isLogin: false,
    dataUser: {},
    dataResultHospital: {},
    dataProvince: {},
    search: '',
    filtered: [],
    provinceCov: {}
  },
  mutations: {
    addDataLogin(state, payload) {
      state.dataUser = payload
    },
    changeIsLogin(state, payload) {
      state.isLogin = payload
    },
    search(state, word) {
      state.search = word
    }
  },
  actions: {
    async getDataCovidIndo() {
      return axios({
        url: `${baseUrl}/getDataCovidIndo`,
        method: 'get',
      })
    },
    async login({ state }) {
      return axios({
        url: `${baseUrl}/login`,
        method: 'post',
        data: {
          username: state.dataUser.username,
          password: state.dataUser.password
        }
      })
    },
    async register({ state }) {
      return axios({
        url: `${baseUrl}/register`,
        method: 'post',
        data: {
          username: state.dataUser.username,
          password: state.dataUser.password,
          city: state.dataUser.city,
          email: state.dataUser.email
        }
      })
    },
    async getDataLocation() {
      return axios({
        url: `${baseUrl}/hospital/location`,
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
    },
    async getDataProvince({ state }) {
      axios({
        url: `${baseUrl}/province`,
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          state.dataResultHospital = response.data.dataHospital
          state.dataProvince = response.data.dataProvince
        })
        .catch(err => {
          const msg = err.response.data.msg;
          Vue.swal.fire({
            icon: "error",
            title: `${msg}`,
            text: "Please Enter Valid Email/Password",
          });
          this.$router.push('/Search')
        })
    },
    async filterData({ state }) {
      const search = state.search.toLowerCase()
      const filter = await state.dataResultHospital.filter(el => {
        let name = el.province.toLowerCase()
        if (name === search) {
          return el
        }
      })
      const provinceCov = state.dataProvince.filter(el => {
        let name = el.attributes.Provinsi.toLowerCase()
        if (search === name) {
          return el
        }
      })
      state.provinceCov = provinceCov
      state.filtered = filter
    }
  },
  modules: {},
});
