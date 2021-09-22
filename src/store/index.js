import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [],
    users: [],
  },
  mutations: {
    INSERT_MESSAGE(state, payload) {
      state.messages.push(payload);
    },
    INSERT_USERS(state, payload) {
      state.users = payload;
    },
  },
  actions: {},
  modules: {},
});
