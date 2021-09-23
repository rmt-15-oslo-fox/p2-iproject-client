<template>
  <div class="bg-white">
    <div>
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200"
        >
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
            All Movies
          </h1>
        </div>

        <section
          v-if="!isLoading"
          aria-labelledby="movies-heading"
          class="pt-6 pb-24"
        >
          <h2 id="movies-heading" class="sr-only">Movies</h2>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10">
            <!-- Movies grid -->
            <div
              class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4 lg:col-span-3 lg:gap-x-8"
            >
              <movie-card
                v-for="movie in movies"
                :key="movie.id"
                :movie="movie"
              ></movie-card>
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
import MovieCard from '../../components/movies/MovieCard.vue';
import MoviePagination from '../../components/movies/MoviePagination.vue';
import { mapActions, mapState } from 'vuex';

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Now Playing', href: '#', current: false },
  { name: 'Upcoming', href: '#', current: false },
];

export default {
  components: {
    MovieCard,
    MoviePagination,
  },
  setup() {
    return {
      sortOptions,
    };
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapState(['movies', 'moviesData']),
    pageData() {
      return {
        page: this.moviesData.page,
        total_results: this.moviesData.total_results,
        total_pages: this.moviesData.total_pages,
      };
    },
  },
  methods: {
    ...mapActions(['actionFetchMovies']),
    async handleChange(id) {
      this.isLoading = true;
      await this.actionFetchMovies(id);
      this.isLoading = false;
      this.$router.push(`/movies/?page=${id}`);
    },
  },
  async created() {
    if (this.$route.query.page) {
      this.isLoading = true;
      await this.actionFetchMovies(this.$route.query.page);
      this.isLoading = false;
    } else {
      this.isLoading = true;

      await this.actionFetchMovies();
      this.isLoading = false;
    }
  },
};
</script>
