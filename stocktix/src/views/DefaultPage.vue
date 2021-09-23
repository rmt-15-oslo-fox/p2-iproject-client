<template>
  <div>
    <NavBar />
    <img class="default-page-bg" src="https://ik.imagekit.io/xvfgr2ixls8/undraw_wallet_aym5_W2xfqWj5K6P.png?updatedAt=1632339359446" alt="">
    <h3><b>Kickstart your investment journey</b></h3>
    <p>
      Stocktix is an easy to use app, to accompany your 
      investment journey, sharing thought through forums,<br>
      watch and learn varieties of stock from both Nasdaq index and
      IHSG.<br>
      Start your journey right now using our demo features, for free!
    </p>
    <h2><b>StockTix</b></h2>
    <br>
    <button 
    id="start-journey-button"
    class="btn-lg rounded-pill">
    Start the journey </button>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Default',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
.default-page-bg {
  height: 45%;
  width: 45%;
}
#start-journey-button {
  background-color: #C0EC83
}
</style>