<template>
  <div class="col-lg-3 col-md-6">
    <div class="card-group shadow-lg">
      <div class="card-body">
        <div class="text-center">
          <img
            :src="userSparring.teamLogo"
            alt="team logo"
            class="img-fluid rounded-circle w-50 mb-3"
          />
        </div>
        <div class="category mb-3">{{ userSparring.Category.name }}</div>
        <h3 class="mb-3">{{ userSparring.teamName }}</h3>
        <p>{{ userSparring.schedule }}</p>
        <p>{{ userSparring.location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySparringCard",
  props: ["userSparring"],
};
</script>

<style>
</style>