<template>
  <header
    class="
      md:px-0 md:container
      mx-auto
      flex flex-col
      justify-between
      items-center
      py-8
      px-3
      md:flex-row
    "
  >
    <h1 class="text-3xl font-bold text-black-primary mb-5 md:mb-0">
      FavCourse
    </h1>
    <nav>
      <ul class="flex">
        <li
          class="
            mr-3
            py-2
            px-8
            bg-white
            text-purple-light
            border-2 border-transparent
            rounded-full
            shadow
            hover:text-black-primary
          "
          v-if="!isLoggedIn"
        >
          <router-link :to="{ name: 'Login' }">Sign In</router-link>
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link :to="{ name: 'Register' }">Sign Up</router-link>
        </li>
        <li v-if="isLoggedIn">
          <div
            class="
              rounded-full
              h-10
              w-10
              bg-purple-light
              flex
              items-center
              justify-center
            "
          >
            <p class="text-white font-bold">H</p>
          </div>
          <ul>
            <li>Sign Out</li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapState(["isLoggedIn"]),
  },
};
</script>

<style></style>
