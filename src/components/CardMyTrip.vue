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
                  <h6 class="text-xl font-semibold">Members</h6>
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
                  <h6 class="text-xl font-semibold">Peralatan</h6>
                  <hr />
                  <div class="mt-2 mb-2 text-gray-600">
                    <div class="flex-flex-col">
                      <div class="flex flex-col mr-5">
                        <div class="mt-3">
                          <input disabled checked type="checkbox" /> Tenda
                        </div>
                        <div class="mt-3"><input type="checkbox" /> Tenda</div>
                        <div class="mt-3"><input type="checkbox" /> Tenda</div>
                      </div>
                    </div>
                  </div>
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
                  <h6 class="text-xl font-semibold">Chat</h6>
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