<template>
  <!-- register -->
  <div class="row">
    <div class="register container m-auto border mt-5 rounded-5 col-md-5">
      <form class="p-5">
        <h2 class="text-center">Register</h2>
        <div class="mb-3 mt-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3 mt-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3 mt-3">
          <label for="exampleInputEmail1" class="form-label">Password</label>
          <input type="password" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <button @click="logout" type="submit" class="btn btn-danger">
          Cancel
        </button>
      </form>
    </div>
  </div>
  <!-- register -->
</template>

<script>
export default {
  name: "register",
  methods: {
    logout() {
      this.$emit("changePage", "login");
    },
  },
};
</script>

<style>
</style>