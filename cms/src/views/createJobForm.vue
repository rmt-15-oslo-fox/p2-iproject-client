<template>
  <!-- create form -->
  <div class="row">
    <div
      class="create-form container offset-md-4 border mt-5 rounded-5 col-md-6"
    >
      <form class="p-5" @submit.prevent="createJob">
        <h2 class="text-center">Create Jobs</h2>
        <div class="mb-3 mt-3">
          <label for="exampleInputEmail1" class="form-label">Title</label>
          <input v-model="title" type="text" class="form-control" />
        </div>
        <div class="mb-3 mt-3">
          <label class="form-label">Description</label>
          <input v-model="description" class="form-control" />
        </div>
        <div class="mb-3 mt-3">
          <label class="form-label">Image</label>
          <input @change="imgUrl" type="file" class="form-control" />
        </div>
        <div class="mb-3 mt-3">
          <label class="form-label">Job Type</label>
          <input v-model="jobType" type="text" class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="submit" class="btn btn-danger">Cancel</button>
      </form>
    </div>
  </div>
  <!-- create form -->
</template>

<script>
import axios from "axios";
export default {
  name: "createJob",
  props: ["createdJob"],
  data() {
    return {
      job: [],
      title: "",
      description: "",
      imgUrl: "",
      jobType: "",
      status: "active",
      companyId: "",
      authorId: "",
    };
  },
  methods: {
    createJob() {
      axios({
        url: `http://localhost:3000/jobs`,
        method: "POST",
        headers: {
          access_token: localStorage.access_token,
        },
        data: this.createJob,
      })
        .then((res) => {
          this.$emit("changePage", "dashboard");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>