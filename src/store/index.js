import Vue from 'vue'
import Vuex from 'vuex'
import weatherAPI from '../apis/openWeatherAPI'
import mountainAPI from '../apis/mountainAPI'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {
    SET_ISLOGIN: function (state, status) {
      state.isLogin = status
    },
  },
  actions: {
    googleLogin: function(context, idToken){
      try {
        return mountainAPI.post('/oauth', { idToken })
      } catch (err) {
        this.$toasted.show(err).goAway(2000)
      }
    },
    getWeather: function(context, payload){
      const { lat, lon } = payload
      return weatherAPI.get('', {
        params: {
          lat,
          lon
        }
      })
    }
  },
  modules: {
  }
})
