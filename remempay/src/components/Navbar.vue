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
    <button v-on:click="logout" type="button" class="rounded">
      <span>Log Out</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isLogin: false
    };
  },
  methods: {
    changePage: function(pageName) {
      this.$router.push(`/${pageName}`);
    },
    logout() {
      localStorage.clear();
      this.$router.push("/");
    }
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    }
  }
};
</script>

<style></style>

/* */
