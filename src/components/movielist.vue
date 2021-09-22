<template>
  <div class="container w-4/5 mx-auto">
    <div class="flex justify-between flex-row flex-wrap">
      <movie-card v-for="movie in movies" :key="movie.id" :movie="movie"></movie-card>
    </div>
 </div>
</template>

<script>
import movieCard from "../components/movieCard.vue"
export default {
  name: 'movieList',
  components: {
    movieCard
  },
  props: ["movies"],
  created() {
    console.log(this.movies)
  }
}
</script>

<style>

</style>