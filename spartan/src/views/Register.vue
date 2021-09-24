<template>
  <div class="Register">
    <div class="container p-24">
      <div class="row align-items-center justify-content-center login">
        <div class="col-6 img-container shadow"></div>
        <div class="col-6 form-container shadow">
          <div>
            <div class="mb-4">
              <h1>Sign Up</h1>
              <p class="border-bottom">
                Welcome back! Go to find jobs matching your salary
              </p>
            </div>
            <form @submit.prevent="register">
              <div class="mb-3">
                <input
                  v-model="username"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Username"
                />
              </div>
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
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("registerForm", payload);
    },
  },
};
</script>

<style></style>
