import Vue from "vue";
import Vuex from "vuex";

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

  },
  modules: {},
});
