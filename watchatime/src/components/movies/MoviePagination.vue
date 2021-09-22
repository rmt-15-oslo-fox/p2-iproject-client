<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav
    class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0"
  >
    <div class="-mt-px w-0 flex-1 flex">
      <a
        @click.prevent="handlePageChange(currentPage - 1)"
        href="#"
        class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
      >
        <ArrowNarrowLeftIcon
          class="mr-3 h-5 w-5 text-green-400"
          aria-hidden="true"
        />
        Previous
      </a>
    </div>

    <div class="hidden md:-mt-px md:flex">
      <div v-if="totalPages < 7">
        <a
          href="#"
          v-for="page in totalPages"
          :key="page + 'pageMovie'"
          @click.prevent="handlePageChange(page)"
          :class="[
            currentPage == page
              ? 'border-green-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
            `border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`,
          ]"
        >
          {{ page }}
        </a>
      </div>
      <div v-else>
        <a
          href="#"
          v-for="page in [currentPage, currentPage + 1, currentPage + 2]"
          :key="page + 'pageMovie'"
          @click.prevent="handlePageChange(page)"
          :class="[
            currentPage == page
              ? 'border-green-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
            `border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`,
          ]"
        >
          {{ page }}
        </a>
        <span
          class="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        >
          ...
        </span>
        <a
          href="#"
          v-for="page in [totalPages - 2, totalPages - 1, totalPages]"
          :key="page + 'pageMovie'"
          @click.prevent="handlePageChange(page)"
          :class="[
            currentPage == page
              ? 'border-green-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
            `border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`,
          ]"
        >
          {{ page }}
        </a>
      </div>
    </div>
    <div class="-mt-px w-0 flex-1 flex justify-end">
      <a
        @click.prevent="handlePageChange(currentPage + 1)"
        href="#"
        class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
      >
        Next
        <ArrowNarrowRightIcon
          class="ml-3 h-5 w-5 text-green-400"
          aria-hidden="true"
        />
      </a>
    </div>
  </nav>
</template>

<script>
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from '@heroicons/vue/solid';

export default {
  name: 'MoviePagination',
  props: ['pageData'],
  components: {
    ArrowNarrowLeftIcon,
    ArrowNarrowRightIcon,
  },
  computed: {
    currentPage() {
      return this.pageData.page;
    },
    totalPages() {
      return this.pageData.total_pages;
    },
  },
  methods: {
    handlePageChange(id) {
      if (id !== 0 && id <= this.pageData.total_pages) {
        this.$emit('PageChange', id);
      } else {
        console.log('error');
      }
    },
  },
};
</script>
