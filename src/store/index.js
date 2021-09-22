import Vue from "vue";
import Vuex from "vuex";
import movieAPI from "../apis/movieAPI"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    movies: []
  },
  mutations: {
    SET_LOGIN (state, payload) {
      state.loggedIn = payload
    },
    SET_MOVIES (state, payload) {
      state.movies = payload
    }
  },
  actions: {
    login (context, payload) {
      return movieAPI.post('/users/login', payload)
    },
    register (context, payload) {
      return movieAPI.post('/users/register', payload)
    },
    fetchPopular () {
      return movieAPI.get('/movies/popular')
    },
    searchMovie(context, payload) {
      return movieAPI.get('/movies', {params: payload})
    }
  },
  modules: {},
});
