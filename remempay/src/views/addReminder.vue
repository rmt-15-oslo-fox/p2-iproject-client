<template>
  <div id="sign-up">
    <form
      id="register-form"
      v-on:submit.prevent="add"
      style="padding: 0 600px 0 600px; margin-top: 150px"
    >
      <h1>Add Reminder</h1>
      <div>
        <label>Payment receiver ID</label><br />
        <input
          name="receiverId"
          type="receiverId"
          class="receiverId-register"
          id="receiverId-register"
          placeholder="the ID for patment receiver"
          v-model="receiverId"
        />
      </div>
      <br />
      <div>
        <label>Payment amount</label><br />
        <input
          name="amount"
          type="amount"
          class="amount-register"
          id="amount-register"
          placeholder="your amount"
          v-model="amount"
        />
      </div>
      <br />
      <div>
        <label>Payment description</label><br />
        <input
          name="description"
          type="description"
          class="description-register"
          id="description-register"
          placeholder="e.g.: to pay for food expenses"
          v-model="description"
        /><br />
      </div>
      <br />
      <div>
        <label>Payment deadline</label><br />
        <input
          name="deadline"
          type="deadline"
          class="deadline-register"
          id="deadline-register"
          placeholder="deadline"
          v-model="deadline"
        /><br />
      </div>
      <br />
      <div id="register-button-container">
        <button type="submit" class="rounded"><span>Add</span></button>
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
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "addReminder",
  data() {
    return {
      receiverId: 0,
      amount: 0,
      description: "",
      deadline: ""
    };
  },
  methods: {
    add: function() {
      const URL = "http://localhost:4000";
      axios
        .post(
          `${URL}/list`,
          {
            receiverId: this.receiverId,
            amount: this.amount,
            description: this.description,
            deadline: this.deadline
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
    },
    changePage: function() {
      this.$router.push("/dashboard");
    }
  }
};
</script>

<style></style>
