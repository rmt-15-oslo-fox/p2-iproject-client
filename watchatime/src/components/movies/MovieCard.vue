<template>
  <router-link :to="urlMovie" class="group">
    <div
      class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
    >
      <img
        :src="imageUrl"
        :alt="movie.title"
        class="w-full h-full object-center object-cover group-hover:opacity-75"
      />
    </div>
    <h3 class="mt-4 text-sm text-gray-700">
      {{ movie.title }}
    </h3>
    <p class="mt-1 text-lg font-medium text-gray-900">
      {{ movie.vote_average }}
    </p>
  </router-link>
</template>

<script>
export default {
  name: 'MovieCard',
  props: ['movie'],
  computed: {
    imageUrl() {
      if (!this.movie.poster_path) {
        return 'https://lorempixel.com/500/800/cats/';
      } else {
        return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
      }
    },
    urlMovie() {
      return `/movies/${this.movie.id}`;
    },
  },
};
</script>
