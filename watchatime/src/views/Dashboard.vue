<template>
  <div class="relative min-h-screen bg-green-50">
    <main class="mt-2 pt-10 pb-8">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="sr-only">Profile</h1>
        <!-- Main 3 column grid -->
        <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4 lg:col-span-2">
            <!-- Welcome panel -->
            <section aria-labelledby="profile-overview-title">
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <div
                  v-if="!today || today.length == 0"
                  class="rounded-lg bg-green-100 mx-2 my-2 h-12 overflow-hidden shadow"
                >
                  <h2
                    id="profile-overview-title"
                    class="justify-center text-lg mt-2 flex items-center"
                  >
                    No Schedule Today
                  </h2>
                </div>

                <div v-else class="bg-white p-6">
                  <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="sm:flex sm:space-x-5">
                      <div class="flex-shrink-0">
                        <img
                          class="mx-auto h-20 w-20 rounded-full"
                          src="https://images.unsplash.com/photo-1535802158478-342f4f24b2f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                          alt="placeholder"
                        />
                      </div>
                      <div
                        class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left"
                      >
                        <p class="text-sm font-medium text-gray-600">
                          Today Schedule
                        </p>
                        <p class="text-xl font-bold text-gray-900 sm:text-2xl">
                          {{ today.summary }}
                        </p>
                        <p class="text-sm font-medium text-gray-600">
                          {{ today.start.split('T')[0] }}
                          {{ today.start.split('T')[1].split('.')[0] }}
                        </p>
                      </div>
                    </div>
                    <div class="mt-5 flex justify-center sm:mt-0">
                      <button
                        v-if="today.status && today.status !== `completed`"
                        @click.prevent="completeThis(today.id)"
                        class="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Complete
                      </button>
                      <button
                        v-else
                        disabled
                        class="flex justify-center items-center px-4 py-2 border border-green-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-green-400"
                      >
                        Completed
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x"
                >
                  <div class="px-6 py-5 text-sm font-medium text-center">
                    <span class="text-gray-900">{{ active }}</span>
                    {{ ' ' }}
                    <span class="text-gray-600">Schedule Planned</span>
                  </div>
                  <div class="px-6 py-5 text-sm font-medium text-center">
                    <span class="text-gray-900">{{ completed }}</span>
                    {{ ' ' }}
                    <span class="text-gray-600">Schedule Completed</span>
                  </div>
                  <div class="px-6 py-5 text-sm font-medium text-center">
                    <span class="text-gray-900">{{ onHold }}</span>
                    {{ ' ' }}
                    <span class="text-gray-600">Schedule On-Hold</span>
                  </div>
                </div>
              </div>
            </section>

            <!-- Actions panel -->
            <section aria-labelledby="quick-links-title">
              <div
                class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px"
              >
                <h2 class="sr-only" id="quick-links-title">Quick links</h2>
                <div
                  v-for="(action, actionIdx) in actions"
                  :key="action.name"
                  :class="[
                    actionIdx === 0
                      ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                      : '',
                    actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                    actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                    actionIdx === actions.length - 1
                      ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                      : '',
                    'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500 flex justify-between',
                  ]"
                >
                  <div>
                    <span
                      :class="[
                        action.iconBackground,
                        action.iconForeground,
                        'rounded-lg inline-flex p-3 ring-4 ring-white',
                      ]"
                    >
                      <component
                        :is="action.icon"
                        class="h-6 w-6"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div class="mt-8">
                    <h3 class="text-lg font-medium">
                      <router-link :to="action.href" class="focus:outline-none">
                        <!-- Extend touch target to entire panel -->
                        <span class="absolute inset-0" aria-hidden="true" />
                        {{ action.name }}
                      </router-link>
                    </h3>
                    <p class="mt-2 text-sm text-gray-500">
                      Summary
                    </p>
                  </div>
                  <span
                    class="pointer-events-none absolute top-6 right-6 text-green-300 group-hover:text-green-400"
                    aria-hidden="true"
                  >
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </section>
          </div>

          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4">
            <!-- Announcements -->
            <section aria-labelledby="announcements-title py-5">
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <DatePicker v-model="date" :attributes="attrs" />
              </div>
            </section>

            <!-- Recent Schedule -->
            <section aria-labelledby="recent-hires-title">
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <div class="p-6">
                  <h2
                    class="text-base font-medium text-gray-900"
                    id="recent-hires-title"
                  >
                    Latest Schedule
                  </h2>
                  <div class="flow-root mt-6 ">
                    <ul class="-my-5 divide-y divide-gray-200">
                      <li
                        v-for="event in events.sort((a, b) => a.id - b.id)"
                        :key="event.summary + event.id"
                        class="py-4"
                      >
                        <div
                          class="flex items-center justify-between space-x-4"
                        >
                          <div class="flex-1 min-w-0">
                            <p
                              class="text-sm font-medium text-gray-900 truncate"
                            >
                              {{ event.summary }}
                            </p>
                            <p class="text-sm text-gray-500 truncate">
                              {{ '@' + event.start }}
                            </p>
                          </div>
                          <div>
                            <p class="text-sm text-gray-500 truncate">
                              {{ event.status }}
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-6">
                    <router-link
                      to="/events"
                      class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View all
                    </router-link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { Calendar, DatePicker } from 'v-calendar';

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import {
  FilmIcon,
  BellIcon,
  DesktopComputerIcon,
  ClockIcon,
  MenuIcon,
  SparklesIcon,
  XIcon,
  TrendingUpIcon,
} from '@heroicons/vue/outline';
import { SearchIcon } from '@heroicons/vue/solid';

