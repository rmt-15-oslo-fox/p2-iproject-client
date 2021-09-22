<template>
  <nav class="flex justify-between bg-black text-white h-16 items-center px-2 w-full fixed top-0">
    <router-link to="/" class="text-2xl cursor-pointer">Movie App</router-link>
    <ul class="flex justify-between">
      <li class="px-4 py-3 text-xl" v-if="!isLoggedIn">
        <router-link to="/login">Sign In</router-link>
      </li>
      <li class="px-4 py-3 text-xl" v-if="!isLoggedIn">
        <router-link to="/register">Sign Up</router-link>
      </li>
      <li class="px-4 py-3 text-xl" v-if="isLoggedIn" @click.prevent="Logout">
        <router-link to="/">Logout</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  computed: {
    isLoggedIn() {
      return this.$store.state.loggedIn
    }
  },
  methods: {
    Logout() {
      localStorage.removeItem("access_token")
      this.$store.commit("IS_LOGIN", false)
    }
  }
};
</script>

<style></style>
