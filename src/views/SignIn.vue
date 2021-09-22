<template>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <a
        href="http://localhost:3000/login"
        class="btn btn-block btn-lg btn-success"
        >Sign in With Spotify</a
      >
    </div>
    <div class="col-md-4"></div>
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

<style></style>
