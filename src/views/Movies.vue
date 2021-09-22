<template>
  <div>
    <Nav></Nav>
    <div id="search_bar" class="flex bg-white mt-20 w-4/5 mx-auto border-4 border-green-300">
      <input v-model="query" type="text" placeholder="Search movie/anime name" class="text-lg text-black font-normal w-11/12 h-10 outline-none pl-3">
      <button @click.prevent="search" class="w-1/12 border-2 border-black"><i class="fas fa-search"></i></button>
    </div>
    <movie-list :movies="movies" class="mt-3"></movie-list>
  </div>
</template>

<script>
import movieList from "../components/movielist.vue"
import Nav from "../components/navbar.vue"
export default {
  name: 'movies',
  data() {
    return {
      query: ''
    }
  },
  methods: {
    fetchPopular() {
      this.$store.dispatch("fetchPopular")
        .then(res => {
          this.$store.commit("SET_MOVIES", res.data.results)
        })
        .catch(err => console.log(err.response.data))
    },
    search() {
      this.$store.dispatch("searchMovie", {title: this.query})
        .then(res => {
          this.$store.commit("SET_MOVIES", res.data)
        })
        .catch(err => console.log(err.response.data))
    }
  },
  components: {
    movieList,
    Nav
  },
  computed: {
    movies() {
      return this.$store.state.movies
    }
  },
  created() {
    this.fetchPopular()
  }
}
</script>

<style>

</style>