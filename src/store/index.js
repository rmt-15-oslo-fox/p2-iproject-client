import Vue from "vue";
import Vuex from "vuex";
import movieAPI from "../apis/movieAPI"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false
  },
  mutations: {
    SET_LOGIN (state, payload) {
      state.loggedIn = payload
    }
  },
  actions: {
    login (context, payload) {
      return movieAPI.post('/users/login', payload)
    },
    register (context, payload) {
      return movieAPI.post('/users/register', payload)
    }
  },
  modules: {},
});
