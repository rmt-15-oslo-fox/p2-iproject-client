<template>
<section>
    <nav-bar></nav-bar>
  <div class="row cardPage">
      <card-home v-for="product in products" :key="product.id" :product="product"></card-home>
  </div>
</section>
</template>

<script>
import NavBar from '../components/Navbar.vue'
import CardHome from '../components/CardHome.vue'
export default {
    name: 'Homepage',
    components:{
        NavBar,
        CardHome
    },
    computed:{
        products(){
            return this.$store.state.products
        }
    },
    created(){
        this.$store.dispatch('productFetch')
    }
};
</script>

<style>
</style>