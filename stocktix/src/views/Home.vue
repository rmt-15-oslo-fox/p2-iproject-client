<template>
  <div class="home">
    <NavBar />
    <div class="stock-chart">
      <h3>Nasdaq</h3>
      <NasdaqChart />
    </div>
    <div class="stock-chart">
      <h3>IHSG</h3>
      <IhsgChart />
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
    fetchCompositeIndex() {
      this.$store.dispatch('fetchCompositeIndex')
      .then(({data}) => {

        // nasdaq
        let timeStamp = data['^IXIC'].timestamp.map(element => {
          let newDate = new Date(element*1000) 
          let formattedTime = newDate.getHours() + ' : ' + newDate.getMinutes()
          return formattedTime
        });
        data['^IXIC'].timestamp = timeStamp

        if(data['^IXIC'].close[0] > data['^IXIC'].close[data['^IXIC'].close.length -2]) {
          data['^IXIC'].color = 'red'
        } else if (data['^IXIC'].close[0] < data['^IXIC'].close[data['^IXIC'].close.length -2]) {
          data['^IXIC'].color = 'green'
        } else {
          data['^IXIC'].color = 'yellow'
        }
        this.$store.commit('SET_NASDAQ', data['^IXIC'])

        // ihsg
        let timeStamp2 = data['^JKSE'].timestamp.map(element => {
          let newDate = new Date(element*1000) 
          let formattedTime = newDate.getHours() + ' : ' + newDate.getMinutes()
          return formattedTime
        });
        data['^JKSE'].timestamp = timeStamp2

        if(data['^JKSE'].close[0] > data['^JKSE'].close[data['^JKSE'].close.length -2]) {
          data['^JKSE'].color = 'red'
        } else if (data['^JKSE'].close[0] < data['^JKSE'].close[data['^JKSE'].close.length -2]) {
          data['^JKSE'].color = 'green'
        } else {
          data['^JKSE'].color = 'yellow'
        }
        this.$store.commit('SET_IHSG', data['^JKSE']) 
        
      })
      .catch(error => {
        this.$swal(error.response.data.message)
      })
    }
  },
  computed: {
    nasdaq() {
      return this.$store.state.nasdaq
    },
    ihsg() {
      return this.$store.state.ihsg
    }
  },
  created() {
    this.fetchCompositeIndex()
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
.stock-chart {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>
