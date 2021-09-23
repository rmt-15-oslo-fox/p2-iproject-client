<template>
  <div id="foundStock" class="card" :style="stylingBg">
    <div class="card-body">
      <h1 :style="styling" class="card-title">{{data.symbol}}</h1>
      <h5 class="card-subtitle mb-2 text-muted">{{data.shortName}}</h5>
      <h5 :style="styling">{{data.regularMarketChange}}</h5>
      <h5 :style="styling">{{data.regularMarketChangePercent.toFixed(2)}}%</h5>
      <h2 :style="styling"><b>{{data.regularMarketPrice}}</b></h2>
      <button
      @click.prevent="viewDetails(data.symbol)" 
      class="btn-lg btn-dark rounded-pill mt-2">
      View Details </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WCard',
  props: ["data"],
  methods: {
    async viewDetails(payload) {
      await this.$store.dispatch('viewDetails', payload)
    }
  },
  computed: {
    styling() {
      if(this.data.regularMarketChange < 0) {
        return 'color: red'
      } else if (this.data.regularMarketChange > 0) {
        return 'color: green'
      } else {
        return 'color: yellow'
      }
    },
    stylingBg() {
      if(this.data.regularMarketChange < 0) {
        return 'width: 24rem; background-color: rgba(255, 0, 0, 0.1)'
      } else if (this.data.regularMarketChange > 0) {
        return 'width: 24rem; background-color: rgba(0, 255, 0, 0.1)'
      } else {
        return 'width: 24rem; background-color: rgba(255, 255, 0, 0.1)'
      }
    }
  }
}
</script>

<style>
</style>