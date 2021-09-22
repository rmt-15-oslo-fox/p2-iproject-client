<template>
  <div id="app">
    <navbar-component></navbar-component>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import NavbarComponent from "./components/Navbar.vue"
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components: {
    NavbarComponent,
    Footer
  },
  created: function(){
    if (localStorage.getItem('access_token')){
      this.$store.commit('SET_ISLOGIN', true)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Sora', sans-serif;
}
</style>
