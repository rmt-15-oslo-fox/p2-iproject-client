<template>
  <div class="bg-white">
    <div class="bg-white pb-8 sm:pb-12 lg:pb-12">
      <div class="pt-2 overflow-hidden sm:pt-6 lg:relative lg:py-20">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24"
        >
          <div>
            <div class="flex justify-center items-center">
              <img class="h-20" src="@/assets/LogoMain.png" alt="Workflow" />
            </div>
            <div class="mt-5">
              <div>
                <a href="#" class="inline-flex space-x-4">
                  <span
                    class="rounded bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-green-600 tracking-wide uppercase"
                  >
                    What's new
                  </span>
                  <span
                    class="inline-flex items-center text-sm font-medium text-green-600 space-x-1"
                  >
                    <span>WatchaTime is Online</span>
                  </span>
                </a>
              </div>
              <div class="mt-6 sm:max-w-xl">
                <h1
                  class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
                >
                  Manage Your Watch Time
                </h1>
                <p class="mt-6 text-xl text-gray-500">
                  Schedule your watching time. Schedule watch time for movie, tv
                  show, and anime from Our Database.
                </p>
              </div>
              <div class="mt-12 sm:max-w-lg sm:w-full sm:flex">
                <div class="min-w-0 flex-1">
                  <router-link
                    to="/register"
                    class="block w-full font-mono fon rounded-md border border-transparent px-5 py-3 bg-green-600 text-base font-bold text-black shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:px-10"
                  >
                    Sign Up
                  </router-link>
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-3">
                  <router-link
                    to="/login"
                    class="block w-full font-mono rounded-md border border-transparent px-5 py-3 bg-green-600 text-base font-bold text-black shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:px-10"
                  >
                    Log in
                  </router-link>
                </div>
              </div>
              <div class="mt-6">
                <div class="inline-flex items-center divide-y divide-gray-300">
                  <div class="flex-shrink-0 flex pr-5"></div>
                  <div
                    class="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3"
                  >
                    <span class="font-medium text-green-900">Over</span>
                    1000
                    <span class="font-medium text-indigo-600"
                      >Movies, Tv Shows, and Animes</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div
            class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
          >
            <div class="hidden sm:block">
              <div
                class="absolute inset-y-0 left-1/2 w-screen bg-green-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"
              />
              <svg
                class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="392"
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div
              class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12"
            >
              <img
                class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
