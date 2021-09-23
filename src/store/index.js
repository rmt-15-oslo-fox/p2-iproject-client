import Vue from "vue";
import Vuex from "vuex";
import movieAPI from "../apis/movieAPI"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    movies: [],
    params: {page: 1},
    details: [],
    topics: []
  },
  mutations: {
    SET_LOGIN (state, payload) {
      state.loggedIn = payload
    },
    SET_MOVIES (state, payload) {
      state.movies = payload
    },
    SET_PARAMS (state, payload) {
      state.params = payload
    },
    SET_DETAILS (state, payload) {
      state.details = payload
    },
    SET_TOPICS (state, payload) {
      state.topics = payload
    },
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
    searchMovie({state}) {
      return movieAPI.get('/movies', {params: state.params})
    },
    fetchTopics (context, payload) {
      return movieAPI.get(`/topics/${payload.type}/${payload.id}`)
    }
  },
  modules: {},
});
