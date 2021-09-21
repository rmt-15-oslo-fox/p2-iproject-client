<template>
  <div id="app">
    <nav-bar
      v-if="$route.name !== 'Login' && $route.name !== 'Register'"
    ></nav-bar>
    <router-view />
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
  name: "App",
};
</script>

<style></style>
