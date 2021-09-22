import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

const baseUrl = `http://localhost:3000`

export default new Vuex.Store({
  state: {
    isLogin : false,
    dataUser : {}
  },
  mutations: {
    addDataLogin(state,payload){
      state.dataUser = payload
    },
    changeIsLogin(state,payload){
      state.isLogin = payload
    }
  },
  actions: {
    async getDataCovidIndo(){
      return axios({
        url : `${baseUrl}/getDataCovidIndo`,
        method : 'get',
      })
    },
    async login({state}){
      return axios({
        url : `${baseUrl}/login`,
        method : 'post',
        data : {
          username : state.dataUser.username,
          password : state.dataUser.password
        }
      })
    },
    async register({state}){
      return axios({
        url : `${baseUrl}/register`,
        method : 'post',
        data : {
          username : state.dataUser.username,
          password : state.dataUser.password,
          city : state.dataUser.city
        }
      })
    }
  },
  modules: {},
});
