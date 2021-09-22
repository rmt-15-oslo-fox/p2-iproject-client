<template>
  <div>
    <Navbar></Navbar><br /><br />
    <h1>Payment Status</h1>
    <div id="home-page">
      <div class="row flex justify-content-center">
        <div class="card col-4 m-2" v-for="data in status" :key="data.id">
          <div class="card-body text-center">
            <h5>Payment from:</h5>
            <h5 class="card-title">{{ data.User.name }}</h5>
            <h5>Payment amount</h5>
            <h5>{{ data.amount }}</h5>
            <h5>Paid Amount:</h5>
            <h5>{{ data.paid }}</h5>
            <h5>Payment deadline:</h5>
            <h5>{{ data.deadline }}</h5>
            <button type="button" class="rounded" v-on:click="destroy(data.id)">
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Status",
  components: {
    Navbar
  },
  computed: {
    status() {
      console.log(this.$store.state.status);
      return this.$store.state.status;
    }
  },
  methods: {
    destroy: function(id) {
      const URL = "http://localhost:4000";
      axios
        .delete(`${URL}/list/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(() => {
          this.$router.push("/status");
        })
        .catch(err => {
          console.log(err.response);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message
          });
        });
    }
  },
  created() {
    this.$store.dispatch("fetchStatus");
  }
};
</script>

<style></style>
