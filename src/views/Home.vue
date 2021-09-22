<template>
  <div class="home">
    <Nav></Nav>
    <movie-list class="mt-20"></movie-list>
  </div>
</template>

<script>
import Nav from "../components/navbar.vue"
import movieList from "../components/movielist.vue"
export default {
  name: "Home",
  components: {
    Nav,
    movieList,
  },
};
</script>
