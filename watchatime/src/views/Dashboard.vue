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
                <h2 class="sr-only" id="profile-overview-title">
                  Profile Overview
                </h2>
                <div class="bg-white p-6">
                  <div class="sm:flex sm:items-center sm:justify-between">
                    <div class="sm:flex sm:space-x-5">
                      <div class="flex-shrink-0">
                        <img
                          class="mx-auto h-20 w-20 rounded-full"
                          :src="user.imageUrl"
                          alt=""
                        />
                      </div>
                      <div
                        class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left"
                      >
                        <p class="text-sm font-medium text-gray-600">
                          Today Schedule
                        </p>
                        <p class="text-xl font-bold text-gray-900 sm:text-2xl">
                          Schedule Name
                        </p>
                        <p class="text-sm font-medium text-gray-600">
                          Schedule Time
                        </p>
                      </div>
                    </div>
                    <div class="mt-5 flex justify-center sm:mt-0">
                      <a
                        href="#"
                        class="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        View Schedule
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x"
                >
                  <div
                    v-for="stat in stats"
                    :key="stat.label"
                    class="px-6 py-5 text-sm font-medium text-center"
                  >
                    <span class="text-gray-900">{{ stat.value }}</span>
                    {{ ' ' }}
                    <span class="text-gray-600">{{ stat.label }}</span>
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
                    'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500',
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
            <section aria-labelledby="announcements-title">
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <div class="p-6">
                  <h2
                    class="text-base font-medium text-gray-900"
                    id="trending-title"
                  >
                    On Theatre
                  </h2>
                  <div class="flow-root mt-6">
                    <ul class="-my-5 divide-y divide-gray-200">
                      <li
                        v-for="announcement in announcements"
                        :key="announcement.id"
                        class="py-5"
                      >
                        <div
                          class="relative focus-within:ring-2 focus-within:ring-cyan-500"
                        >
                          <h3 class="text-sm font-semibold text-gray-800">
                            <a
                              :href="announcement.href"
                              class="hover:underline focus:outline-none"
                            >
                              <!-- Extend touch target to entire panel -->
                              <span
                                class="absolute inset-0"
                                aria-hidden="true"
                              />
                              {{ announcement.title }}
                            </a>
                          </h3>
                          <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                            {{ announcement.preview }}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-6">
                    <a
                      href="#"
                      class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <!-- Recent Hires -->
            <section aria-labelledby="recent-hires-title">
              <div class="rounded-lg bg-white overflow-hidden shadow">
                <div class="p-6">
                  <h2
                    class="text-base font-medium text-gray-900"
                    id="recent-hires-title"
                  >
                    Latest Schedule
                  </h2>
                  <div class="flow-root mt-6">
                    <ul class="-my-5 divide-y divide-gray-200">
                      <li
                        v-for="person in recentHires"
                        :key="person.handle"
                        class="py-4"
                      >
                        <div class="flex items-center space-x-4">
                          <div class="flex-shrink-0">
                            <img
                              class="h-8 w-8 rounded-full"
                              :src="person.imageUrl"
                              alt=""
                            />
                          </div>
                          <div class="flex-1 min-w-0">
                            <p
                              class="text-sm font-medium text-gray-900 truncate"
                            >
                              {{ person.name }}
                            </p>
                            <p class="text-sm text-gray-500 truncate">
                              {{ '@' + person.handle }}
                            </p>
                          </div>
                          <div>
                            <a
                              :href="person.href"
                              class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="mt-6">
                    <a
                      href="#"
                      class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View all
                    </a>
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
  BadgeCheckIcon,
  BellIcon,
  DesktopComputerIcon,
  ClockIcon,
  MenuIcon,
  SparklesIcon,
  XIcon,
  TrendingUpIcon,
} from '@heroicons/vue/outline';
import { SearchIcon } from '@heroicons/vue/solid';

const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  role: 'Human Resources Manager',
  imageUrl:
    'https://images.unsplash.com/photo-1535802158478-342f4f24b2f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
};

const stats = [
  { label: 'Schedule Planned', value: 12 },
  { label: 'Schedule Completed', value: 4 },
  { label: 'Schedule On-Hold', value: 2 },
];
const actions = [
  {
    icon: ClockIcon,
    name: 'Schedule',
    href: '/events',
    iconForeground: 'text-green-700',
    iconBackground: 'bg-green-50',
  },
  {
    icon: BadgeCheckIcon,
    name: 'Completed',
    href: '/completed',
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
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
  {
    icon: SearchIcon,
    name: 'Search',
    href: '/search',
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
];
const recentHires = [
  {
    name: 'Schedule 1',
    handle: 'date',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    name: 'Schedule 2',
    handle: 'date',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    name: 'Schedule 3',
    handle: 'date',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
];
const announcements = [
  {
    id: 1,
    title: 'Movie 1',
    href: '#',
    preview: 'Movie summary',
  },
  {
    id: 2,
    title: 'Movie 2',
    href: '#',
    preview: 'Movie summary',
  },
  {
    id: 3,
    title: 'Movie 3',
    href: '#',
    preview: 'Movie summary',
  },
];

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
  },
  setup() {
    return {
      user,
      stats,
      actions,
      recentHires,
      announcements,
    };
  },
};
</script>
