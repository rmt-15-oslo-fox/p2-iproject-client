<template>
  <div class="col-md-4">
    <div class="card">
      <div class="card-body" v-if="currentlyPlaying.item">
        <p>Now Playing</p>
        <img alt="" :src="currentlyPlaying.item.album.images[2].url" />
        <p>
          {{ currentlyPlaying.item.artists[0].name }} -
          {{ currentlyPlaying.item.name }}
        </p>
      </div>
      <form @submit.prevent="searchHandler">
        <input type="text" placeholder="Search songs" v-model="searchQuery" />
        <button type="submit">Search!</button>
      </form>
      <div class="card-body">
        <button @click.prevent="newDevice">
          Listen on this device
        </button>

        <button id="togglePlay" @click.prevent="PlayTrack">
          Play
        </button>
        <button @click.prevent="nextTrack">
          nextTrack
        </button>
        <button @click.prevent="pauseTrack">Pause</button>
      </div>
      <div class="card-footer">
        Search result
        <div v-if="searchResult.tracks">
          <div
            class="search-result"
            v-for="(track, index) in searchResult.tracks.items"
            :key="index"
          >
            <a @click.prevent="playASong(track.uri)">Play</a>
            <img :src="track.album.images[2].url" alt="" srcset="" />
            <p>{{ track.artists[0].name }} - {{ track.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import * as Spotify from "../js/spotify-player";
import { mapActions, mapState } from "vuex";
export default {
  name: `SearchField`,
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    ...mapState(["searchResult", "currentlyPlaying"]),
  },
  methods: {
    ...mapActions([
      "PlayTrack",
      "newDevice",
      "pauseTrack",
      "nextTrack",
      "searchTrack",
      "playASong",
    ]),
    async searchHandler() {
      if (this.searchQuery.length > 0) {
        await this.searchTrack(this.searchQuery);
      } else {
        console.log(`Cant search Empty`);
      }
    },
  },
  async mounted() {
    console.log(`>>>>>>>>>>>>>>`, localStorage.getItem("device_id"));
    setTimeout(async () => {
      await this.newDevice();
    }, 5000);
  },
};
</script>

<style></style>
