<template>
  <div class="MySparring">
    <div class="jumbotron"></div>
    <div class="container my-3 sparring-card">
      <div class="row mb-5">
        <div class="col d-flex justify-content-between align-items-center">
          <h1>LIST SPARING KAMU</h1>
          <router-link class="add-sparring" :to="{ name: 'AddSparring' }"
            ><font-awesome-icon class="add-icon" icon="plus-circle" />BUAT
            SPARINGMU</router-link
          >
        </div>
      </div>
      <div class="row">
        <MySparringCard
          v-for="userSparring in userSparrings"
          :key="userSparring.id"
          :userSparring="userSparring"
        />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import MySparringCard from "../components/MySparringCard.vue";

export default {
  name: "MySparring",
  components: {
    MySparringCard,
  },
  computed: {
    userSparrings() {
      return this.$store.state.userSparrings;
    },
  },
  created() {
    this.$store.dispatch("fetchUserSparrings");
  },
};
</script>

<style>
.sparring-card h1 {
  font-size: 26px;
  margin: 0;
}

.sparring-card h3 {
  font-size: 24px;
}

.sparring-card img {
  margin-top: -60px;
}

.sparring-card p {
  font-size: 14px;
  font-weight: 500;
}

.sparring-card .card-group {
  border-radius: 10px;
  transition: all 0.3s ease-in;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  margin-bottom: 60px;
}

.sparring-card .card-group img {
  transition: all 0.3s ease-in;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
}

.sparring-card .card-group:hover {
  background-color: #f6aa1c;
}

.sparring-card .card-group:hover h3,
.sparring-card .card-group:hover p {
  color: #941b0c;
}

.sparring-card .card-body .category {
  background-color: #f6aa1c;
  display: inline-block;
  padding: 2px 10px;
  color: #220901;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
}

.sparring-card .card-group:hover .category {
  color: #fff;
  background-color: #220901;
}

.sparring-card .add-sparring {
  color: #220901;
}

.sparring-card .add-icon {
  color: #bc3908;
  margin-right: 5px;
}

.sparring-card .add-sparring:hover {
  text-decoration: none;
  color: #941b0c;
}
</style>
