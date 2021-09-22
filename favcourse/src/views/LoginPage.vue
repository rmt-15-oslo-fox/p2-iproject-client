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
        <p class="text-center font-bold text-xl">
          Sign in to <span class="font-bold">FavCourse</span>
        </p>
      </div>
      <form class="mb-10 form-control" @submit.prevent="loginHandler">
        <div class="mb-5">
          <input
            type="email"
            class="input input-primary w-full"
            placeholder="Email"
            v-model="payload.email"
          />
        </div>
        <div class="mb-5">
          <input
            type="password"
            class="input input-primary w-full"
            placeholder="Password"
            v-model="payload.password"
          />
        </div>
        <button type="submit" class="btn-primary w-full">
          <span class="text-white text-md text-xl">Sign in</span>
        </button>
      </form>
      <div class="text-center">
        Don't have an account yet?
        <router-link
          class="text-sm text-blue-600 font-bold"
          :to="{ name: 'Register' }"
          >Sign Up</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "LoginPage",
  data() {
    return {
      payload: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["loginUser"]),
    async loginHandler() {
      await this.loginUser({ ...this.payload });

      if (this.isLoggedIn) {
        this.$router.push({ name: "Home" });
      } else {
        this.payload.email = "";
        this.payload.password = "";
      }
    },
  },
};
</script>

<style></style>
