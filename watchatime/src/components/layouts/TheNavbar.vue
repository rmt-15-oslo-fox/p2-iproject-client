<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8" id="nav">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <router-link to="/">
            <div class="flex-shrink-0 flex items-center">
              <img
                class="h-10 mx-auto w-auto"
                src="@/assets/LogoMain.png"
                alt="Logo"
              /></div
          ></router-link>

          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</router-link
              > -->
              <router-link
                v-if="isLoggedIn === true"
                to="/dashboard"
                class="   text-gray-300 hover:bg-gray-700 hover:text-white
                  px-3 py-2 rounded-md text-sm font-medium
                "
                >Dashboard</router-link
              >
              <router-link
                v-if="isLoggedIn === true"
                to="/movies"
                class="   text-gray-300 hover:bg-gray-700 hover:text-white
                  px-3 py-2 rounded-md text-sm font-medium
                "
                >Movies</router-link
              >
              <router-link
                v-if="isLoggedIn === true"
                to="/tvshows"
                class="   text-gray-300 hover:bg-gray-700 hover:text-white
                  px-3 py-2 rounded-md text-sm font-medium
                "
                >TVs</router-link
              >
              <router-link
                v-if="isLoggedIn === true"
                to="/animes"
                class="   text-gray-300 hover:bg-gray-700 hover:text-white
                  px-3 py-2 rounded-md text-sm font-medium
                "
                >Animes</router-link
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div v-if="isLoggedIn === false">
            <router-link
              to="/register"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium
                "
              >Register</router-link
            >
            <router-link
              to="/login"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium
                "
              >Login</router-link
            >
          </div>

          <a
            v-if="isLoggedIn === true"
            @click.prevent="handleLogout"
            href="#"
            class="text-gray-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton } from '@headlessui/vue';
import { MenuIcon, XIcon } from '@heroicons/vue/outline';
import { mapState, mapActions } from 'vuex';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Movie', href: '/movies', current: false },
  { name: 'TV', href: '/tvshows', current: false },
  { name: 'Animes', href: '/animes', current: false },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
    };
  },
  computed: {
    ...mapState(['isLoggedIn']),
  },
  methods: {
    ...mapActions(['actionLogout']),
    handleLogout() {
      this.actionLogout();
      this.$router.push('/');
    },
  },
};
</script>
<style>
#nav a.router-link-exact-active {
  color: white;
  background-color: gray;
}
</style>
