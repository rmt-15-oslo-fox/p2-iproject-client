<template>
  <div id="sign-up">
    <form
      id="register-form"
      v-on:submit.prevent="register"
      style="padding: 0 600px 0 600px; margin-top: 150px"
    >
      <h1>Register</h1>
      <div>
        <input
          name="username"
          type="username"
          class="username-register"
          id="username-register"
          placeholder="your username"
          v-model="username"
        />
      </div>
      <br />
      <div>
        <input
          name="password"
          type="password"
          class="password-register"
          id="password-register"
          placeholder="your password"
          v-model="password"
        />
      </div>
      <br />
      <div>
        <input
          name="email"
          type="email"
          class="email-register"
          id="email-register"
          placeholder="email"
          v-model="email"
        /><br />
      </div>
      <br />
      <div id="emailHelp" class="form-text">Your e-mail is safe with us</div>
      <br />
      <div>
        <input
          name="name"
          type="name"
          class="name-register"
          id="name-register"
          placeholder="name"
          v-model="name"
        /><br />
      </div>
      <br />
      <div id="register-button-container">
        <button type="submit" class="rounded"><span>Register</span></button>
        <button
          type="button"
          id="cancel"
          class="rounded"
          v-on:click="changePage()"
        >
          <span>Cancel</span>
        </button>
      </div>
    </form>
    <HFooter></HFooter>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "RegisterPage",
  data() {
    return {
      email: "",
      username: "",
      password: "",
      name: ""
    };
  },
  components: {
    HFooter
  },
  methods: {
    register: function() {
      const URL = "http://localhost:4000";
      axios
        .post(`${URL}/register`, {
          email: this.email,
          username: this.username,
          password: this.password,
          name: this.name
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message
          });
        });
    },
    changePage: function() {
      this.$router.push("/");
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
