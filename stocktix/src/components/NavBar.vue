<template>
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: black">
  <button class="navbar-toggler" type="button" data-toggle="collapse"
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
  aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" style="color: black;">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li v-if="!this.$store.state.isLogin" class="nav-item">
        <router-link class="nav-link" to="/login">Login</router-link> 
      </li>
      <li v-if="!this.$store.state.isLogin" class="nav-item">
         <router-link class="nav-link" to="/register">Register</router-link>
      </li>
      <li class="nav-item" style="padding-left: 420%">
        <a
        @click.prevent="logout"
        
        class="nav-link" href="">
       Logout
        </a>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push('/login')
      this.$store.commit('SET_ISLOGIN',false)
    }
  },
  components: {
  }
}
</script>

<style>
#navbarSupportedContent {
  padding-left: 100px;
  padding-right: 100px;
  font-size: 20px;
  color:black
}
.nav-item {
  margin-right: 10%;
  margin-top: 2%;
}
.btn-dark {
  border-radius: 15%;
}
</style>