<template>
  <div class="container w-3/4 mx-auto">
    <div class="flex justify-between flex-row flex-wrap">
      <movie-card></movie-card>
      <movie-card></movie-card>
      <movie-card></movie-card>
      <movie-card></movie-card>
      <movie-card></movie-card>
      <movie-card></movie-card>
      <movie-card></movie-card>
      <movie-card></movie-card>
      <movie-card></movie-card>
      <movie-card></movie-card>
      <movie-card></movie-card>
      <movie-card></movie-card>
    </div>
 </div>
</template>

<script>
import movieCard from "../components/movieCard.vue"
export default {
  name: 'movieList',
  components: {
    movieCard
  }
}
</script>

<style>

</style>