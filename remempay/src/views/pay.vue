<template>
  <div id="sign-up">
    <Navbar></Navbar>
    <form
      id="register-form"
      v-on:submit.prevent="pay(data.id)"
      style="padding: 0 600px 0 600px; margin-top: 150px"
    >
      <h1>Pay</h1>
      <div>
        <label>Payment total</label><br />
        <h5>{{ data.amount }}</h5>
      </div>
      <br />
      <div>
        <label>Paid</label><br />
        <h5>{{ data.paid }}</h5>
      </div>
      <br />
      <div>
        <label>How much would you pay?</label><br />
        <input
          name="payAmount"
          type="payAmount"
          class="payAmount"
          id="payAmount"
          placeholder="pay amount"
          v-model="payAmount"
        /><br />
      </div>
      <br />
      <div id="register-button-container">
        <button type="submit" class="rounded"><span>Pay</span></button>
        <button
          type="button"
          id="cancel"
          class="rounded"
          v-on:click="changePage()"
        >
          <span>Cancel</span>
        </button>
      </div>
    </form>
    <HFooter></HFooter>
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
import Navbar from "../components/Navbar.vue";
import axios from "axios";
import Swal from "sweetalert2";
import navbar from "../components/navbar.vue";
export default {
  components: {
    Navbar,
    HFooter
  },
  name: "pay",
  data() {
    return {
      payAmount: 0
    };
  },
  computed: {
    data: function() {
      return this.$store.state.reminderById;
    }
  },
  methods: {
    pay: function(id) {
      const URL = "http://localhost:4000";
      axios
        .put(
          `${URL}/list/${id}`,
          {
            amount: this.payAmount
          },
          {
            headers: {
              access_token: localStorage.access_token
            }
          }
        )
        .then(() => {
          this.$router.push("/reminder");
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message
          });
        });
    }
  }
};
</script>

<style></style>
