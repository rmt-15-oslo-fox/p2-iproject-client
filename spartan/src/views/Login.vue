<template>
  <div class="Login">
    <div class="container p-24">
      <div class="row align-items-center justify-content-center login">
        <div class="col-6 img-container shadow"></div>
        <div class="col-6 form-container shadow">
          <div>
            <div class="mb-4">
              <h1>Sign In</h1>
              <p class="border-bottom">
                Welcome back! Go to find jobs matching your salary
              </p>
            </div>
            <form @submit.prevent="login">
              <div class="mb-3">
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3">
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                />
              </div>
              <div class="mb-3">
                <button type="submit" class="btn" style="width: 100%">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("loginForm", payload);
    },
  },
};
</script>

<style>
.login {
  height: 100vh;
}

.login .img-container {
  height: 80vh;
  background-image: url("../assets/img/pexels-pixabay-269948.jpg");
  background-size: cover;
  background-position: -70px;
  border-radius: 10px 0 0 10px;
}

.login .form-container {
  height: 80vh;
  padding: 40px;
  background-color: #0e123e;
  border-radius: 0 10px 10px 0;
}

.login .form-container h1 {
  font-size: 1.5rem;
  color: #f4f7fd;
}

.login .form-container p {
  font-size: 1rem;
  color: #f4f7fd;
  padding-bottom: 10px;
}

.login .form-container input {
  background-color: #f4f7fd;
}

.login .form-container button {
  background-color: #ee786b;
  font-weight: 600;
}
</style>
