<template>
  <div class="container">
    <div class="d-flex justify-content-center mt-5">
      <div class="col col-md-4">
        <form @submit.prevent="searchNewsByQuery">
          <input v-model="keywords" class="form-control border-secondary rounded-pill pr-5 mt-3" type="text" 
          placeholder="Keywords ex: saham, IHSG, etc." required>
          <button
          type="submit" 
          id="submit-search-button"
          class="btn-lg rounded-pill mt-3">
          Search News</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchNews',
  data() {
    return {
      keywords: '',
    }
  },
  methods: {
    async searchNewsByQuery() {
      await this.$store.dispatch('searchNewsByQuery', this.keywords)
      this.keywords = ''
    }
  }
}
</script>

<style>
</style>