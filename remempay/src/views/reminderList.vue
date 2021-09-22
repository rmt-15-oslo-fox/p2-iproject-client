<template>
  <div>
    <Navbar></Navbar><br /><br />
    <h1>Reminder List</h1>
    <div id="home-page">
      <div class="row flex justify-content-center">
        <div class="card col-4 m-2" v-for="data in reminder" :key="data.id">
          <div class="card-body text-center">
            <h5>Payment for:</h5>
            <h5 class="card-title">{{ data.User.name }}</h5>
            <h5>Payment amount</h5>
            <h5>{{ data.amount }}</h5>
            <h5>Paid Amount:</h5>
            <h5>{{ data.paid }}</h5>
            <h5>Payment deadline:</h5>
            <h5>{{ data.deadline }}</h5>
            <button type="button" class="rounded" v-on:click="pay(data.id)">
              <span>Pay</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Reminder",
  components: {
    Navbar
  },
  computed: {
    reminder() {
      return this.$store.state.reminder;
    }
  },
  methods: {
    pay: function(id) {
      this.$store.dispatch("storeReminder", id);
      this.$router.push("/pay");
    }
  },
  created() {
    this.$store.dispatch("fetchReminder");
  }
};
</script>

<style></style>
