<template>
  <div class="bg-white">
    <base-dialog
      :show="!add"
      :title="`Add Event for ` + anime.titles.en"
      @close="closeDialog"
    >
      <add-event :dataMovie="anime" :type="type"></add-event>
    </base-dialog>
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
              :alt="anime.titles.en"
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
                {{ anime.titles.en }} |
                <span class="inline-block">{{ anime.titles.jp }}</span>
              </h1>

              <h2 id="information-heading" class="sr-only">
                Anime information
              </h2>
              <p class="text-sm text-gray-500 mt-2">
                Runtime {{ anime.episode_duration }} Minutes
              </p>
            </div>

            <div>
              <h3 class="sr-only">Reviews</h3>
              <div class="flex items-center justify-center">
                <StarIcon
                  v-for="rating in 10"
                  :key="rating + 'rating'"
                  :class="[
                    anime.score / 10 > rating
                      ? 'text-yellow-400'
                      : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0',
                  ]"
                  aria-hidden="true"
                />
              </div>
              <p class="sr-only">{{ anime.score }} out of 100</p>
            </div>
          </div>

          <p class="text-gray-500 mt-6">{{ anime.descriptions.en }}</p>

          <div class="mt-10">
            <button
              @click.prevent="openDialog"
              type="button"
              class="w-full bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
            >
              Schedule Watch for {{ anime.episode_duration }} min /episode
            </button>
          </div>

          <div class="border-t border-gray-200 mt-10 pt-10">
            <h3 class="text-sm font-medium text-gray-900">Genres</h3>
            <div class="mt-4 prose prose-sm text-gray-500">
              <ul role="list" class="grid grid-cols-1 lg:grid-cols-3">
                <li v-for="genre in anime.genres" :key="genre + anime.id">
                  {{ genre }}
                </li>
              </ul>
            </div>
          </div>

          <div class="border-t border-gray-200 mt-10 pt-10">
            <h3 class="text-sm font-medium text-gray-900">Format</h3>
            <p class="mt-4 text-sm text-gray-500">
              {{ animeFormat }}
            </p>
          </div>

          <div class="border-t border-gray-200 mt-10 pt-10">
            <h3 class="text-sm font-medium text-gray-900">Release Status</h3>
            <ul
              role="list"
              class="flex items-center justify-center space-x-6 mt-4"
            >
              <li>Status : {{ animeStatus }}</li>
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
import AddEvent from '../../components/events/AddEvent.vue';

const anime = {
  anilist_id: 21,
  mal_id: 21,
  format: 0,
  status: 1,
  titles: {
    en: 'One Piece',
    jp: 'ワンピース',
    it: 'One Piece',
  },
  descriptions: {
    en: 'Gold Roger was known as the Pirate Ki...',
    it: 'Monkey D. Luffy (Nel doppiaggio itali...',
  },
  start_date: '1999-10-20T00:00:00Z',
  end_date: '1970-01-01T00:00:00Z',
  season_period: 3,
  season_year: 1999,
  episodes_count: 981,
  episode_duration: 24,
  cover_image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cov...',
  cover_color: '#e4a15d',
  banner_image: 'https://s4.anilist.co/file/anilistcdn/media/anime/ba...',
  genres: [
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Fantasy',
    'Pirates',
    'Shounen',
    'Ensemble Cast',
    'Super Power',
    'Ships',
    'Male Protagonist',
    'Conspiracy',
    'Tragedy',
    'Crime',
    'Time Skip',
    'Politics',
    "Boys' Love",
    'War',
    'Shapeshifting',
    'Swordplay',
    'Lost Civilization',
    'Guns',
    'Animals',
    'Anachronism',
    'Primarily Adult Cast',
    'Cyborg',
    'Skeleton',
    'Espionage',
    'Primarily Male Cast',
    'Gender Bending',
    'Ninja',
    'Henshin',
    'Real Robot',
    'Anti-Hero',
    'Mermaid',
    'Battle Royale',
    'Assassins',
    'Tanned Skin',
    'Zombie',
    'Time Manipulation',
    'Kuudere',
  ],
  score: 86,
  id: 11,
};

export default {
  name: 'AnimeDetail',
  data() {
    return {
      add: true,
      type: 'anime',
    };
  },
  computed: {
    ...mapState(['isLoggedIn']),
    id() {
      return this.$route.params.id;
    },
    anime() {
      return anime;
    },
    animeStatus() {
      let status = '';
      switch (this.anime.status) {
        case 0:
          status = 'Finished';
          break;
        case 1:
          status = 'On-Air';
          break;
        case 2:
          status = 'Not Yet Release';
          break;
        case 3:
          status = 'Cancelled';
          break;
      }
      return status;
    },
    animeFormat() {
      let format = '';
      switch (this.anime.format) {
        case 0:
          format = 'TV';
          break;
        case 1:
          format = 'TV Short';
          break;
        case 2:
          format = 'Movie';
          break;
        case 3:
          format = 'Special';
          break;
        case 4:
          format = 'OVA';
          break;
        case 5:
          format = 'ONA';
          break;
        case 6:
          format = 'Music';
          break;
      }
      return format;
    },
    imgUrl() {
      if (!anime.cover_image) {
        return 'https://lorempixel.com/500/800/cats/';
      } else {
        return this.anime.cover_image;
      }
    },
  },
  methods: {
    ...mapActions(['actionFetchMovie', 'actionAddBookmark']),
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
