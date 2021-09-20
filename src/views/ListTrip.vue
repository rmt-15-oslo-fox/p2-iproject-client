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
                  <h4 class="text-2xl font-semibold">Join with another trip</h4>
                  
                  <div class="flex flex-wrap">
                        <!-- Card -->
                        <card></card>
                        <card></card>
                        <card></card>
                        <card></card>

                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import Card from '../components/CardTrip.vue'
export default {
    name: 'ListTrip',
    components: {
        Card
    }
}
</script>

<style>

</style>