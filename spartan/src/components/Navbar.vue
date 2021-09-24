<template>
  <div class="Navbar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img src="../assets/img/spartan-logo.png" alt="spartan" width="80"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Home' }"
                >HOME</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'MySparring' }"
                >MY SPARRING</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'SparringChat' }"
                >SPARRING CHAT</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Register' }"
                >REGISTER</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Login' }"
                >LOGIN</router-link
              >
            </li>
            <li class="nav-item">
              <a @click.prevent="signOut" class="nav-link" href="#">LOGOUT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
    },
  },
};
</script>

<style>
.navbar {
  padding-top: 0;
  padding-bottom: 0;
  font-size: 1.2rem;
  background-color: #f6aa1c;
}

.navbar .nav-item .nav-link {
  color: #220901;
  padding: 0;
}

.navbar .nav-item {
  margin-left: 50px;
}

.navbar .nav-item a.router-link-exact-active {
  color: #941b0c;
}
</style>