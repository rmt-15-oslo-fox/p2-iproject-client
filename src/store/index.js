import Vue from 'vue'
import Vuex from 'vuex'
import weatherAPI from '../apis/openWeatherAPI'
import mountainAPI from '../apis/mountainAPI'
import geoCodingAPI from '../apis/geoCodingAPI'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    mountains: [],
    mytrips: [],
    alltrip: [],
    getDate: null,
    message: []
  },
  mutations: {
    SET_ISLOGIN: function (state, status) {
      state.isLogin = status
    },
    SET_MOUNTAINS: function(state, payload){
      state.mountains = payload
    },
    SET_MYTRIP: function(state, payload){
      state.mytrips = payload
    },
    SET_ALLTRIP: function(state, payload){
      state.alltrip = payload
    }
  },
  actions: {
    googleLogin: function(context, idToken){
      try {
        return mountainAPI.post('/oauth', { idToken })
      } catch (err) {
        this.$toasted.show(err).goAway(2000)
      }
    },
    getMountains: function({commit}){
      mountainAPI.get('/mountains', { 
        headers: {
          access_token: localStorage.getItem('access_token')
        }
       })
       .then(response => {
        commit('SET_MOUNTAINS', response.data)
       })
       .catch(err => {
         this.$toasted.show(err.response.data)
       })
    },
    createTrip: function(context, payload){
      return mountainAPI.post('/addtrip', payload, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    getMyTrip: function({commit}){
      mountainAPI.get('/mytrip', {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(response => {
        commit('SET_MYTRIP', response.data.Trips)
      })
      .catch(err => {
        console.log(err);
      })
    },
    getAllTrip: function({commit}){
      mountainAPI.get('/alltrip')
      .then(response => {
        commit('SET_ALLTRIP', response.data)
      })
      .catch(err => {
        console.log(err);
      })
    },
    joinTrip: function(context, payload){
      return mountainAPI.post('/jointrip', payload, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    deleteTrip: function(context, id){
      return mountainAPI.delete(`/deleteTrip/${id}`, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    getWeather: function({dispatch}, payload){
      dispatch('getLocation', payload)
      .then(response => {
        const { lat, lng } = response.data.results[0].geometry.location
        return weatherAPI.get('', {
          params: {
            lat,
            lon: lng
          }
        })
      })
      .then(response => {
        const weather = response.data.daily.map(el => {
          let a = new Date(el.dt * 1000);
          let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
          let year = a.getFullYear();
          let month = months[a.getMonth()];
          let date = a.getDate();
          let time = date + ' ' + month + ' ' + year 
          return {
            day: time,
            cuaca: el.weather[0].description
          }
        })
        console.log(weather);
      })
      .catch(err => {
        console.log(err);
      })
    },
    getLocation: function(context, location){
      return geoCodingAPI.get('',{
        params: {
          address: location
        }
      })
    }
  }
})