const actions = [
  {
    icon: ClockIcon,
    name: 'Schedule',
    href: '/events',
    iconForeground: 'text-green-700',
    iconBackground: 'bg-green-50',
  },
  {
    icon: FilmIcon,
    name: 'Movies',
    href: '/movies',
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
  {
    icon: DesktopComputerIcon,
    name: 'Tv Shows',
    href: '/tvshows',
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    icon: SparklesIcon,
    name: 'Animes',
    href: '/animes',
    iconForeground: 'text-gray-700',
    iconBackground: 'bg-gray-50',
  },
];

const isToday = (someDate) => {
  var inputDate = new Date(someDate);

  // Get today's date
  var todaysDate = new Date();

  // call setHours to take the time out of the comparison
  if (inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
};

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    MenuIcon,
    SearchIcon,
    XIcon,
    TrendingUpIcon,
    Calendar,
    DatePicker,
  },
  setup() {
    return {
      actions,
    };
  },
  data() {
    return {
      stats: [
        { label: 'Schedule Planned', value: this.active || 0 },
        { label: 'Schedule Completed', value: this.completed || 0 },
        { label: 'Schedule On-Hold', value: this.onHold || 0 },
      ],
    };
  },
  computed: {
    ...mapState(['events']),
    completed() {
      return this.events.filter((el) => el.status === 'completed').length;
    },
    active() {
      return this.events.filter((el) => el.status === 'active').length;
    },
    onHold() {
      return this.events.filter((el) => el.status === 'on-hold').length;
    },
    today() {
      return this.events.find((el) => isToday(el.start));
    },
    date() {
      return this.events.map((el) => el.start);
    },
    attrs() {
      return this.events.map((el) => {
        return {
          highlight: {
            color: 'green',
            fillMode: 'light',
          },
          dates: new Date(el.start),
        };
      });
    },
  },
  methods: {
    ...mapActions(['actionFetchEvents', 'actionPatchEvents']),
    async completeThis(id) {
      await this.actionPatchEvents(id);
      await this.actionFetchEvents();
    },
  },
  async created() {
    await this.actionFetchEvents();
  },
};
</script>
