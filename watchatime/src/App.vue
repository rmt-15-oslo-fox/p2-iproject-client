<template>
  <div>
    <the-navbar></the-navbar>
    <router-view />
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import TheNavbar from './components/layouts/TheNavbar.vue';

export default {
  components: { TheNavbar },
  name: 'App',
  methods: {
    ...mapMutations(['SET_IS_LOGGED_IN']),
  },
  created() {
    if (localStorage.getItem('access_token')) {
      this.SET_IS_LOGGED_IN(true);
      this.$router.push('/dashboard');
    } else {
      this.SET_IS_LOGGED_IN(false);
      this.$router.push('/login');
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
