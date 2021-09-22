<template>
  <router-link :to="urltv" class="group">
    <div
      class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
    >
      <img
        :src="imageUrl"
        :alt="tv.name"
        class="w-full h-full object-center object-cover group-hover:opacity-75"
      />
    </div>
    <h3 class="mt-4 text-sm text-gray-700">
      {{ tv.name }}
    </h3>
    <p class="mt-1 text-lg font-medium text-gray-900">
      {{ tv.vote_average }}
    </p>
  </router-link>
</template>

<script>
export default {
  name: 'TVCard',
  props: ['tv'],
  computed: {
    imageUrl() {
      if (!this.tv.poster_path) {
        return 'https://lorempixel.com/500/800/cats/';
      } else {
        return `https://image.tmdb.org/t/p/w500${this.tv.poster_path}`;
      }
    },
    urltv() {
      return `/tvs/${this.tv.id}`;
    },
  },
};
</script>
