<template>
  <div class="row m-2" id="home-page">
    <div class="row d-flex justify-content-center">
      <div
        class="card col-4 m-2"
        style="width: 18rem"
        v-for="data in reminder"
        :key="data.id"
      >
        <div class="card-body text-center">
          <h5 class="card-title">{{ data.name }}</h5>
          <h5>{{ data.amount }}</h5>
          <h5>{{ data.paid }}</h5>
          <h5>{{ data.deadline }}</h5>
          <button type="button" class="rounded" v-on:click="pay(data.id)">
            <span>Pay</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reminderCard",
  computed: {
    reminder() {
      return this.$store.state.reminder;
    }
  },
  methods: {
    pay: function(id) {
      this.$store.dispatch("storeReminder", id);
      this.$router.push("/add");
    }
  }
};
</script>

<style></style>
