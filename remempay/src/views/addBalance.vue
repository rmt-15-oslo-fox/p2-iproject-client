<template>
  <div>
    <h1>Remempay</h1>
    <Navbar></Navbar><br /><br />
    <div class="container w-75 my-5 bg-light rounded shadow" id="login-page">
      <div class="row p-40 d-flex align-items-center">
        <div class="col">
          <form id="login-form" v-on:submit.prevent="charge">
            <h1>How much would you like to add?</h1>
            <div>
              <input
                v-model="amount"
                type="amount"
                id="amount"
                placeholder="0"
              /><br /><br />
            </div>
            <div id="login-button-container">
              <div>
                <button class="login-button rounded" type="submit">
                  <span>add</span>
                </button>
                <button
                  type="button"
                  id="cancel"
                  class="rounded"
                  v-on:click="changePage()"
                >
                  <span>Cancel</span>
                </button>
              </div>
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
    <HFooter></HFooter>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import HFooter from "vue-hacktiv8-footer";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "ChargePage",
  date() {
    return {
      amount: 0
    };
  },
  components: {
    Navbar,
    HFooter
  },
  methods: {
    charge: function() {
      const URL = "http://localhost:4000";
      axios
        .post(
          `${URL}/list/balance`,
          {
            amount: this.amount
          },
          {
            headers: {
              access_token: localStorage.access_token
            }
          }
        )
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message
          });
        });
    },
    changePage: function() {
      this.$router.push("/dashboard");
    }
  }
};
</script>

<style></style>
