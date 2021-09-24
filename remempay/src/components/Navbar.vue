<template>
  <div id="navbar">
    <button v-on:click="changePage('dashboard')" type="button" class="rounded">
      <span>Home</span>
    </button>
    <button type="button" class="rounded" v-on:click="changePage('reminder')">
      <span>My Reminders</span>
    </button>
    <button type="button" class="rounded" v-on:click="changePage('status')">
      <span>Payment Status</span>
    </button>
    <button
      type="button"
      class="rounded"
      v-on:click="changePage('addReminder')"
    >
      <span>Add Reminder</span>
    </button>
    <button type="button" class="rounded" v-on:click="changePage('charge')">
      <span>Add Balance</span>
    </button>
    <GoogleLogin
      :onSuccess="onSuccess"
      type="button"
      class="rounded"
      :params="params"
      :logoutButton="true"
      ><span>Log Out</span></GoogleLogin
    >
  </div>
</template>

<script>
import GoogleLogin from "vue-google-login";
export default {
  name: "Navbar",
  data() {
    return {
      isLogin: false,
      params: {
        client_id:
          "615871655779-q6me4fpgrjhvuuo736maf9rjpgk80a0b.apps.googleusercontent.com",
      },
    };
  },
  methods: {
    changePage: function (pageName) {
      this.$router.push(`/${pageName}`);
    },
    onSuccess(googleUser) {
      localStorage.clear();
      this.$router.push("/");
      let auth2 = googleUser.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log("User signed out.");
      });
    },
  },
  components: {
    GoogleLogin,
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    }
  },
};
</script>

<style></style>

/* */
