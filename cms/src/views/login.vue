<template>
  <!-- login -->
  <div class="row container m-auto m-md-none">
    <div class="login container m-auto border mt-5 rounded-5 col-md-5">
      <form class="p-5" @submit.prevent="login">
        <h2 class="text-center">Login</h2>
        <div class="mb-3 mt-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          v-on:click="page = 'dashboard-main'"
          type="submit"
          class="btn btn-primary"
        >
          Submit</button
        ><br />
        <small
          >dont have an account ?
          <a @click="register" class="color-primary">register</a></small
        >
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const url = "http://localhost:3000";
      axios
        .post(`${url}/login`, {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          let access_token = res.data.token;
          localStorage.setItem("access_token", access_token);
          this.$emit("changePage", "dashboard");
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login success!",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "your password or email wrong!",
          });
        });
    },
    register() {
      this.$emit("changePage", "register");
    },
  },
};
</script>

<style>
</style>