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
  }
  
}
</script>

<style>

</style>
