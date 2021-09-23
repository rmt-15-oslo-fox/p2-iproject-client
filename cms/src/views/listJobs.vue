<template>
  <div class="dashboard-main container-fluid container-md-none">
    <h2 class="text-center col-md-7 offset-md-4">Job Lists</h2>
    <div class="rounded-5 col-md-7 offset-md-4">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Job Type</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <job-list
            v-for="(job, index) in list"
            :key="job.id"
            :item="job"
            :numb="index"
            @fetchJob="fetchJob"
          ></job-list>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import JobList from "../components/listTableJob.vue";
import axios from "axios";
export default {
  name: "dashboard",
  data() {
    return {
      list: [],
    };
  },
  components: {
    JobList,
  },
  methods: {
    fetchJob() {
      const url = "http://localhost:3000";
      axios({
        method: "GET",
        url: `${url}/jobs`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((res) => {
          this.list = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editJob() {
      this.$emit("changePage", "editArtikel");
    },
  },
  created() {
    this.fetchJob();
  },
};
</script>

<style>
</style>