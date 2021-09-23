import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    messages: [],
    users: [],
    logStatus: false,
    searchResult: [],
    currentlyPlaying: [],
    playerStatus: false,
  },
  mutations: {
    CHANGE_PLAYER_STATUS(state, payload) {
      state.playerStatus = payload;
    },
    INSERT_MESSAGE(state, payload) {
      state.messages = payload;
    },
    INSERT_USERS(state, payload) {
      state.users = payload;
    },
    CHANGE_LOGSTATUS(state, payload) {
      state.logStatus = payload;
    },
    FILL_SEARCHRESULT(state, payload) {
      state.searchResult = payload;
    },
    FILL_CURRENTLYPLAYING(state, payload) {
      state.currentlyPlaying = payload;
    },
  },
  actions: {
    async signInWithSpotify({ commit }, query) {
      // console.log(query);
      try {
        const resp = await axios.get(
          `https://music-room-live.herokuapp.com/callback?code=${query}`
        );
        console.log(resp.data);
        localStorage.setItem("access_token", resp.data.access_token);
        commit("CHANGE_LOGSTATUS", true);
      } catch (err) {
        console.log(err);
      }
    },
    async PlayTrack({ dispatch }) {
      try {
        const token = localStorage.getItem("access_token");
        const device_id = localStorage.getItem("device_id");
        const resp = await axios({
          url: `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,
          method: `put`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(resp);
        dispatch("nowPlaying");
      } catch (err) {
        console.log(err);
      }
    },
    async newDevice({ commit }) {
      try {
        const token = localStorage.getItem("access_token");
        const device_id = localStorage.getItem("device_id");
        await axios({
          url: `https://api.spotify.com/v1/me/player`,
          method: `put`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data: { device_ids: [`${device_id}`] },
        });
        // console.log(resp);
        commit("CHANGE_PLAYER_STATUS", true);
      } catch (err) {
        commit("CHANGE_PLAYER_STATUS", false);
        console.log(err);
      }
    },
    async nextTrack() {
      try {
        const token = localStorage.getItem("access_token");
        const device_id = localStorage.getItem("device_id");
        const resp = await axios({
          url: `https://api.spotify.com/v1/me/player/next?device_id=${device_id}`,
          method: `post`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(resp);
      } catch (err) {
        console.log(err);
      }
    },
    async preTrack() {
      try {
        const token = localStorage.getItem("access_token");
        const device_id = localStorage.getItem("device_id");
        const resp = await axios({
          url: `https://api.spotify.com/v1/me/player/previous?device_id=${device_id}`,
          method: `post`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(resp);
      } catch (err) {
        console.log(err);
      }
    },
    async pauseTrack() {
      try {
        const token = localStorage.getItem("access_token");
        const device_id = localStorage.getItem("device_id");
        const resp = await axios({
          url: `https://api.spotify.com/v1/me/player/pause?device_id=${device_id}`,
          method: `put`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(resp);
      } catch (err) {
        console.log(err);
      }
    },
    async searchTrack({ commit }, payload) {
      try {
        const token = localStorage.getItem("access_token");
        // const device_id = localStorage.getItem("device_id");
        const resp = await axios({
          url: `https://api.spotify.com/v1/search`,
          method: `get`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          params: { q: payload, type: "track,artist", limit: 10 },
        });
        console.log(resp.data);
        commit("FILL_SEARCHRESULT", resp.data);
      } catch (err) {
        console.log(err);
      }
    },
    async playASong({ dispatch }, payload) {
      try {
        const token = localStorage.getItem("access_token");
        const device_id = localStorage.getItem("device_id");
        const resp = await axios({
          url: `https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,
          method: `put`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data: {
            uris: [payload],
          },
        });
        dispatch("nowPlaying");
        console.log(resp);
      } catch (err) {
        console.log(err);
      }
    },
    async nowPlaying({ commit }) {
      try {
        const token = localStorage.getItem("access_token");
        const resp = await axios({
          url: `https://api.spotify.com/v1/me/player/currently-playing`,
          method: `get`,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          params: {
            market: "ID",
          },
        });
        console.log(resp.data);
        commit("FILL_CURRENTLYPLAYING", resp.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
