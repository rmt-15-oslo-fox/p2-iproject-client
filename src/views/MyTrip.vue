<template>
  <div>
      <section class="py-20 mt-relative block 28 p min-h-screen lg:pt-0 bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="flex justify-center pt-20">
            <div class="w-full px-4">
              <div
                class="flex min-w-0 shadow-lg rounded-lg bg-gray-300"
              >
                <div class="flex-auto min-h-96 p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold">My Trip</h4>
                  <div v-if="myTrip.length == 0" class="flex flex-col justify-center mx-20">
                    <h4 class="mt-20 text-2xl font-semibold">Sorry</h4>
                    <p class="mt-5 font-semibold">You dont have any trip.</p>
                    <div>
                      <router-link :to="{name: 'AllTrip'}" class="text-blue-600">Join</router-link> the available trip, or 
                      <router-link :to="{name: 'AddTrip'}" class="text-blue-600">Create</router-link> a new one.
                    </div>
                  </div>
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