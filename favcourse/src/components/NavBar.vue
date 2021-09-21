<template>
  <header
    class="
      md:px-0 md:container
      mx-auto
      flex flex-col
      justify-between
      items-center
      py-8
      px-3
      md:flex-row
    "
  >
    <h1 class="text-3xl font-bold text-black-primary mb-5 md:mb-0">
      FavCourse
    </h1>
    <nav>
      <ul class="flex">
        <li class="mr-3 nav-item">
          <router-link :to="{ name: 'Register' }">Sign In</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Login' }">Sign In</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style></style>
