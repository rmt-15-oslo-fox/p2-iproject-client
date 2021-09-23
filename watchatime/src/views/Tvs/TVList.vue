<template>
  <div class="bg-white">
    <div>
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200"
        >
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
            All TV Shows
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
              <t-v-card v-for="tv in tvs" :key="tv.id" :tv="tv"></t-v-card>
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
import TVCard from '../../components/tvs/TVCard.vue';
import MoviePagination from '../../components/movies/MoviePagination.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    TVCard,
    MoviePagination,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapState(['tvs', 'tvsData']),
    pageData() {
      return {
        page: this.tvsData.page,
        total_results: this.tvsData.total_results,
        total_pages: this.tvsData.total_pages,
      };
    },
  },
  methods: {
    ...mapActions(['actionFetchTvs']),
    handleChange(id) {
      this.isLoading = true;
      this.actionFetchTvs(id);
      this.isLoading = false;
      this.$router.push(`/tvs/?page=${id}`);
    },
  },
  async created() {
    if (this.$route.query.page) {
      this.isLoading = true;
      await this.actionFetchTvs(this.$route.query.page);
      this.isLoading = false;
    } else {
      this.isLoading = true;
      await this.actionFetchTvs();
      this.isLoading = false;
    }
  },
};
</script>
