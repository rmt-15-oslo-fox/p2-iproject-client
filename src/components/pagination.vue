<template>
  <div class="bg-green-700 px-4 py-3 flex items-center justify-between border-t border-white sm:px-6">
    <div class="sm:flex-1 sm:flex sm:items-center sm:justify-center">
        <a v-show="params.page >= 2" @click.prevent="changePage(params.page - 1)" class="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-2xl border border-gray-300 bg-black text-sm font-medium text-white hover:bg-gray-900 w-1/12">
          <span>Previous</span>
        </a>
        <a @click.prevent="changePage(params.page + 1)" class="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-r-2xl border border-gray-300 bg-black text-sm font-medium text-white hover:bg-gray-900 w-1/12">
          <span>Next</span>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagination",
  data() {
    return {
    }
  },
  methods: {
    changePage(n) {
      const newParam = this.params
      newParam.page = n
      this.$store.commit("SET_PARAMS", newParam)
      this.$store.dispatch("searchMovie")
        .then(res => {
          this.$store.commit("SET_MOVIES", res.data)
        })
        .catch(err => console.log(err.response.data))
    }
  },
  computed: {
    params() {
      return this.$store.state.params;
    }
  }
}
</script>