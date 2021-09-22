<template>
  <div class="main-container">
    <navbar></navbar>
    <h1>Your Carts</h1>
    <table class="table table-striped">
      <thead style="background-color: #ffc107">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Size</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody class="table-dark">
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.size }}</td>
          <td>{{ product.type }}</td>
          <td>{{ product.price }}</td>
        </tr>

        <tr>
          <td style="opacity: 0; border-bottom: 0"></td>
          <td style="opacity: 0; border-bottom: 0"></td>
          <td>Subtotal</td>
          <td>{{ total }}</td>
        </tr>
        <tr class="payAll">
          <td style="opacity: 0; border-bottom: 0"></td>
          <td style="opacity: 0; border-bottom: 0"></td>
          <td style="opacity: 0; border-bottom: 0"></td>
          <td style="color: white">
            <button @click="payAll(total)" id="pay-button">Pay!</button>
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "myCard",
  components: {
    Navbar,
  },
  computed: {
    products() {
      return this.$store.state.carts;
    },
    total() {
      let subtotal = 0;
      this.products.forEach((el) => {
        subtotal += el.price;
      });
      return subtotal;
    },
  },
  methods:{
    payAll(total){
      this.$store.dispatch('makeOrder', total)
      
    }

  }
};
</script>

<style>
.main-container {
  width: 100%;
  margin: auto;
  padding: 20px;
}

h1 {
  color: #171717;
  float: left;
  font-weight: 550;
}

.main-container .add-movie {
  margin-top: 10px;
  float: right;
  font-weight: 500;
}

thead {
  text-align: center;
}
a {
  justify-items: flex-end;
}
.payAll {
  background-color: #fff;
}
</style>