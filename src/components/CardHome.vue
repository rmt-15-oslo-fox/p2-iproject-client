<template>
  <div class="card" style="width: 22rem">
    <img :src="product.img" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <p class="card-text">
        Price: {{product.price}}
      </p>
      <a href="#" class="btn btn-primary">Buy Now</a>
    </div>
  </div>
</template>

<script>
export default {
name: 'cardhome',
props:["product"]
};
</script>

<style>
</style>