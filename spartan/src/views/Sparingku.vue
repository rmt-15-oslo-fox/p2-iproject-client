<template>
  <div class="Sparingku">
    <div class="jumbotron"></div>
    <div class="container main-content">
      <h1>LIST SPARING KAMU</h1>
      <div class="row justify-content-around">
        <SparingkuCard
          v-for="userSparring in userSparrings"
          :key="userSparring.id"
          :userSparring="userSparring"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SparingkuCard from "../components/SparinkuCard.vue";

export default {
  name: "Sparingku",
  components: {
    SparingkuCard,
  },
  computed: {
    userSparrings() {
      return this.$store.state.userSparrings;
    },
  },
  created() {
    this.$store.dispatch("fetchSparrings");
  },
};
</script>

<style>
</style>
