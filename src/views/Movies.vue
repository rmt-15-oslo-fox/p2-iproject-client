<template>
  <div>
    <Nav></Nav>
    <div id="search_bar" class="flex bg-white mt-20 w-4/5 mx-auto border-4 border-green-300">
      <input v-model="query" type="text" placeholder="Search movie/anime name" class="text-lg text-black font-normal w-11/12 h-10 outline-none pl-3">
      <button @click.prevent="search" class="w-1/12 border-2 border-black"><i class="fas fa-search"></i></button>
    </div>
    <movie-list :movies="movies" class="mt-3"></movie-list>
    <pagination v-show="!notPopular"></pagination>
  </div>
</template>

<script>
import movieList from "../components/movielist.vue"
import Nav from "../components/navbar.vue"
import Pagination from '../components/pagination.vue'
export default {
  name: 'movies',
  data() {
    return {
      query: '',
      notPopular: true
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
      const newParam = this.params
      newParam.title = this.query
      this.$store.commit("SET_PARAMS", newParam)
      this.$store.dispatch("searchMovie")
        .then(res => {
          this.notPopular = false
          this.$store.commit("SET_MOVIES", res.data)
        })
        .catch(err => console.log(err.response.data))
    }
  },
  components: {
    movieList,
    Nav,
    Pagination
  },
  computed: {
    movies() {
      return this.$store.state.movies
    },
    params() {
      return this.$store.state.params
    }
  },
  created() {
    this.fetchPopular()
  }
}
</script>

<style>

</style>