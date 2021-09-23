<template>
  <div class="bg-white">
    <base-dialog
      :show="!add"
      :title="`Add Event for ` + movie.title"
      @close="closeDialog"
    >
      <add-event
        :dataMovie="movie"
        :type="type"
        @close="closeDialog"
      ></add-event>
    </base-dialog>
    <div class="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <!-- Product -->
      <div
        class="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16"
      >
        <!-- Product image -->
        <div class="lg:row-end-1 lg:col-span-4">
          <div
            class="aspect-w-4 aspect-h-5  rounded-lg bg-green-100 overflow-hidden  flex
              items-center
              justify-center"
          >
            <img
              v-if="isLoading === false"
              :src="imgUrl"
              :alt="movie.title"
              class="object-center object-cover flex justify-center"
            />
            <div class="mt-10" v-if="isLoading">
              <base-spinner></base-spinner>
            </div>
          </div>
        </div>

        <!-- Product details -->
        <div
          class="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3"
        >
          <div class="flex flex-col-reverse">
            <div class="mt-4">
              <h1
                class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
              >
                {{ movie.title }}
              </h1>

              <h2 id="information-heading" class="sr-only">
                Movie information
              </h2>
              <p class="text-sm text-gray-500 mt-2">
                Runtime {{ movie.runtime }} Minutes
              </p>
            </div>

            <div>
              <h3 class="sr-only">Reviews</h3>
              <div class="flex items-center justify-center">
                <StarIcon
                  v-for="rating in 10"
                  :key="rating + 'rating'"
                  :class="[
                    movie.vote_average > rating
                      ? 'text-yellow-400'
                      : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0',
                  ]"
                  aria-hidden="true"
                />
              </div>
              <p class="sr-only">{{ movie.vote_average }} out of 10 stars</p>
            </div>
          </div>

          <p class="text-gray-500 mt-6">{{ movie.overview }}</p>

          <div class="mt-10">
            <button
              @click.prevent="openDialog"
              type="button"
              class="w-full bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
            >
              Schedule Watch for {{ movie.runtime }} min
            </button>
          </div>

          <div class="border-t border-gray-200 mt-10 pt-10">
            <h3 class="text-sm font-medium text-gray-900">Genres</h3>
            <div class="mt-4 prose prose-sm text-gray-500">
              <ul role="list">
                <li v-for="genre in movie.genres" :key="genre.id + movie.id">
                  {{ genre.name }}
                </li>
              </ul>
            </div>
          </div>

          <div class="border-t border-gray-200 mt-10 pt-10">
            <h3 class="text-sm font-medium text-gray-900">Tagline</h3>
            <p class="mt-4 text-sm text-gray-500">
              {{ movie.tagline }}
            </p>
          </div>

          <div class="border-t border-gray-200 mt-10 pt-10">
            <h3 class="text-sm font-medium text-gray-900">Release Status</h3>
            <ul
              role="list"
              class="flex items-center justify-center space-x-6 mt-4"
            >
              <li>Status : {{ movie.status }}</li>
              <li>
                {{ movie.release_date ? movie.release_date : '' }}
              </li>
            </ul>
          </div>
        </div>

        <div
          class="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { StarIcon } from '@heroicons/vue/solid';
import AddEvent from '../../components/events/AddEvent.vue';

export default {
  name: 'MovieDetail',
  data() {
    return {
      add: true,
      type: 'movie',
      isLoading: false,
    };
  },
  computed: {
    ...mapState(['movie', 'isLoggedIn']),
    id() {
      return this.$route.params.id;
    },
    imgUrl() {
      if (!this.movie.poster_path) {
        return 'https://lorempixel.com/500/800/cats/';
      } else {
        return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
      }
    },
  },
  methods: {
    ...mapActions(['actionFetchMovie', 'actionAddBookmark']),
    ...mapMutations(['SET_ERROR']),
    openDialog() {
      this.add = false;
    },
    closeDialog() {
      this.add = true;
    },
  },
  components: {
    StarIcon,
    AddEvent,
  },
  async created() {
    try {
      if (this.id) {
        this.isLoading = true;
        await this.actionFetchMovie(this.id);
        this.isLoading = false;
      } else {
        this.$router.push('/notfound');
      }
    } catch (err) {
      this.SET_ERROR(err);
    }
  },
};
</script>
