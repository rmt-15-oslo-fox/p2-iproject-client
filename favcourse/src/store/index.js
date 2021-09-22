import Vue from "vue";
import Vuex from "vuex";
import server from "../apis/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    isError: false,
    user: {
      id: "",
      name: "",
      email: "",
      avatar_url: "",
    },
  },
  mutations: {
    CHANGE_LOGIN(state, loginCondition) {
      state.isLoggedIn = loginCondition;
    },
    SET_ERROR(state, errorCondition) {
      state.isError = errorCondition;
    },
    SET_USER(state, payload) {
      state.user = payload;
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
        commit("SET_USER", data.user);
        Vue.$toast.success(data.message);
      } catch (err) {
        commit("SET_ERROR", true);
        const { data } = err.response;
        const errorMessage = data.errors[0];
        Vue.$toast.error(errorMessage);
      }
    },

    async fetchUserProfile({ commit }) {
      try {
        const { data } = await server({
          url: "users/profile",
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        commit("SET_USER", data.user);
      } catch (error) {
        const { data } = error.response;
        console.log(data, "<<<<<<<");
        Vue.$toast.error("error");
      }
    },

    async updateUserProfie({ dispatch }, payload) {
      const form = new FormData();
      form.append("name", payload.name);
      if (typeof payload.avatar_url === "object") {
        form.append("avatar", payload.avatar_url);
      } else {
        form.append("avatar_url", payload.avatar_url);
      }
      try {
        const { data } = await server({
          url: `/users/${payload.id}`,
          method: "PUT",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: form,
        });

        Vue.$toast.success(data.message);
        await dispatch("fetchUserProfile");
      } catch (error) {
        const { data } = error.response;
        Vue.$toast.error(data.errors[0]);
      }
    },
  },
  modules: {},
});
