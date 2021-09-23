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
        <img class="nav-logo" src="https://ik.imagekit.io/xvfgr2ixls8/StockTix__3__NYNlepD7Bx.png?updatedAt=1632373557500" alt="">
      </li>
      <li v-if="this.$store.state.isLogin" class="nav-item">
        <router-link class="nav-link" to="/home">Home</router-link>
      </li>
      <li v-if="!this.$store.state.isLogin" class="nav-item">
        <router-link class="nav-link" to="/login">Login</router-link> 
      </li>
      <li v-if="!this.$store.state.isLogin" class="nav-item">
         <router-link class="nav-link" to="/register">Register</router-link>
      </li>
      <li v-if="this.$store.state.isLogin" class="nav-item">
         <router-link class="nav-link" to="/watchlist">Watchlist</router-link>
      </li>
      <li v-if="this.$store.state.isLogin" class="nav-item">
         <router-link class="nav-link" to="/forum">Forum</router-link>
      </li>
      <li v-if="this.$store.state.isLogin" class="nav-item">
         <router-link class="nav-link" to="/demo">demo</router-link>
      </li>
      <li v-if="this.$store.state.isLogin" class="nav-item" 
      style="padding-left: 190%">
        <button
        @click.prevent="logout"
        id="logout-button"
        class="btn-lg rounded-pill">
        Logout
        </button>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    async logout() {
      localStorage.clear()
      this.$router.push('/login')
      this.$store.commit('SET_ISLOGIN',false)
      this.$store.commit('SET_REGION','')
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
.nav-logo{
  height: 40px;
  width: 60px
}
.nav-item {
  margin-right: 10%;
  margin-top: 2%;
}
#logout-button {
  background-color: #C0EC83;
}
</style>