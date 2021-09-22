import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    carts:[]
  },
  mutations: {
    PRODUCTFETCH(state, payload){
      state.products = payload
    },
    ADDCARTS(state, payload){
      state.carts.push(payload)
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
    },
    makeOrder({state},payload){
      axios({
        url:'/users/orders',
        method:'post',
        headers:{access_token: localStorage.getItem("access_token")},
        data:{
          products: state.carts,
          total: payload
        }

      })
      .then((res)=>{
        console.log(res.data)
        window.snap.pay(res.data.token)
        return axios({
          url:'/users/orders/done',
          method:'post',
          headers:{access_token: localStorage.getItem("access_token")},
          data:{
            OrderId: res.data.orderId
          }
        })
      })
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  },
  modules: {
  }
})
