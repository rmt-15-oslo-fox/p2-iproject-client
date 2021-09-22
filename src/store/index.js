import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[]
  },
  mutations: {
    PRODUCTFETCH(state, payload){
      state.products = payload
    }
  },
  actions: {
    productFetch({commit}){
      axios({
        url:'/users/products',
        method:'get'
      })
      .then((res)=>{
        commit('PRODUCTFETCH', res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },
  modules: {
  }
})
