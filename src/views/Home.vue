<template>
  <div class="home">
    <Nav></Nav>
    <p class="mt-20 text-white text-4xl">Discover Movies</p>
    <movielist class="mt-5" :movies="movies"></movielist>
  </div>
</template>

<script>
import Movielist from '../components/movielist.vue';
import Nav from "../components/navbar.vue"
export default {
  name: "Home",
  components: {
    Nav,
    Movielist,
  },
  methods: {
    fetchPopular() {
      this.$store.dispatch("fetchPopular")
        .then(res => {
          this.$store.commit("SET_MOVIES", res.data.results)
        })
        .catch(err => console.log(err.response.data))
    }
  },
  computed: {
    movies() {
      return this.$store.state.movies
    }
  },
  created() {
    this.fetchPopular()
  }
};
</script>
