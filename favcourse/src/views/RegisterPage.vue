<template>
  <section class="flex justify-center items-center min-h-screen">
    <div
      class="
        container
        mx-auto
        px-6
        py-6
        md:max-w-md md:shadow-xl md:my-24 md:border-2 md:border-transparent
      "
    >
      <div class="mb-10">
        <p class="text-center font-semibold text-xl">
          Sign up to <span class="font-bold">FavCourse</span>
        </p>
      </div>
      <form class="mb-10 form-control" @submit.prevent="registerHandler">
        <div class="mb-5">
          <input
            type="text"
            class="input"
            placeholder="Name"
            v-model="payload.name"
          />
        </div>
        <div class="mb-5">
          <input
            type="email"
            class="input"
            placeholder="Email"
            v-model="payload.email"
          />
        </div>
        <div class="mb-5">
          <input
            type="password"
            class="input"
            placeholder="Password"
            v-model="payload.password"
          />
        </div>
        <button type="submit" class="btn-primary w-full">
          <span class="text-white text-md text-xl">Sign Up</span>
        </button>
      </form>
      <div class="text-center">
        Already have an account yet?
        <router-link
          class="text-sm text-blue-600 font-bold"
          :to="{ name: 'Login' }"
          >Sign In</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "RegisterPage",
  data() {
    return {
      payload: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(["isError"]),
  },
  methods: {
    ...mapActions(["registerUser"]),
    async registerHandler() {
      await this.registerUser({ ...this.payload });
      if (!this.isError) {
        this.payload.name = "";
        this.payload.password = "";
        this.payload.email = "";
        this.$router.push({ name: "Login" });
      }
    },
  },
};
</script>

<style></style>
