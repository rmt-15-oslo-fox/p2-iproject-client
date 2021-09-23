<template>
  <div class="container-fluid">
    <div class="row but">
      <div class="col-md-4"></div>
      <div class="col-md-4" id="sign-in">
        <a
          href="https://music-room-live.herokuapp.com/login"
          class="btn btn-block btn-lg btn-success"
          >Sign in With Spotify</a
        >
        <router-link to="/set">
          I don't have a spotify account
        </router-link>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: `SignIn`,
  methods: {
    ...mapActions(["signInWithSpotify"]),
  },
  async created() {
    if (this.$route.query.code) {
      // console.log(this.$route.query.code);
      await this.signInWithSpotify(this.$route.query.code);
      this.$router.push({ name: "SetUsername" });
      localStorage.removeItem("username");
    } else {
      console.log(`nothing`);
    }
  },
};
</script>

<style scoped>
.container-fluid {
  height: 90vh;
}
.but a {
  margin-top: 250px;
}
</style>
