import Vue from "vue";
import Vuex from "vuex";
import server from "../apis/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    isError: false,
  },
  mutations: {
    CHANGE_LOGIN(state, loginCondition) {
      state.isLoggedIn = loginCondition;
    },
    SET_ERROR(state, errorCondition) {
      state.isError = errorCondition;
    },
  },
  actions: {
    async registerUser({ commit }, payload) {
      try {
        const { data } = await server({
          url: "/register",
          method: "POST",
          data: payload,
        });
        Vue.$toast.success(`${data.message}, Please Login!`);
      } catch (err) {
        commit("SET_ERROR", true);
        const { data } = err.response;
        const errorMessage = data.errors[0];
        Vue.$toast.error(errorMessage);
      }
    },

    async loginUser({ commit }, payload) {
      try {
        const { data } = await server({
          url: "/login",
          method: "POST",
          data: payload,
        });
        localStorage.setItem("access_token", data.access_token);
        commit("CHANGE_LOGIN", true);
        Vue.$toast.success(data.message);
      } catch (err) {
        commit("SET_ERROR", true);
        const { data } = err.response;
        const errorMessage = data.errors[0];
        Vue.$toast.error(errorMessage);
      }
    },
  },
  modules: {},
});
