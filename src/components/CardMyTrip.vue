<template>
  <div>
    <div @click="showDetail" class="relative mb-1 mt-4">
      <button
        class="
          w-full
          py-2
          text-left
          bg-white
          text-gray-800
          active:bg-gray-100
          text-sm
          font-semibold
          uppercase
          px-4
          py-2
          rounded
          shadow
          hover:shadow-md
          outline-none
          focus:outline-none
          normal-case
        "
        type="button"
        style="transition: all 0.15s ease 0s"
      >
        {{ index + 1 }}. Gn. {{ trip.Mountain.name }} -- {{ trip.Track.name }} --
        {{ schedule }}
      </button>
    </div>
    <div v-if="openDetail" class="detail">
      <div >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto mt-1">
          <li class="flex items-center">
            <button
              @click="showForecast"
              class="
                bg-yellow-500
                text-white
                active:bg-gray-100
                text-xs
                font-bold
                uppercase
                px-4
                py-2
                rounded
                shadow
                hover:shadow-md
                outline-none
                focus:outline-none
                lg:mr-1
                lg:mb-0
                ml-3
                mb-3
              "
              type="button"
              style="transition: all 0.15s ease 0s"
            >
              Prakiraan Cuaca
            </button>
            <AddToCalendar
              :buttonText="'Save to calendar'"
              :details="`Naik Gunung ${trip.Mountain.name}`"
              :endTime="new Date(`${schedule}`)"
              :location="`${trip.Mountain.lokasi}`"
              :startTime="new Date(`${oneWeekBefore}`)"
              :title="`Naik Gunung ${trip.Mountain.name}`"
              class="
                bg-blue-500
                text-white
                active:bg-gray-100
                text-xs
                font-bold
                uppercase
                px-4
                py-2
                rounded
                shadow
                hover:shadow-md
                outline-none
                focus:outline-none
                lg:mr-1
                lg:mb-0
                ml-3
                mb-3
              "
              type="button"
              style="transition: all 0.15s ease 0s"
            />
            <button
              @click.prevent="deleteHandler"
              class="
                bg-red-500
                text-white
                active:bg-gray-100
                text-xs
                font-bold
                uppercase
                px-4
                py-2
                rounded
                shadow
                hover:shadow-md
                outline-none
                focus:outline-none
                lg:mr-1
                lg:mb-0
                ml-3
                mb-3
              "
              type="button"
              style="transition: all 0.15s ease 0s"
            >
              finished
            </button>
          </li>
        </ul>
      </div>
      <div
        v-if="!showForeCast"
        class="
          w-full
          mt-1
          py-5
          text-left
          bg-white
          text-gray-800
          active:bg-gray-100
          text-xs
          font-bold
          uppercase
          px-4
          py-2
          rounded
          shadow
          hover:shadow-md
          outline-none
          focus:outline-none
        "
      >
        <div class="flex flex-row h-96">
          <div class="w-1/5">
            <div class="pr-5">
              <div
                class="
                  flex flex-col
                  min-w-0
                  break-words
                  bg-white
                  w-full
                  shadow-lg
                  rounded-lg
                  h-96
                "
              >
                <div class="px-4 py-5 flex-auto">
                  <div class="flex flex-row justify-between">
                    <h6 class="text-lg font-semibold">Peralatan</h6>
                    <button class="mt-1 text-sm" @click="$modal.show('my-modal')">
                    <i class="fas fa-plus-circle"></i>
                    </button>
                  </div>
                  <hr />
                  <div class="mt-2 mb-2 text-gray-600">
                    <div class="flex-flex-col">
                      <div class="flex flex-col mr-5">
                        <div class="mt-3 normal-case">
                          <h1>You dont have any tools</h1>
                        </div>
                        <t-modal name="my-modal">
                          <div class="flex flex-col justify-start text-center">
                            <div>
                              <h6 class="text-lg font-semibold">Pilih peralatan</h6>
                              <hr>
                              <div class="flex flex row justify-evenly">
                                <div>
                                  <h6 class="text-sm mt-5 normal-case">Nama Alat</h6>
                                  <hr>
                                </div>
                                <div>
                                  <h6 class="text-sm mt-5 normal-case">Jumlah</h6>
                                  <hr>
                                </div>
                              </div>
                              <div v-for="i in 7" :key="i" class="flex flex row justify-evenly">
                                <div class="text-left mt-5 -ml-12">
                                    <input type="checkbox">
                                    <span class="ml-2 normal-case">Tenda</span>
                                  </div>
                                  <div class="text-left mt-5 ml-16">
                                    <input type="number" placeholder="0" class="border-0 px-3 py-2 -mt-1 placeholder-gray-400 text-gray-700 bg-white rounded shadow focus:outline-none focus:ring w-20 h-5">
                                  </div>
                              </div>
                              <div class="mt-5">Add custom tools</div>
                              <div class="flex flex row justify-center">
                                <div class="text-left mt-5 -ml-12">
                                    <input type="text" placeholder="type your tools" class=" border-0 px-3 py-2 -mt-1 placeholder-gray-400 text-gray-700 bg-white rounded shadow focus:outline-none focus:ring w-36 h-5">
                                  </div>
                                  <div class="text-left mt-5 ml-16">
                                    <input type="number" placeholder="0" class="border-0 px-3 py-2 -mt-1 ml-5 placeholder-gray-400 text-gray-700 bg-white rounded shadow focus:outline-none focus:ring w-20 h-5">
                                  </div>
                              </div>
                              <button class="
                                bg-yellow-500
                                text-white
                                active:bg-gray-100
                                text-xs
                                font-bold
                                px-4
                                py-2
                                rounded
                                shadow
                                hover:shadow-md
                                outline-none
                                focus:outline-none
                                lg:mr-1
                                lg:mb-0
                                mb-5
                                mt-5
                                ml-5
                              ">
                                Save
                              </button>
                            </div>
                          </div>
                        </t-modal>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/5">
            <div class="w-3/12 w-full pr-5">
              <div
                class="
                  flex flex-col
                  min-w-0
                  bg-white
                  w-full
                  shadow-lg
                  rounded-lg
                  h-96
                "
              >
                <div class="px-4 py-5 flex-auto">
                  <h6 class="text-lg font-semibold">Members</h6>
                  <hr class="mb-5" />
                  <ul
                    v-for="(member, i) in members"
                    :key="member"
                    class="mb-3 mt-3"
                  >
                    <li class="normal-case">{{ i + 1 }}. {{ member }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-auto">
            <div class="w-full pr-5">
              <div
                class="
                  flex flex-col
                  min-w-0
                  break-words
                  bg-white
                  w-full
                  shadow-lg
                  rounded-lg
                  h-96
                "
              >
                <div class="px-4 py-5">
                  <h6 class="text-lg font-semibold">Chat</h6>
                  <hr />
                  <!-- chat Area -->
                  <chat-room :idRoom="trip.id"></chat-room>
                  <chat-input :idRoom="trip.id"></chat-input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- forecast -->
      <weather v-else @closeForeCast="closeForeCast" :data="weather" :lokasi="location" ></weather>
    </div>
  </div>
</template>

<script>
import { AddToCalendar } from "vue-add-events-to-google-calendar";
import ChatRoom from '../components/ChatRoom.vue'
import ChatInput from '../components/ChatInput.vue'
import Weather from '../components/Weather.vue'

export default {
  name: "CardMytrip",
  components: {
    AddToCalendar,
    ChatRoom,
    ChatInput,
    Weather
  },
  data: function () {
    return {
      openDetail: false,
      showForeCast: false,
      weather: []
    };
  },
  props: ["trip", "index"],
  computed: {
    location: function(){
      return this.trip.Mountain.lokasi
    },
    schedule: function () {
      return new Date(this.trip.schedule).toUTCString().toString().slice(5, 17);
    },
    oneWeekBefore: function () {
      let date = new Date(this.trip.schedule);
      date.setDate(date.getDate() - 7);
      return date;
    },
    members: function () {
      return this.trip.Users.map((el) => el.name);
    },
  },
  methods: {
    showDetail: function () {
      if (this.openDetail) {
        this.openDetail = false
        this.showForeCast = false
      } else {
        this.openDetail = true;
      }
    },
    deleteHandler: function(){
      this.$toasted.show('Are u sure to delete this?',{
        action: [
          {
            text: "Cancel",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            },
          },
          {
            text: "Yes",
            onClick: (e, toastObject) => {
              toastObject.goAway(0)
              this.deleteTrip()
            }
          },
        ],
      });
    },
    deleteTrip: function () {
      this.$store
        .dispatch("deleteTrip", this.trip.id)
        .then((response) => {
          this.$store.dispatch("getMyTrip");
          this.openDetail = false;
          this.$toasted.show(response.data.message).goAway(2000);
        })
        .catch((err) => {
          this.$toasted.show(err.response.data.message).goAway(2000);
        });
    },
    showForecast: function(){
      const location = this.trip.Mountain.lokasi
      this.$store.dispatch('getWeather', location)
        .then(response => {
          this.weather = response.data
          this.weather.map(el => {
            if(el.cuaca.includes('hujan')){
              el.image = require('@/assets/rainy.svg')
            } else if (el.cuaca.includes('berawan')){
              el.image = require('@/assets/cloudy.svg')
            } else if (el.cuaca.includes('cerah')){
              el.image = require('@/assets/sun.svg')
            } else if (el.cuaca.includes('pecah')){
              el.image = require('@/assets/storm.svg')
            } else {
              el.image = require('@/assets/SunCloudy.svg')
            }
            return el
          })
          this.showForeCast = true
        })
        .catch(err => {
          this.$toasted.show(err.response.data.message).goAway(2000);
        })
    },
    closeForeCast: function(){
      this.showForeCast = false
    }
  },
};
</script>

<style>
</style>