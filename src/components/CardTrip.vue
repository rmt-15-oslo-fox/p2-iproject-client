<template>
  <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
    <div
      class="
        relative
        flex flex-col
        min-w-0
        break-words
        bg-white
        w-full
        mb-8
        shadow-lg
        rounded-lg
      "
    >
      <div class="px-4 py-5 flex-auto">
        <img
          class="rounded-t-2xl"
          style="width: 350px; height: 200px"
          :src="trip.Mountain.imageUrl"
        />
        <h6 class="text-xl font-semibold">{{trip.Mountain.name}}</h6>
        <p>Tanggal: {{schedule}}</p>
        <p>Jalur Pendakian: {{trip.Track.name}}</p>
        <p class="mt-2 mb-4 text-gray-600">
          Jumlah anggota : {{trip.Users.length}} orang
        </p>
        <button
            v-if="!isJoined"
            @click.prevent="joinTrip"
            class="bg-blue-300 text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
            type="button"
            style="transition: all 0.15s ease 0s;"
        >
            Join
        </button>
        <button
            v-else
            disabled
            class="bg-red-300 text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
            type="button"
            style="transition: all 0.15s ease 0s;"
        >
            Joined
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['trip'],
  computed: {
    schedule: function(){
      return new Date(this.trip.schedule).toUTCString().toString().slice(5,17)
    },
    isJoined: function(){
      if(!localStorage.getItem('access_token')){
        return false
      } else if(this.trip.Users.map(el => el.id).includes(+localStorage.getItem('userId'))){
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    joinTrip: function(){
      if(!this.$store.state.isLogin){
        return this.$toasted.show('You must login first').goAway(2000)
      }
      this.$store.dispatch('joinTrip', {TripId:this.trip.id})
      .then(() => {
        this.$toasted.show('Successfully Join Trip').goAway(2000)
        this.$router.push({name: 'MyTrip'})
      })
      .catch(err => {
        console.log(err.response.data.message);
      })
    }
  }
};
</script>

<style>
</style>