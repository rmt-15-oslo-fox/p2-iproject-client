<template>
  <div>
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
              <router-link class="nav-link" :to="{ name: 'Sparingku' }"
                >SPARINGKU</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Daftar' }"
                >DAFTAR</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Masuk' }"
                >MASUK</router-link
              >
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

.navbar .nav-item:first-child {
  margin-left: 0;
}
</style>