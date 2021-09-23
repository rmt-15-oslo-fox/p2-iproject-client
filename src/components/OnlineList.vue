<template>
  <div class="col-md-2">
    <label for="">Online Users</label>
    <ul class="list-item online-list">
      <li v-for="(data, index) in users" :key="index">
        {{ data.username }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  name: `OnlineList`,
  data() {
    return {
      username: localStorage.getItem("username"),
    };
  },
  methods: {
    ...mapMutations(["INSERT_USERS"]),
  },
  computed: {
    ...mapState(["users"]),
    ...mapGetters(["FILTER_ONLINE"]),
  },
  sockets: {
    sendUsers(user) {
      // console.log(user);
      this.INSERT_USERS(user);
    },
  },
  async created() {
    await this.$socket.emit("getAllUser");
  },
};
</script>

<style></style>
