<template>
  <div id="app">
    <nav-bar
      v-if="$route.name !== 'Login' && $route.name !== 'Register'"
    ></nav-bar>
    <router-view />
    <HFooter></HFooter>
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
