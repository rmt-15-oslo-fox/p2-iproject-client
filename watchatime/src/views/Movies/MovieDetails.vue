<template>
  <div class="bg-white">
    <div class="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <!-- Product -->
      <div
        class="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16"
      >
        <!-- Product image -->
        <div class="lg:row-end-1 lg:col-span-4">
          <div
            class="aspect-w-4 aspect-h-3 rounded-lg bg-green-100 overflow-hidden  flex
              items-center
              justify-center"
          >
            <img
              :src="imgUrl"
              :alt="movie.title"
              class="object-center object-cover flex justify-center"
            />
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

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            <button
              type="button"
              class="w-full bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
            >
              Schedule Watch for {{ movie.runtime }} min
            </button>
            <button
              type="button"
              class="w-full bg-green-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-green-700 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
            >
              See Full Details
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
                On :{{ movie.release_date ? movie.release_date : 'Not Yet' }}
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
import { mapActions, mapState } from 'vuex';
import { StarIcon } from '@heroicons/vue/solid';

const movie = {
  adult: false,
  backdrop_path: '/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
  belongs_to_collection: null,
  budget: 63000000,
  genres: [
    {
      id: 18,
      name: 'Drama',
    },
  ],
  homepage: '',
  id: 550,
  imdb_id: 'tt0137523',
  original_language: 'en',
  original_title: 'Fight Club',
  overview:
    'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
  popularity: 0.5,
  poster_path: null,
  production_companies: [
    {
      id: 508,
      logo_path: '/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png',
      name: 'Regency Enterprises',
      origin_country: 'US',
    },
    {
      id: 711,
      logo_path: null,
      name: 'Fox 2000 Pictures',
      origin_country: '',
    },
    {
      id: 20555,
      logo_path: null,
      name: 'Taurus Film',
      origin_country: '',
    },
    {
      id: 54050,
      logo_path: null,
      name: 'Linson Films',
      origin_country: '',
    },
    {
      id: 54051,
      logo_path: null,
      name: 'Atman Entertainment',
      origin_country: '',
    },
    {
      id: 54052,
      logo_path: null,
      name: 'Knickerbocker Films',
      origin_country: '',
    },
    {
      id: 25,
      logo_path: '/qZCc1lty5FzX30aOCVRBLzaVmcp.png',
      name: '20th Century Fox',
      origin_country: 'US',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  release_date: '1999-10-12',
  revenue: 100853753,
  runtime: 139,
  spoken_languages: [
    {
      iso_639_1: 'en',
      name: 'English',
    },
  ],
  status: 'Released',
  tagline:
    "How much can you know about yourself if you've never been in a fight?",
  title: 'Fight Club',
  video: false,
  vote_average: 7.8,
  vote_count: 3439,
};

export default {
  name: 'MovieDetail',
  computed: {
    ...mapState(['movie', 'isLoggedIn', 'Qr', 'bookmarks']),
    id() {
      return this.$route.params.id;
    },
    movie() {
      return movie;
    },
    imgUrl() {
      if (!movie.poster_path) {
        return 'https://lorempixel.com/500/800/cats/';
      } else {
        return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      }
    },
  },
  methods: {
    ...mapActions(['actionFetchMovie', 'actionAddBookmark']),
  },
  components: {
    StarIcon,
  },
  async created() {
    try {
      if (this.id) {
        await this.actionFetchMovie(this.id);
      } else {
        this.$router.push('/notfound');
      }
    } catch (err) {
      // this.$toast.error('fetching Failed');
      console.log(err);
    }
  },
};
</script>
