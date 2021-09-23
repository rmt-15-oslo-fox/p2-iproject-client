<template>
  <div class="container">
    <div class="d-flex justify-content-center mt-5">
      <div class="col col-md-4">
        <form @submit.prevent="searchStock">
          <select v-model="region" class="form-select" aria-label="Default select example" required>
            <option value="" selected="selected" disabled>Select region</option>
            <option value="nasdaq">US/Nasdaq</option>
            <option value="ihsg">ID/IHSG</option>
          </select>
          <input v-model="stockName" class="form-control border-secondary rounded-pill pr-5 mt-3" type="text" 
          placeholder="search for stock index, ex: ASII" required>
          <button
          type="submit" 
          id="submit-search-button"
          class="btn-lg rounded-pill mt-3">
          Search</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      stockName: '',
      region: ''
    }
  },
  methods: {
    async searchStock() {
      let payload = ''
      if(this.region === 'ihsg') {
        payload = `${this.stockName.toUpperCase()}.JK`
      } else {
        payload = this.stockName.toUpperCase()
      }
      await this.$store.dispatch('fetchForum', payload)
      this.stockName = '',
      this.region = ''
    }
  },
}
</script>

<style>
</style>