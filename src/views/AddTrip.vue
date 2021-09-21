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
                    <select v-model="mountainId" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full">
                      <option value="null" selected disabled> ---- SELECT MOUNT ----</option>
                      <option v-for="mountain in mountains" :key="mountain.id"  :value="mountain.id">{{mountain.name}}</option>
                    </select>
                  </div>
                  <div class="relative mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="full-name"
                      >Choose Your Track</label
                    >
                    <select v-model="trackId" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full">
                      <option value="null" selected disabled> ---- SELECT TRACK ----</option>
                      <option v-for="track in trackList" :key="track.id" :value="track.id">{{track.name}}</option>
                    </select>
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="message"
                      >Description</label
                    ><textarea
                      v-model="description"
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
                      >Choose Schedule</label
                    >
                    <input v-model="schedule" type="date" class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                  
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
                      @click.prevent="createTrip"
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
    name: 'CreateTrip',
    data: function() {
      return {
        mountainId: null,
        trackId: null,
        trackList: [],
        mountDescription: '',
        description: '',
        schedule: null
      }
    },
    watch: {
      mountainId: function(){
        const mount = this.mountains.filter(el => el.id == this.mountainId)
        this.trackList = mount[0].Tracks
        let status = 'aktif'
        if(!mount[0].status){status = 'Tidak aktif'}
        this.mountDescription = `Gunung Semeru
Ketinggian : ${mount[0].height},
Status Gunung : ${status},
Lokasi: ${mount[0].lokasi}
`
        this.description = this.mountDescription
      },
      trackId: function(){
        const track = this.trackList.filter(el => el.id == this.trackId)
        this.description = this.mountDescription + `
Pilihan jalur : ${track[0].name},
Jarak pendakian : ${track[0].distance} km,
Estimasi waktu tempuh : ${track[0].tracking_time} jam,
transport : ${track[0].transport}
`
      }
    },
    computed: {
      mountains: function(){
        return this.$store.state.mountains
      }
    },
    methods: {
      createTrip: function(){
        const payload = {
          MountId: this.mountainId,
          TrackId: this.trackId,
          schedule: this.schedule
        }
        this.$store.dispatch('createTrip', payload)
        .then(() => {
          this.$router.push({name: 'MyTrip'})
        })
        .catch(err => {
          const errors = err.response.data.message
          if(typeof errors !== 'string'){
            errors.forEach(el => {
              this.$toasted.show(el).goAway(2000)
            });
          } else {
            this.$toasted.show(errors).goAway(2000)
          }
        })
      },
      getWeather: function(){
        this.$store.dispatch('getWeather', {
          lat: 33.44,
          lon: -94.04
        })
        .then(response => {
          console.log(response.data);
          // 
        })
        .catch(err => {
          console.log(err.response);
        })
      }
    },
    created: function(){
      // this.getWeather()
      this.$store.dispatch('getMountains')
    }
}
</script>

<style>

</style>

