<template lang="">
  <div
    v-for="product in order.products"
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
          <a :href="product.href" class="text-indigo-600 hover:text-indigo-500"
            >View Movie</a
          >
          <div class="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
            <a href="#" class="text-indigo-600 hover:text-indigo-500"
              >Watch Again</a
            >
          </div>
        </div>
      </div>
      <div class="mt-6 font-medium">
        <div v-if="product.status === 'delivered'" class="flex space-x-2">
          <CheckIcon
            class="flex-none w-6 h-6 text-green-500"
            aria-hidden="true"
          />
          <p>
            Delivered<span class="hidden sm:inline">
              on
              <time :datetime="product.datetime">{{ product.date }}</time></span
            >
          </p>
        </div>
        <p v-else-if="product.status === 'out-for-delivery'">
          Out for delivery
        </p>
        <p v-else-if="product.status === 'cancelled'" class="text-gray-500">
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
</template>
<script>
export default {
  name: 'EventDetails',
};
</script>
<style lang=""></style>
