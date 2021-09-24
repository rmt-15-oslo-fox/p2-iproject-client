<template>
  <div class="login">
    <form @submit.prevent="login" style="width: 550px">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input
          v-model="username"
          type="text"
          class="form-control"
          id="username"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SparringChatLogin",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    login() {
      localStorage.setItem("username", this.username);
      this.$socket.emit("loginUser", this.username);
      this.$router.push("/sparring-chat");
    },
  },
};
</script>

<style></style>
