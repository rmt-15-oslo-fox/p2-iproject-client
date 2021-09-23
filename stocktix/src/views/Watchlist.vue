<template>
  <div>
    <NavBar />
    <SearchForm />
    <FoundStock
    v-if="this.$store.state.foundStock"
    />
    <div 
    v-if="this.$store.state.watchlistData.length===0 && 
    !this.$store.state.foundStock">
      <img class="page-bg" src="https://ik.imagekit.io/xvfgr2ixls8/undraw_Web_search_re_efla_fEfWueTztWu.png?updatedAt=1632395847305" alt="">
      <h3>You don't have any stock on your watchlist yet</h3>
    </div>
    <div class="cards-container">
      <WCard
      v-for="data in watchlistData"
      :key="data.id"
      :data="data"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import WCard from '@/components/WCard.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import SearchForm from '@/components/SearchForm.vue'
import FoundStock from '@/components/FoundStock.vue'
export default {
  name: 'Watchlist',
  methods: {
    async fetchWatchlist() {
      await this.$store.dispatch('fetchWatchlist')
    }
  },
  computed: {
    watchlistData() {
      return this.$store.state.watchlistData
    },
    foundData() {
      return this.$store.state.foundStock
    },
  },
  async created() {
    await this.fetchWatchlist()
  },
  components: {
    WCard,
    NavBar,
    Footer,
    SearchForm,
    FoundStock
  }
}
</script>

<style>
.page-bg {
  height: 40%;
  width: 40%;
}
#submit-search-button {
  background-color: #C0EC83
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
</style>