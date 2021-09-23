<template>
  <!-- create form -->
  <div class="row">
    <div
      class="create-form container offset-md-4 border mt-5 rounded-5 col-md-6"
    >
      <form class="p-5">
        <h2 class="text-center">Edit Jobs</h2>
        <div class="mb-3 mt-3">
          <label for="exampleInputEmail1" class="form-label">Title</label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3 mt-3">
          <label class="form-label">Description</label>
          <input class="form-control" />
        </div>
        <div class="mb-3 mt-3">
          <label class="form-label">Image</label>
          <input type="file" class="form-control" />
        </div>
        <div class="mb-3 mt-3">
          <label class="form-label">Job Type</label>
          <input type="text" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="submit" class="btn btn-danger">Cancel</button>
      </form>
    </div>
  </div>
  <!-- create form -->
</template>

<script>
export default {
  name: "editJob",
};
</script>

<style>
</style>