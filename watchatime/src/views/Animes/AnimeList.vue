<template>
  <div class="bg-white">
    <div>
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200"
        >
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
            All Animes
          </h1>
        </div>

        <section
          v-if="isLoading === false"
          aria-labelledby="movies-heading"
          class="pt-6 pb-24"
        >
          <h2 id="movies-heading" class="sr-only">Movies</h2>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10">
            <!-- Movies grid -->
            <div
              class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4 lg:col-span-3 lg:gap-x-8"
            >
              <anime-card
                v-for="anime in animes"
                :key="anime.id"
                :anime="anime"
              ></anime-card>
            </div>
          </div>
          <movie-pagination
            class="mt-4"
            :pageData="pageData"
            @PageChange="handleChange"
          ></movie-pagination>
        </section>
        <div class="mt-10" v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import MoviePagination from '../../components/movies/MoviePagination.vue';
import AnimeCard from '../../components/animes/AnimeCard.vue';
import { mapActions, mapState } from 'vuex';

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Now Playing', href: '#', current: false },
  { name: 'Upcoming', href: '#', current: false },
];

export default {
  components: {
    AnimeCard,
    MoviePagination,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapState(['animes', 'animesData']),

    sortOptions() {
      return sortOptions;
    },
    pageData() {
      return {
        page: this.animesData.current_page,
        total_pages: this.animesData.last_page,
      };
    },
  },
  methods: {
    ...mapActions(['actionFetchAnimes']),
    async handleChange(id) {
      await this.actionFetchAnimes(id);
      this.$router.push(`/animes/?page=${id}`);
    },
  },
  async created() {
    if (this.$route.query.page) {
      this.isLoading = true;
      await this.actionFetchAnimes(this.$route.query.page);
      this.isLoading = false;
    } else {
      this.isLoading = true;
      await this.actionFetchAnimes();
      this.isLoading = false;
    }
  },
};
</script>
