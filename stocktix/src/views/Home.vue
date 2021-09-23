<template>
  <div class="home">
    <NavBar />
    <div>
      <img class="homepage-bg" src="https://ik.imagekit.io/xvfgr2ixls8/undraw_Pitching_re_fpgk_E1CtYp5Oqd.png?updatedAt=1632339334587" alt="">
      <h2>View Composite Chart</h2>
      <button
      id="view-chart-button" 
      class="btn-lg rounded-pill">
      Indonesia / IHSG</button>
      <br><br>
      <button 
      id="view-chart-button"
      class="btn-lg rounded-pill">
      USA / NASDAQ </button>
    </div>
    <div 
    v-if="this.$store.state.region==='nasdaq'"
    class="stock-chart">
      <h3>Nasdaq</h3>
      <NasdaqChart 
      :nasdaq="nasdaq"
      />
    </div>
    <div 
    v-if="this.$store.state.region==='ihsg'"
    class="stock-chart">
      <h3>IHSG</h3>
      <IhsgChart 
      :ihsg="ihsg"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import NasdaqChart from '@/components/NasdaqChart.vue'
import IhsgChart from '@/components/IhsgChart.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  methods: {
    
  },
  computed: {
    nasdaq() {
      return this.$store.state.nasdaq
    },
    ihsg() {
      return this.$store.state.ihsg
    }
  },
  async created() {
   
  },
  components: {
    NavBar,
    Footer,
    NasdaqChart,
    IhsgChart
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
