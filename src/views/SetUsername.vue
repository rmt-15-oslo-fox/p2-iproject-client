<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <form role="form" @submit.prevent="setUsername">
            <div class="form-group">
              <label for="exampleInputEmail1">
                Set Your Username:
              </label>
              <input type="text" class="form-control" v-model="username" />
            </div>

            <button type="submit" class="btn btn-primary">
              Lets Go!
            </button>
          </form>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
export default {
  name: `SetUsername`,
  data() {
    return {
      username: "",
    };
  },
  methods: {
    setUsername() {
      //   console.log(this.$socket);
      this.$socket.emit("loginUser", this.username);
      localStorage.setItem("username", this.username);
      this.$router.push({ name: "MainPage" });
    },
  },
};
</script>

<style></style>
