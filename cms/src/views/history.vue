<template>
  <!-- history -->
  <div class="history container-md-none container-fluid">
    <h2 class="text-center col-md-7 offset-md-4">History</h2>
    <div class="rounded-5 col-md-7 offset-md-4">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Job id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Update by</th>
          </tr>
        </thead>
        <tbody>
          <history-list
            v-for="(history, index) in list"
            :key="history.id"
            :item="history"
            :numb="index"
            @fetchJob="fetchHistory"
          >
          </history-list>
        </tbody>
      </table>
    </div>
  </div>
  <!-- history -->
</template>

<script>
import historyList from "../components/listHistory.vue";
import axios from "axios";
export default {
  name: "dashboard",
  data() {
    return {
      list: [],
    };
  },
  components: {
    historyList,
  },
  methods: {
    fetchHistory() {
      const url = "http://localhost:3000";
      axios({
        method: "GET",
        url: `${url}/history`,
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
  },
  created() {
    this.fetchHistory();
  },
};
</script>

<style>
</style>