<template>
  <div class="col-md-4">
    <p v-if="!playerStatus">Player is not ready</p>
    <p v-else>Player is ready</p>
    <div class="card">
      <div class="card-body" v-if="currentlyPlaying.item">
        <p>Now Playing</p>
        <img alt="" :src="currentlyPlaying.item.album.images[2].url" />
        <p>
          {{ currentlyPlaying.item.artists[0].name }} -
          {{ currentlyPlaying.item.name }}
        </p>
      </div>
      <form @submit.prevent="searchHandler" id="search-form">
        <input type="text" placeholder="Search songs" v-model="searchQuery" />
        <button type="submit">Search!</button>
      </form>
      <button @click.prevent="newDevice">
        Listen on this device
      </button>
      <div class="card-body" v-if="playerStatus">
        <button>
          <i class="fas fa-step-backward" @click.prevent="preTrack"></i>
        </button>

        <button id="togglePlay" @click.prevent="PlayTrack">
          <i class="fas fa-play-circle"></i>
        </button>
        <button @click.prevent="pauseTrack">
          <i class="fas fa-pause-circle"></i>
        </button>
        <button @click.prevent="nextTrack">
          <i class="fas fa-step-forward"></i>
        </button>
      </div>
      <div class="card-footer">
        Search result
        <div v-if="searchResult.tracks">
          <div
            class="search-result"
            v-for="(track, index) in searchResult.tracks.items"
            :key="index"
          >
            <a @click.prevent="playASong(track.uri)"
              ><i class="fas fa-play-circle"></i
            ></a>
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
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: `SearchField`,
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    ...mapState(["searchResult", "currentlyPlaying", "playerStatus"]),
  },
  methods: {
    ...mapMutations(["CHANGE_PLAYER_STATUS"]),
    ...mapActions([
      "PlayTrack",
      "newDevice",
      "pauseTrack",
      "nextTrack",
      "searchTrack",
      "playASong",
      "preTrack",
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
    setTimeout(async () => {
      await this.newDevice();
      // this.CHANGE_PLAYER_STATUS(true);
    }, 5000);
  },
};
</script>

<style></style>
