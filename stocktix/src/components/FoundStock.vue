<template>
  <div id="foundStock" class="card" :style="stylingBg">
    <div class="card-body" >
      <h1 :style="styling" class="card-title">{{foundStock.symbol}}</h1>
      <h5 class="card-subtitle mb-2 text-muted">{{foundStock.shortName}}</h5>
      <h5 :style="styling">{{foundStock.regularMarketChange}}</h5>
      <h5 :style="styling">{{foundStock.regularMarketChangePercent.toFixed(2)}}%</h5>
      <h2 :style="styling"><b>{{foundStock.regularMarketPrice}}</b></h2>
      <button
      @click.prevent="addToWatchlist" 
      class="btn-lg btn-dark rounded-pill mt-2">
      Add To Watchlist </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoundStock',
  methods: {
    async addToWatchlist() {
      await this.$store.dispatch('addToWatchlist', this.$store.state.foundStock.symbol)
      await this.$store.dispatch('fetchWatchlist')
    }
  },
  computed: {
    foundStock() {
      return this.$store.state.foundStock
    },
    styling() {
      if(this.$store.state.foundStock.regularMarketChange < 0) {
        return 'color: red'
      } else if (this.$store.state.foundStock.regularMarketChange > 0) {
        return 'color: green'
      } else {
        return 'color: yellow'
      }
    },
    stylingBg() {
      if(this.$store.state.foundStock.regularMarketChange < 0) {
        return 'width: 24rem; background-color: rgba(255, 0, 0, 0.1)'
      } else if (this.$store.state.foundStock.regularMarketChange > 0) {
        return 'width: 24rem; background-color: rgba(0, 255, 0, 0.1)'
      } else {
        return 'width: 24rem; background-color: rgba(255, 255, 0, 0.1)'
      }
    }
  }
}
</script>

<style>
#foundStock{
  margin-right: auto;
  margin-left: auto;
  margin-top: 5%;
}
</style>