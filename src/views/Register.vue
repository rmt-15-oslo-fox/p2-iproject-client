<template>
  <div class="h-screen w-screen flex bg-login-bg bg-cover bg-no-repeat bg-center items-center">
    <div class="bg-gray-600 rounded-lg mx-auto w-4/12 h-1/2">
      <p class="text-4xl text-center text-white mt-5">Sign Up</p>
      <form class="mt-12 w-5/6 mx-auto">
        <input type="text" class="w-full text-xl mb-5 rounded-sm pl-2 outline-none" placeholder="Username">
        <input type="text" class="w-full text-xl mb-5 rounded-sm pl-2 outline-none" placeholder="Email">
        <input type="password" class="w-full text-xl mb-5 rounded-sm pl-2 outline-none" placeholder="Password">
        <button type="submit" class="w-full bg-yellow-300 mb-5 h-10 rounded-md">Sign Up</button>
      </form>
      <p class="text-white">Already have an account? <router-link to="/login" class="cursor-pointer">Sign In Here</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style>

</style>