<template lang="">
  <div>
    <h3 class="sr-only">
      Schedule Date
      <time :datetime="event.datetime">{{ event.date }}</time>
    </h3>

    <div
      class="bg-green-50 border-2 border-green-800 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8"
    >
      <dl
        class="divide-y divide-gray-200 space-y-4 text-sm text-gray-600 flex-auto md:divide-y-0 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8"
      >
        <div class="flex justify-between md:block">
          <dt class="font-medium text-gray-900">Schedule ID</dt>
          <dd class="md:mt-1">
            {{ event.number }}
          </dd>
        </div>
        <div class="flex justify-between pt-4 md:block md:pt-0">
          <dt class="font-medium text-gray-900">Due Date</dt>
          <dd class="md:mt-1">
            <time :datetime="event.datetime">{{ event.date }}</time>
          </dd>
        </div>
        <div
          class="flex justify-between pt-4 font-medium text-gray-900 md:block md:pt-0"
        >
          <dt>Est. Watch Time</dt>
          <dd class="md:mt-1">
            {{ event.total }}
          </dd>
        </div>
      </dl>
      <div class="space-y-4 mt-6 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0">
        <router-link
          :to="event.invoiceHref"
          class="w-full flex items-center justify-center bg-white py-2 px-4 border border-green-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 md:w-auto"
        >
          Update
        </router-link>
        <router-link
          :to="event.invoiceHref"
          class="w-full flex items-center justify-center bg-white py-2 px-4 border border-red-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 md:w-auto"
        >
          Delete
        </router-link>
      </div>
    </div>

    <div class="mt-1 flow-root px-4 sm:mt-2 sm:px-0 border-b border-r border-l">
      <div class="my-6 divide-y divide-gray-200 sm:-my-10 ">
        <div
          v-for="product in event.products"
          :key="product.id"
          class="flex py-6 sm:py-10"
        >
          <div class="min-w-0 flex-1 lg:flex lg:flex-col">
            <div class="lg:flex-1">
              <div class="sm:flex">
                <div>
                  <h4 class="font-medium text-gray-900">{{ product.name }}</h4>
                  <p class="hidden mt-2 text-sm text-gray-500 sm:block">
                    {{ product.description }}
                  </p>
                </div>
                <p class="mt-1 font-medium text-gray-900 sm:mt-0 sm:ml-6">
                  {{ product.price }}
                </p>
              </div>
              <div class="mt-2 flex text-sm font-medium sm:mt-4">
                <a
                  :href="product.href"
                  class="text-indigo-600 hover:text-indigo-500"
                  >View Movie</a
                >
                <div class="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
                  <a href="#" class="text-indigo-600 hover:text-indigo-500"
                    >Watch Again</a
                  >
                </div>
              </div>
            </div>
            <div class="mt-6 font-medium mb-4">
              <div v-if="product.status === 'delivered'" class="flex space-x-2">
                <CheckIcon
                  class="flex-none w-6 h-6 text-green-500"
                  aria-hidden="true"
                />
                <p>
                  Completed<span class="hidden sm:inline">
                    on
                    <time :datetime="product.datetime">{{
                      product.date
                    }}</time></span
                  >
                </p>
              </div>
              <p v-else-if="product.status === 'out-for-delivery'">
                On-Hold
              </p>
              <p
                v-else-if="product.status === 'cancelled'"
                class="text-gray-500"
              >
                Cancelled
              </p>
            </div>
          </div>
          <div class="ml-4 flex-shrink-0 sm:m-0 sm:mr-6 sm:order-first">
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="col-start-2 col-end-3 sm:col-start-1 sm:row-start-1 sm:row-span-2 w-20 h-20 rounded-lg object-center object-cover sm:w-40 sm:h-40 lg:w-52 lg:h-52"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { CheckIcon } from '@heroicons/vue/outline';
export default {
  name: 'EventDetails',
  props: ['event'],
  components: {
    CheckIcon,
  },
};
</script>
<style lang=""></style>
