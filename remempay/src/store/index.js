import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Swal from "sweetalert2";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    URL: "http://localhost:4000",
    name: "",
    balance: 0,
    convert: 0,
    reminder: [],
    status: [],
    reminderById: []
  },
  mutations: {
    FETCH_INFO(state, payload) {
      state.name = payload.name;
      state.balance = payload.balance;
    },
    FETCH_CONVERT(state, payload) {
      state.convert = payload;
    },
    FETCH_REMINDER(state, payload) {
      state.reminder = payload;
    },
    FETCH_STATUS(state, payload) {
      state.status = payload;
    },
    STORE_REMINDER(state, payload) {
      state.reminderById = payload;
    }
  },
  actions: {
    fetchConverted({ commit }, payload) {
      axios({
        url: `${this.state.URL}/list/convert`,
        method: "post",
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(res => {
          commit("FETCH_CONVERT", res.data);
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message
          });
        });
    },
    fetchInfo({ commit }) {
      axios({
        url: `${this.state.URL}/list/info`,
        method: "get",
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          commit("FETCH_INFO", res.data.info);
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message
          });
        });
    },
    fetchReminder({ commit }) {
      axios({
        url: `${this.state.URL}/list`,
        method: "get",
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          commit("FETCH_REMINDER", res.data.reminder);
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message
          });
        });
    },
    fetchStatus({ commit }) {
      axios({
        url: `${this.state.URL}/list/status`,
        method: "get",
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          commit("FETCH_STATUS", res.data.status);
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message
          });
        });
    },
    storeReminder({ commit }, payload) {
      axios({
        url: `${this.state.URL}/list/${payload}`,
        method: "get",
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          commit("STORE_REMINDER", res.data);
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message
          });
        });
    }
  },
  modules: {}
});
