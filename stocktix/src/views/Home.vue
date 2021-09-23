<template>
  <div class="home">
    <NavBar />
    <div v-if="!this.$store.state.region">
      <img class="homepage-bg" src="https://ik.imagekit.io/xvfgr2ixls8/undraw_Pitching_re_fpgk_E1CtYp5Oqd.png?updatedAt=1632339334587" alt="">
      <h2>View Regional Chart</h2>
      <button
      @click.prevent="setRegionIHSG"
      id="view-chart-button" 
      class="btn-lg rounded-pill">
      Indonesia / IHSG</button>
      <br><br>
      <button
      @click.prevent="setRegionNasdaq" 
      id="view-chart-button"
      class="btn-lg rounded-pill">
      USA / NASDAQ </button>
    </div>
    <div 
    v-if="this.$store.state.region"
    class="stock-chart">
    <h3><b>{{chartTitle}}</b> in last 1 month</h3>
      <CompositeChart />
      <br><br>
      <button
      @click.prevent="resetRegion" 
      id="view-chart-button"
      class="btn-lg rounded-pill">
      Back </button>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import CompositeChart from '@/components/CompositeChart.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  methods: {
    async setRegionIHSG() {
      await this.$store.commit('SET_REGION', 'JKSE')
      this.$router.push('/home')
    },
    async setRegionNasdaq() {
      await this.$store.commit('SET_REGION', 'IXIC')
      this.$router.push('/home')
    },
    async resetRegion() {
      await this.$store.commit('SET_REGION', '')
    }
  },
  computed: {
    chartTitle() {
      if (this.$store.state.region === 'JKSE') {
        return 'Index Harga Saham Gabungan (IHSG)'
      } else if (this.$store.state.region === 'IXIC') {
        return 'NASDAQ Index'
      }
      return ''
    } 
  },
  async created() {
    if(localStorage.access_token) {
      this.$store.commit('SET_ISLOGIN', true)
    }
  },
  components: {
    NavBar,
    Footer,
    CompositeChart
    
  }
}
</script>
<style>
.homepage-bg {
  height: 50%;
  width: 50%;
}
.stock-chart {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  margin-bottom: 3%;
}
#view-chart-button {
  background-color: #C0EC83
}
</style>
