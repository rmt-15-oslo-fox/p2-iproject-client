<template>
  <div class="border border-white bg-green-900 rounded-md w-1/6 mx-2 my-5 cursor-pointer hover:opacity-80">
    <div>
      <img :src="imgUrl" class="rounded-tl-md rounded-tr-md h-80 w-full">
    </div>
    <div class="my-1">
      <p class="text-yellow-400"><i class="fas fa-star"></i> {{rating}} / 10</p>
      <p class="text-center text-white font-semibold">{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'movieCard',
  props: ["movie"],
  computed: {
    imgUrl() {
      if (this.movie.hasOwnProperty('score')) {
        return this.movie.cover_image
      } else {
        return `http://image.tmdb.org/t/p/w342${this.movie.poster_path}`
      }
    },
    title() {
      if (this.movie.hasOwnProperty('score')) {
        return this.movie.titles.en
      } else if (this.movie.hasOwnProperty('adult')) {
        return this.movie.original_title
      } else {
        return this.movie.name
      }
    },
    rating() {
       if (this.movie.hasOwnProperty('score')) {
        const newRate = this.movie.score.toString()
        return newRate.length === 2 ? newRate[0] + "." + newRate[1] : newRate
      } else {
        return this.movie.vote_average
      }
    }
  }
}
</script>

<style>

</style>