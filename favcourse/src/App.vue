<template>
  <div id="app">
    <nav-bar
      v-if="$route.name !== 'Login' && $route.name !== 'Register'"
    ></nav-bar>
    <router-view />
    <div class="relative">
      <HFooter class="fixed w-screen bottom-0 h-28 flex"></HFooter>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
import NavBar from "./components/NavBar.vue";
import HFooter from "vue-hacktiv8-footer";
export default {
  components: { NavBar, HFooter },
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
