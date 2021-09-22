<template>
  <div class="bg-white">
    <div class="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <!-- Movie -->
      <div
        class="
          lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10
          xl:gap-x-16
        "
      >
        <!-- Movie image -->
        <div class="lg:row-end-1 lg:col-span-4">
          <div
            class="
              rounded-lg
              bg-green-100
              flex
              items-center
              justify-center
              overflow-hidden
              py-5
            "
          >
            <img
              :src="movie.imgUrl"
              :alt="movie.title"
              class="object-center object-cover"
            />
          </div>
        </div>

        <!-- Product details -->
        <div
          class="
            max-w-2xl
            mx-auto
            mt-14
            sm:mt-16
            lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3
          "
        >
          <div class="flex flex-col-reverse">
            <div class="mt-4">
              <h1
                class="
                  text-2xl
                  font-extrabold
                  tracking-tight
                  text-gray-900
                  sm:text-3xl
                "
              >
                {{ movie.title }}
              </h1>

              <h2 id="information-heading" class="sr-only">
                {{ movie.synopsis }}
              </h2>
              <p class="text-sm text-gray-500 mt-2">
                <!-- {{ genreName }} -->
              </p>
            </div>

            <div>
              <h3 class="sr-only">Rating</h3>
              <div class="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  v-for="rating in 10"
                  :key="rating + 'rating'"
                  :class="[
                    rating <= movie.rating
                      ? 'text-yellow-400'
                      : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0',
                  ]"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <p class="sr-only">{{ movie.rating }} out of 10 stars</p>
            </div>
          </div>

          <p class="text-gray-500 mt-6">{{ movie.synopsis }}</p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            <a
              :href="movie.trailerUrl"
              target="_blank"
              class="
                w-full
                bg-red-600
                border border-transparent
                rounded-md
                py-3
                px-8
                flex
                items-center
                justify-center
                text-base
                font-medium
                text-black
                hover:bg-red-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-gray-50
                focus:ring-red-500
              "
            >
              See Trailer on
              <span
                ><img
                  class="w-7 ml-3"
                  src="/youtube-logotype.svg"
                  alt=""
                  srcset=""
              /></span>
            </a>
            <button
              type="button"
              class="
                w-full
                bg-green-100
                border border-transparent
                rounded-md
                py-3
                px-8
                flex
                items-center
                justify-center
                text-base
                font-medium
                text-green-700
                hover:bg-green-100
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-gray-50
                focus:ring-green-500
              "
              @click.prevent="handleAddBookmark"
            >
              Bookmark
            </button>
          </div>

          <div class="border-t border-gray-200 mt-10 pt-10">
            <h3 class="text-sm font-medium text-gray-900">Share with QR</h3>
            <img :src="Qr" alt="" class="ml-3 sm:ml-8 mt-4" srcset="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'MovieDetail',
  computed: {
    ...mapState(['movie', 'isLoggedIn', 'Qr', 'bookmarks']),
    id() {
      return this.$route.params.id;
    },
    genreName() {
      return this.movie.Genre.name;
    },
  },
  methods: {
    ...mapActions([
      'actionFetchMovie',
      'actionAddBookmark',
      'ActionGetQrCode',
      'actionFetchBookmarks',
    ]),
    async handleAddBookmark() {
      try {
        let findExistingBookmark = this.bookmarks.find(
          (el) => el.MovieId === this.id
        );
        if (!this.isLoggedIn) {
          this.$router.push('/login');
        } else if (findExistingBookmark) {
          this.$toast.error('You Already Bookmark This Movie');
        } else {
          this.$Progress.start();
          await this.actionAddBookmark(this.id);
          await this.actionFetchBookmarks();
          this.$toast.success('Bookmark Added');
          this.$Progress.finish();
        }
      } catch (err) {
        this.$Progress.fail();
        this.$toast.error('Bookmark Add Failed');
      }
    },
  },
  async created() {
    try {
      if (this.id) {
        this.$Progress.start();
        await this.actionFetchMovie(this.id);
        await this.ActionGetQrCode(window.location.origin + this.$route.path);
        this.$Progress.finish();
      }
    } catch (err) {
      this.$Progress.fail();
      this.$toast.error('fetching Failed');
    }
  },
};
</script>
