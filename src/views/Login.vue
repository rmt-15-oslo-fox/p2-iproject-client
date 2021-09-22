<template>
  <div class="h-screen w-full flex items-center">
    <div class="bg-gray-600 rounded-lg mx-auto w-4/12 h-1/2">
      <p class="text-4xl text-center text-white mt-5">Sign In</p>
      <form @submit.prevent="login" class="mt-14 w-5/6 mx-auto">
        <input v-model="username" type="text" class="w-full text-xl mb-5 rounded-sm pl-2 outline-none" placeholder="Username">
        <input v-model="password" type="password" class="w-full text-xl mb-10 rounded-sm pl-2 outline-none" placeholder="Password">
        <button type="submit" class="w-full bg-yellow-300 mb-5 h-10 rounded-md">Sign In</button>
      </form>
      <p class="text-white">Don't have an account? <router-link to="/register" class="cursor-pointer">Sign Up Here</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login", {username: this.username, password: this.password})
        .then(res => {
          localStorage.setItem("access_token", res.data.access_token)
          this.$store.commit("SET_LOGIN", true)
          this.$toast.success("Welcome back, ", this.username)
          this.$router.push({ path: '/'})
        })
        .catch(err => this.$toast.error(err.response.data.message))  
    },
  }
}
</script>

<style>

</style>