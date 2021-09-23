<template>
  <div>
    <NavBar/>
    <SearchNews />
    <div class="news-container">
      <NewsCard
      v-for="news in newsData"
      :key="news.id"
      :news="news"
      />
    </div>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import NewsCard from '@/components/NewsCard.vue'
import SearchNews from '@/components/SearchNews.vue'
export default {
  name: 'NewsPage',
  methods: {
    async fetchNews() {
      await this.$store.dispatch('fetchNews')
    }
  },
  computed: {
    newsData() {
      return this.$store.state.newsData
    }
  },
  async created() {
    await this.fetchNews()
  },
  components: {
    NavBar,
    Footer,
    NewsCard,
    SearchNews
  }
}
</script>

<style>
.news-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 220px;
}
</style>