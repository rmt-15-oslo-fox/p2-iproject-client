<template>
  <div>
    <Navbar></Navbar><br /><br />
    <ReminderCard></ReminderCard>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ReminderCard from "../components/reminderCard.vue";
export default {
  name: "Reminder",
  components: {
    Navbar,
    ReminderCard
  }
};
</script>

<style></style>
