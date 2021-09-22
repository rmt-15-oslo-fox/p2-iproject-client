<template>
  <div class="col-md-2">
    <label for="">Online Users</label>
    <ul>
      <li class="list-item">
        {{ username }}
      </li>
      <li
        class="list-item"
        v-for="(data, index) in users"
        :key="index"
        v-show="index + 1 !== users.length"
      >
        {{ data }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
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
  },
  sockets: {
    sendUsers(user) {
      // console.log(user);
      this.INSERT_USERS(user);
    },
  },
  created() {},
};
</script>

<style></style>
