import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    isLogin: false,
    nasdaq: {},
    ihsg: {},
    defaultRegion: 'ihsg'
  },
  mutations: {
    SET_ISLOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_NASDAQ (state, payload) {
      state.nasdaq = payload
    },
    SET_IHSG (state, payload) {
      state.ihsg = payload
    }
  },
  actions: {
    registerUser(context, payload) {
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
    fetchCompositeIndex() {
      return axios({
        method: 'GET',
        url: 'https://yfapi.net/v8/finance/spark?interval=15m&range=1d&symbols=%5EIXIC%2C%5EJKSE',
        params: {modules: 'defaultKeyStatistics,assetProfile'},
        headers: {
          'x-api-key': 'QFjCk1Q1Kox96QYKbLEf7YMcBqfALBt1eZrgNcpb'
        }
      })
    }
  },
  modules: {
  }
})
