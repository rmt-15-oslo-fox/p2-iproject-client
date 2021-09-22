<template>
  <div id="dashboard">
    <h1>Remempay</h1>
    <Navbar></Navbar><br /><br />
    <div class="container w-75 my-5 bg-light rounded shadow" id="login-page">
      <div class="row p-40 d-flex align-items-center">
        <div class="col">
          <h3>Welcome, {{ name }}</h3>
          <h5>Your balance is:</h5>
          <h1>{{ balance }}</h1>
        </div>
      </div>
    </div>
    <div class="container w-75 my-5 bg-light rounded shadow" id="login-page">
      <div class="row p-40 d-flex align-items-center">
        <div class="col">
          <h3>Convert Currency</h3>
          <form id="convert-form" v-on:submit.prevent="convert">
            <div>
              <input
                v-model="currencyFrom"
                type="CurrencyFrom"
                id="CurrencyFrom"
                placeholder="from"
              /><br /><br />
            </div>
            <div>
              <input
                v-model="currencyTo"
                type="CurrencyTo"
                id="CurrencyTo"
                placeholder="to"
              /><br /><br />
            </div>
            <div>
              <input
                v-model="amount"
                type="Amount"
                id="Amount"
                placeholder="amount"
              /><br /><br />
            </div>
            <div id="login-button-container">
              <div>
                <button class="login-button rounded" type="submit">
                  <span>Convert</span>
                </button>
              </div>
            </div>
            <h4 v-if="convertResult" class="convertResult">{{ converted }}</h4>
            <br />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Dashboard",
  data() {
    return {
      currencyFrom: "",
      currencyTo: "",
      amount: 0,
      convertResult: false
    };
  },
  methods: {
    convert: function() {
      let payload = {
        currencyFrom: this.currencyFrom,
        currencyTo: this.currencyTo,
        amount: this.amount
      };
      this.$store.dispatch("fetchConverted", payload);
      this.convertResult = true;
    }
  },
  computed: {
    name: function() {
      return this.$store.state.name;
    },
    balance: function() {
      return this.$store.state.balance;
    },
    converted: function() {
      return this.$store.state.convert;
    }
  },
  components: {
    Navbar
  },
  created() {
    if (!localStorage.access_token) {
      this.$router.push("/");
    }
    this.$store.dispatch("fetchInfo");
    this.$store.dispatch("fetchReminder");
    this.$store.dispatch("fetchStatus");
  }
};
</script>

<style></style>
