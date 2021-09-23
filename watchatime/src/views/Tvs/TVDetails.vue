<template>
  <div class="bg-white">
    <base-dialog
      :show="!add"
      :title="`Add Event for ` + tv.title"
      @close="closeDialog"
    >
      <add-event :dataMovie="tv" :type="type" @close="closeDialog"></add-event>
    </base-dialog>
    <div class="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <!-- Product -->
      <div
        class="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16"
      >
        <!-- Product image -->
        <div class="lg:row-end-1 lg:col-span-4">
          <div
            class="aspect-w-4 aspect-h-5 rounded-lg bg-green-100 overflow-hidden  flex
              items-center
              justify-center"
          >
            <img
              v-if="isLoading === false"
              :src="imgUrl"
              :alt="tv.name"
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
                {{ tv.name }}
              </h1>

              <h2 id="information-heading" class="sr-only">
                TV Show information
              </h2>
              <p class="text-sm text-gray-500 mt-2">
                Runtime {{ tv.episode_run_time }} Minutes per episode
              </p>
              <p class="text-sm text-gray-500 mt-2">
                Total Episode : {{ tv.number_of_episodes }} Episode
              </p>
            </div>

            <div>
              <h3 class="sr-only">Reviews</h3>
              <div class="flex items-center justify-center">
                <StarIcon
                  v-for="rating in 10"
                  :key="rating + 'rating'"
                  :class="[
                    tv.vote_average > rating
                      ? 'text-yellow-400'
                      : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0',
                  ]"
                  aria-hidden="true"
                />
              </div>
              <p class="sr-only">{{ tv.vote_average }} out of 10 stars</p>
            </div>
          </div>

          <p class="text-gray-500 mt-6">{{ tv.overview }}</p>

          <div class="mt-10">
            <button
              @click.prevent="openDialog(0, 1)"
              type="button"
              class="w-full bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
            >
              Schedule Watch From Season 1 Episode 1
            </button>
          </div>

          <div class="border-t border-gray-200 mt-10 pt-10">
            <h3 class="text-sm font-medium text-gray-900">Genres</h3>
            <div class="mt-4 prose prose-sm text-gray-500">
              <ul role="list">
                <li v-for="genre in tv.genres" :key="genre.id + tv.id">
                  {{ genre.name }}
                </li>
              </ul>
            </div>
          </div>

          <div class="border-t border-gray-200 mt-10 pt-10">
            <h3 class="text-sm font-medium text-gray-900">Tagline</h3>
            <p class="mt-4 text-sm text-gray-500">
              {{ tv.tagline }}
            </p>
          </div>

          <div class="border-t border-gray-200 mt-10 pt-10">
            <h3 class="text-sm font-medium text-gray-900">Release Status</h3>
            <ul
              role="list"
              class="flex items-center justify-center space-x-6 mt-4"
            >
              <li>Status : {{ tv.status }}</li>
              <li>On :{{ tv.release_date ? tv.release_date : 'Not Yet' }}</li>
            </ul>
          </div>
        </div>

        <div
          class="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4"
        >
          <Disclosure
            v-for="(season, index) in seasonsTv"
            :key="season.id + index"
            v-slot="{ open }"
          >
            <DisclosureButton class="py-2 mx-3">
              <span
                class="bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
                >Season {{ index }}</span
              >

              <!-- Use the `open` slot prop to rotate the icon when the panel is open -->
              <ChevronRightIcon
                :class="[open ? 'transform rotate-90' : '', 'h-7 mx-auto w-7']"
              />
            </DisclosureButton>
            <DisclosurePanel>
              <div
                class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 my-2"
              >
                <!-- Episode grid -->
                <div
                  class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-5 lg:col-span-3 lg:gap-x-8"
                >
                  <button
                    @click.prevent="openDialog(index, item)"
                    v-for="item in season.episode_count"
                    :key="item + season.id"
                    class="w-full bg-green-300 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-green-500"
                  >
                    {{ item }}
                  </button>
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import { StarIcon } from '@heroicons/vue/solid';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronRightIcon } from '@heroicons/vue/solid';
import AddEvent from '../../components/events/AddEvent.vue';

export default {
  name: 'TVDetails',
  data() {
    return {
      add: true,
      type: 'tv',
      isLoading: false,
    };
  },
  computed: {
    ...mapState(['isLoggedIn', 'tv']),
    id() {
      return this.$route.params.id;
    },
    imgUrl() {
      if (!this.tv.poster_path) {
        return 'https://lorempixel.com/500/800/cats/';
      } else {
        return `https://image.tmdb.org/t/p/w500${this.tv.poster_path}`;
      }
    },
    seasonsTv() {
      return this.tv.seasons;
    },
  },
  methods: {
    ...mapActions(['actionFetchTV']),
    openDialog(season, episode) {
      this.type = `tv-${season}-${episode}`;
      this.add = false;
    },
    closeDialog() {
      this.add = true;
    },
  },
  components: {
    StarIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronRightIcon,
    AddEvent,
  },
  async created() {
    if (this.id) {
      this.isLoading = true;
      await this.actionFetchTV(this.id);
      this.isLoading = false;
    } else {
      this.$router.push('/notfound');
    }
  },
};
</script>
