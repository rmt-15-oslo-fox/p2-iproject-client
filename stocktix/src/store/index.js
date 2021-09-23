import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url = 'http://localhost:3000'

// const api1 = 'QFjCk1Q1Kox96QYKbLEf7YMcBqfALBt1eZrgNcpb'
const api2 = 'Y0Lixb7xv73Jg85WovOsr3SsWBhRlt2DaeRWyKFE'

export default new Vuex.Store({
  state: {
    isLogin: false,
    nasdaq: {},
    ihsg: {},
    region: ''
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
    async fetchCompositeIndex(context) {
      const { data } =  await axios({
        method: 'GET',
        url: 'https://yfapi.net/v8/finance/spark?interval=1d&range=1mo&symbols=%5EIXIC%2C%5EJKSE',
        params: {modules: 'defaultKeyStatistics,assetProfile'},
        headers: {
          'x-api-key': api2
        }
      })
      try {
        // nasdaq
        let timeStamp = data['^IXIC'].timestamp.map(element => {
          let newDate = new Date(element*1000) 
          // let formattedTime = newDate.getHours() + ' : ' + newDate.getMinutes()
          let formattedDate = newDate.getDate() + '/' + newDate.getMonth()
          return formattedDate
        });
        data['^IXIC'].timestamp = timeStamp

        if(data['^IXIC'].close[0] > data['^IXIC'].close[data['^IXIC'].close.length -1]) {
          data['^IXIC'].color = 'red'
        } else if (data['^IXIC'].close[0] < data['^IXIC'].close[data['^IXIC'].close.length -1]) {
          data['^IXIC'].color = 'green'
        } else {
          data['^IXIC'].color = 'yellow'
        }
        context.commit('SET_NASDAQ', data['^IXIC'])

        // ihsg
        let timeStamp2 = data['^JKSE'].timestamp.map(element => {
          let newDate = new Date(element*1000) 
          // let formattedTime = newDate.getHours() + ' : ' + newDate.getMinutes()
          let formattedDate = newDate.getDate() + '/' + newDate.getMonth()
          return formattedDate
        });
        data['^JKSE'].timestamp = timeStamp2

        if(data['^JKSE'].close[0] > data['^JKSE'].close[data['^JKSE'].close.length -1]) {
          data['^JKSE'].color = 'red'
        } else if (data['^JKSE'].close[0] < data['^JKSE'].close[data['^JKSE'].close.length -1]) {
          data['^JKSE'].color = 'green'
        } else {
          data['^JKSE'].color = 'yellow'
        }
        context.commit('SET_IHSG', data['^JKSE'])

      } catch (error) {
        this.$swal(error.response.data.message)
      }
    }
  },
  modules: {
  }
})
