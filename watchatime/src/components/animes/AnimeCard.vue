<template>
  <router-link :to="urlAnime" class="group">
    <div
      class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
    >
      <img
        :src="imageUrl"
        :alt="anime.titles.en"
        class="w-full h-full object-center object-cover group-hover:opacity-75"
      />
    </div>
    <h3 class="mt-4 text-sm text-gray-700">
      {{ anime.titles.en ? anime.titles.en : 'No English Title' }}
    </h3>
    <h3 class="mt-4 text-sm text-gray-700">
      {{ anime.titles.jp ? anime.titles.jp : 'No English Title' }}
    </h3>
    <p class="mt-1 text-lg font-medium text-gray-900">
      {{ anime.score }}
    </p>
  </router-link>
</template>

<script>
export default {
  name: 'AnimeCard',
  props: ['anime'],
  computed: {
    imageUrl() {
      if (!this.anime.cover_image) {
        return 'https://lorempixel.com/500/800/cats/';
      } else {
        return this.anime.cover_image;
      }
    },
    urlAnime() {
      return `/animes/${this.anime.id}`;
    },
  },
};
</script>
