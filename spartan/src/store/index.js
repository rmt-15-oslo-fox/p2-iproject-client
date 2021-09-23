import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
import Swal from "sweetalert2";

const baseUrl = "http://localhost:3000"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userSparrings: []
  },
  mutations: {
    Set_UserSparrings(state, payload) {
      state.userSparrings = payload;
    },
  },
  actions: {
    loginForm(context, payload) {
      const config = {
        method: "post",
        url: `${baseUrl}/login`,
        data: payload,
      };

      axios(config)
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          // commit("SET_NAVIGATION");
          router.push("/");

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
        })
        .catch((err) => {
          const errors = err.response.data.message;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: errors.join(", "),
          });
        });
    },
    fetchSparrings({ commit }) {
      const config = {
        method: "get",
        url: `${baseUrl}/user-sparrings`,
        headers: {
          access_token: localStorage.access_token
        }
      };

      axios(config)
        .then((res) => {
          commit("Set_UserSparrings", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
