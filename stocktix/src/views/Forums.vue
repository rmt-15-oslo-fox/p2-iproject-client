<template>
  <div>
    <NavBar />
    <SearchForm />
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import SearchForm from '@/components/SearchForm.vue'
export default {
  name: 'Forums',
    components: {
    NavBar,
    Footer,
    SearchForm
  }
}
</script>

<style>

</style>