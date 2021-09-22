<template>
  <div id="login-container">
    <form
      id="login-form"
      v-on:submit.prevent="login"
      style="padding: 0 600px 0 600px; margin-top: 150px"
    >
      <h1>Log In</h1>
      <div>
        <input
          v-model="username"
          type="username"
          id="username"
          placeholder="your username"
        /><br /><br />
      </div>
      <div>
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="your password"
        /><br /><br />
      </div>
      <div id="login-button-container">
        <div>
          <button class="login-button rounded" type="submit">
            <span>Log In</span>
          </button>
        </div>
        <div>
          <router-link to="/register">
            <button
              class="register-button login-button rounded"
              type="button"
              id="register"
            >
              <span>Register</span>
            </button>
          </router-link>
        </div>
      </div>
      <br />
      <h5>Or Log In with Google Account</h5>
      <GoogleLogin
        :params="params"
        :renderParams="renderParams"
        :onSuccess="onSuccess"
        >Login</GoogleLogin
      >
    </form>
    <HFooter></HFooter>
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
import axios from "axios";
import Swal from "sweetalert2";
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      params: {
        client_id:
          "615871655779-q6me4fpgrjhvuuo736maf9rjpgk80a0b.apps.googleusercontent.com"
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    };
  },
  components: {
    GoogleLogin,
    HFooter
  },
  methods: {
    login: function() {
      const URL = "http://localhost:4000";
      axios
        .post(`${URL}/login`, {
          username: this.username,
          password: this.password
        })
        .then(response => {
          localStorage.setItem("access_token", response.data.access_token);
          this.$router.push("/dashboard");
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message
          });
        });
    },
    onSuccess(googleUser) {
      let id_token = googleUser.getAuthResponse().id_token;
      const URL = "http://localhost:4000";
      axios({
        method: "post",
        url: `${URL}/loginGoogle`,
        data: {
          idToken: id_token
        }
      })
        .then(resp => {
          localStorage.setItem("access_token", resp.data.token);
          this.$router.push("/dashboard");
        })
        .catch(error => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message
          });
        });
    }
  },
  created() {
    if (localStorage.access_token) {
      this.$router.push("/dashboard");
    }
  }
};
</script>

<style></style>
