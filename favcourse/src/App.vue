<template>
  <div id="app">
    <nav-bar
      v-if="$route.name !== 'Login' && $route.name !== 'Register'"
    ></nav-bar>
    <router-view />
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar },
  name: "App",
  methods: {
    ...mapMutations({
      setLoginStatus: "CHANGE_LOGIN",
    }),
  },
  created() {
    if (localStorage.getItem("access_token")) {
      this.setLoginStatus(true);
    }
  },
};
</script>

<style></style>
