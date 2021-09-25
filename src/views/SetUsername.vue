<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <form role="form">
            <div class="form-group">
              <label for="exampleInputEmail1">
                Set Your Username:
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                v-model="username"
              />
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
export default {
  name: `SetUsername`,
  data() {
    return {
      username: "",
    };
  },
};
</script>

<style></style>
