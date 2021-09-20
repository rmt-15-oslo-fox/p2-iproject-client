<template>
  <div>
      <section class="py-20 mt-relative block 28 p lg:pt-0 bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="flex justify-center pt-20">
            <div class="w-full px-4">
              <div
                class="flex flex-row min-w-0  shadow-lg rounded-lg bg-gray-300"
              >
                <div class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold">Create Your Journey</h4>
                  
                  <div class="relative mb-3 mt-8">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="full-name"
                      >Choose Your Destination</label
                    >
                    <select class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full">
                      <option value="">Gunung 1</option>
                      <option value="">Gunung 1</option>
                      <option value="">Gunung 1</option>
                      <option value="">Gunung 1</option>
                    </select>
                  </div>
                  <div class="relative mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="full-name"
                      >Choose Your Track</label
                    >
                    <select class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full">
                      <option value="">Gunung 1</option>
                      <option value="">Gunung 1</option>
                      <option value="">Gunung 1</option>
                      <option value="">Gunung 1</option>
                    </select>
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="message"
                      >Description</label
                    ><textarea
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."
                    ></textarea>
                  </div>
                </div>
                <div class="flex-auto p-5 lg:p-10">
                  <div class="relative mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="full-name"
                      >Choose Date</label
                    >
                    <input type="date" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                  
                </div>

                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="message"
                      >Perkiraan Cuaca</label
                    ><textarea
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."
                      disabled
                    ></textarea>
                  </div>
                  <div class="text-center mt-6">
                    <button
                      class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style="transition: all 0.15s ease 0s;"
                    >
                      Save
                    </button>
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
export default {
    name: 'CreateTrip'
}
</script>

<style>

</style>

