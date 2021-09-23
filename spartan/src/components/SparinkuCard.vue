<template>
  <div class="card-group col-lg-4 col-sm mb-4 sparingku-detail">
    <div class="card shadow bg-body rounded sparingku-card" style="18rem">
      <img :src="userSparring.teamLogo" class="card-img-top" alt="teamLogo" />
      <div class="card-body">
        <div class="category mb-3">{{ userSparring.Category.name }}</div>
        <h5 class="card-title">{{ userSparring.teamName }}</h5>
        <p class="card-text">{{ userSparring.schedule }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SparingkuCard",
  props: ["userSparring"],
};
</script>

<style>
.sparingku-detail {
  color: #171717;
}

.sparingku-detail:hover {
  text-decoration: none;
  color: #171717;
}

.sparingku-card {
  cursor: pointer;
}

.sparingku-card .card-body:hover {
  background-color: #f4f7fd;
}

.sparingku-card .card-body .category {
  background-color: #f6aa1c;
  display: inline-block;
  padding: 6px;
  color: #220901;
  border-radius: 4px;
  width: 130px;
  text-align: center;
}

.sparingku-card img {
  height: 300px;
}
</style>