<template>
  <div class="home">
    <div class="jumbotron"></div>
    <div class="container">
      <div class="row height d-flex align-items-center">
        <div class="col-md-6">
          <div class="form">
            <font-awesome-icon icon="search"></font-awesome-icon>
            <input
              type="text"
              class="form-control form-input"
              placeholder="Search here..."
              style="color: #220901"
            /><a class="left-pan"
              ><font-awesome-icon icon="times"></font-awesome-icon
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-3 sparring-card">
      <div class="row mb-5">
        <div class="col d-flex justify-content-between align-items-center">
          <h1>SAATNYA TEMUKAN LAWANMU!</h1>
          <router-link class="add-sparring" :to="{ name: 'AddSparring' }"
            ><font-awesome-icon class="add-icon" icon="plus-circle" />BUAT
            SPARINGMU</router-link
          >
        </div>
      </div>
      <div class="row">
        <SparringCard />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import SparringCard from "../components/SparringCard.vue";

export default {
  name: "Home",
  components: {
    SparringCard,
  },
};
</script>

<style>
/* jumbotron */
.jumbotron {
  height: 350px;
  background-image: url("../assets/img/pexels-pixabay-269948.jpg");
  background-size: cover;
  background-position: -20px;
  border-radius: 0 0 7px 7px;
  margin-bottom: 40px;
}

/* search bar */
.form {
  position: relative;
  margin-bottom: 10px;
}

.form .fa-search {
  position: absolute;
  top: 8px;
  left: 20px;
  color: #220901;
}

.form a {
  position: absolute;
  right: 17px;
  top: 3px;
  padding: 2px;
  color: #220901;
}

.left-pan {
  padding-left: 7px;
}

.left-pan i {
  padding-left: 10px;
}

.form-input {
  height: 32px;
  text-indent: 33px;
  border-radius: 999px;
}

.form-input:focus {
  box-shadow: none;
  border: 1px solid #220901;
}
</style>
