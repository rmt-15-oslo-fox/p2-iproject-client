<template>
 <div>
    <NavBar />
    <br>
    <h1><b>{{stockData.symbol}}</b> daily chart</h1>
    <div class="stock-chart">
      <ChartTemplate />
    </div>
    <div class="stockDetails">
      <table style="text-align:left">
        <tr>
          <th><h3><b>{{stockData.longName}}</b></h3></th>
        </tr>
        <tr>
          <td><h3>Previous Close</h3></td>
          <td><h3>{{stockData.regularMarketPreviousClose}}</h3></td>
        </tr>
        <tr>
          <td><h3>Open </h3></td>
          <td><h3>{{stockData.regularMarketOpen}}</h3></td>
        </tr>
        <tr>
          <td><h3>Day Range</h3></td>
          <td><h3>{{stockData.regularMarketDayRange}}</h3></td>
        </tr>
        <tr>
          <td><h3>Volume </h3></td>
          <td><h3>{{stockData.regularMarketVolume}}</h3></td>
        </tr>
        <tr>
          <td><h3>Market Cap</h3></td>
          <td><h3> {{marketCap}}</h3></td>
        </tr>
        <tr>
          <td><h3>PBV</h3></td>
          <td><h3> {{stockData.priceToBook}}</h3></td>
        </tr>
        <tr>
          <td><h3>PER</h3></td>
          <td><h3> {{stockData.priceEpsCurrentYear}}</h3></td>
        </tr>
        <tr>
          <td><h3>EPS</h3></td>
          <td><h3> {{stockData.epsCurrentYear}}</h3></td>
        </tr>
      </table>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ChartTemplate from '@/components/ChartTemplate.vue'
export default {
  name: 'Demo',
  methods: {
  },
  components: {
    NavBar,
    Footer,
    ChartTemplate
  },
  computed: {
    stockData() {
      return this.$store.state.currentDetail
    },
    chartData() {
      return this.$store.state.currentChart
    },
    marketCap() {
      return `${this.$store.state.currentDetail.marketCap.toLocaleString('id-ID')}`
    }
  },
  created() {
  }
}
</script>

<style>
.stock-chart {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  margin-bottom: 3%;
}
.stockDetails{
  padding-left: 550px;
}
</style>