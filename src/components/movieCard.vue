<template>
  <div class="border border-white bg-green-900 rounded-md flex flex-col w-1/6 mx-2 my-5">
    <div>
      <img :src="imgUrl" class="rounded-tl-md rounded-tr-md">
    </div>
    <div class="mb-1">
      <p class="text-yellow-400"><i class="fas fa-star"></i> {{movie.vote_average}} / 10</p>
      <p class="text-center text-white font-semibold">{{movie.original_title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'movieCard',
  props: ["movie"],
  computed: {
    imgUrl() {
      return `http://image.tmdb.org/t/p/w342${this.movie.poster_path}`
    }
  }
}
</script>

<style>

</style>