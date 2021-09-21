<template>
  <div>
      <section class="py-20 mt-relative block 28 p lg:pt-0 bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="flex justify-center pt-20">
            <div class="w-full px-4">
              <div
                class="flex min-w-0  shadow-lg rounded-lg bg-gray-300"
              >
                <div class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold">My Trip</h4>
                  
                  <!-- ListMytrip -->
                  <card-my-trip v-for="(trip, i) in myTrip" :key="i" :trip="trip" :index='i'></card-my-trip>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import CardMyTrip from '../components/CardMyTrip.vue'
export default {
    name: 'MyTrip',
    components: {
        CardMyTrip
    },
    computed: {
      myTrip: function(){
        return this.$store.state.mytrips
      }
    },
    created(){
      this.$store.dispatch('getMyTrip')
    }
}
</script>

<style>

</style>