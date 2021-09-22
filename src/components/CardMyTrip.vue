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
        {{ index + 1 }}. Gn. {{ trip.Mountain.name }} --
        {{ trip.Track.name }} --
        {{ schedule }}
      </button>
    </div>
    <div v-if="openDetail" class="detail">
      <div>
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
          <div class="w-1/4">
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
                    <h6 class="text-lg font-semibold normal-case">Peralatan</h6>
                    <button
                      class="mt-1 text-sm"
                      @click="$modal.show('my-modal')"
                    >
                      <i class="fas fa-plus-circle"></i>
                    </button>
                  </div>
                  <hr />
                  <div class="mt-2 mb-2 text-gray-600">
                    <div class="flex-flex-col">
                      <div class="flex flex-col mr-5">
                        <div
                          v-if="listEquipment.length == 0"
                          class="mt-3 normal-case"
                        >
                          <h1>You dont have any tools</h1>
                        </div>
                        <div v-else class="mt-3 normal-case flex flex-col">
                          <div v-for="item in updateList" :key="item">
                            <div class="mb-2 flex flex-row">
                              <input
                                :disabled="item.jumlah <= +(item.hasFill)"
                                :checked="item.jumlah <= +(item.hasFill)"
                                type="checkbox"
                                @change="updateEquipment(item.id)"
                              />
                              <div class="ml-1">
                                {{ item.name }} ({{ +(item.hasFill) }} of
                                {{ item.jumlah }})
                              </div>
                            </div>
                          </div>
                        </div>
                        <t-modal name="my-modal">
                          <div class="flex flex-col justify-start text-center">
                            <div>
                              <h6 class="text-lg font-semibold">
                                Pilih peralatan
                              </h6>
                              <hr />
                              <div
                                class="
                                  flex flex
                                  row
                                  justify-between
                                  ml-20
                                  mr-20
                                "
                              >
                                <div>
                                  <h6 class="text-sm mt-5 normal-case">
                                    Nama Alat
                                  </h6>
                                  <hr />
                                </div>
                                <div>
                                  <h6 class="text-sm mt-5 normal-case">
                                    Jumlah
                                  </h6>
                                  <hr />
                                </div>
                              </div>

                              <!-- CheckBox -->
                              <div class="flex flex row justify-between mr-16">
                                <div class="text-left mt-5 ml-10">
                                  <input v-model="tenda_4" type="checkbox" />
                                  <span class="ml-2 normal-case"
                                    >Tenda Kapasitas 4</span
                                  >
                                </div>
                                <div class="text-left mt-5 ml-24">
                                  <input
                                    :disabled="!tenda_4"
                                    v-model="tenda_4_count"
                                    type="number"
                                    min="1"
                                    max="100"
                                    placeholder="0"
                                    class="
                                      border-0
                                      px-3
                                      py-2
                                      -mt-1
                                      placeholder-gray-400
                                      text-gray-700
                                      bg-white
                                      rounded
                                      shadow
                                      focus:outline-none
                                      focus:ring
                                      w-20
                                      h-5
                                    "
                                  />
                                </div>
                              </div>

                              <div class="flex flex row justify-between mr-16">
                                <div class="text-left mt-5 ml-10">
                                  <input v-model="tenda_2" type="checkbox" />
                                  <span class="ml-2 normal-case"
                                    >Tenda Kapasitas 2</span
                                  >
                                </div>
                                <div class="text-left mt-5 ml-24">
                                  <input
                                    :disabled="!tenda_2"
                                    v-model="tenda_2_count"
                                    type="number"
                                    min="1"
                                    max="100"
                                    placeholder="0"
                                    class="
                                      border-0
                                      px-3
                                      py-2
                                      -mt-1
                                      placeholder-gray-400
                                      text-gray-700
                                      bg-white
                                      rounded
                                      shadow
                                      focus:outline-none
                                      focus:ring
                                      w-20
                                      h-5
                                    "
                                  />
                                </div>
                              </div>

                              <div class="flex flex row justify-between mr-16">
                                <div class="text-left mt-5 ml-10">
                                  <input v-model="carriel" type="checkbox" />
                                  <span class="ml-2 normal-case">Carriel</span>
                                </div>
                                <div class="text-left mt-5 ml-24">
                                  <input
                                    :disabled="!carriel"
                                    v-model="carriel_count"
                                    type="number"
                                    min="1"
                                    max="100"
                                    placeholder="0"
                                    class="
                                      border-0
                                      px-3
                                      py-2
                                      -mt-1
                                      placeholder-gray-400
                                      text-gray-700
                                      bg-white
                                      rounded
                                      shadow
                                      focus:outline-none
                                      focus:ring
                                      w-20
                                      h-5
                                    "
                                  />
                                </div>
                              </div>

                              <div class="flex flex row justify-between mr-16">
                                <div class="text-left mt-5 ml-10">
                                  <input v-model="matras" type="checkbox" />
                                  <span class="ml-2 normal-case">Matras</span>
                                </div>
                                <div class="text-left mt-5 ml-24">
                                  <input
                                    :disabled="!matras"
                                    v-model="matras_count"
                                    type="number"
                                    min="1"
                                    max="100"
                                    placeholder="0"
                                    class="
                                      border-0
                                      px-3
                                      py-2
                                      -mt-1
                                      placeholder-gray-400
                                      text-gray-700
                                      bg-white
                                      rounded
                                      shadow
                                      focus:outline-none
                                      focus:ring
                                      w-20
                                      h-5
                                    "
                                  />
                                </div>
                              </div>

                              <div class="flex flex row justify-between mr-16">
                                <div class="text-left mt-5 ml-10">
                                  <input
                                    v-model="cooking_set"
                                    type="checkbox"
                                  />
                                  <span class="ml-2 normal-case"
                                    >Cooking Set</span
                                  >
                                </div>
                                <div class="text-left mt-5 ml-24">
                                  <input
                                    :disabled="!cooking_set"
                                    v-model="cooking_set_count"
                                    type="number"
                                    min="1"
                                    max="100"
                                    placeholder="0"
                                    class="
                                      border-0
                                      px-3
                                      py-2
                                      -mt-1
                                      placeholder-gray-400
                                      text-gray-700
                                      bg-white
                                      rounded
                                      shadow
                                      focus:outline-none
                                      focus:ring
                                      w-20
                                      h-5
                                    "
                                  />
                                </div>
                              </div>

                              <div class="flex flex row justify-between mr-16">
                                <div class="text-left mt-5 ml-10">
                                  <input v-model="kompor" type="checkbox" />
                                  <span class="ml-2 normal-case">Kompor</span>
                                </div>
                                <div class="text-left mt-5 ml-24">
                                  <input
                                    :disabled="!kompor"
                                    v-model="kompor_count"
                                    type="number"
                                    min="1"
                                    max="100"
                                    placeholder="0"
                                    class="
                                      border-0
                                      px-3
                                      py-2
                                      -mt-1
                                      placeholder-gray-400
                                      text-gray-700
                                      bg-white
                                      rounded
                                      shadow
                                      focus:outline-none
                                      focus:ring
                                      w-20
                                      h-5
                                    "
                                  />
                                </div>
                              </div>

                              <div class="flex flex row justify-between mr-16">
                                <div class="text-left mt-5 ml-10">
                                  <input v-model="tabung_gas" type="checkbox" />
                                  <span class="ml-2 normal-case"
                                    >Tabung Gas Hi-Cook</span
                                  >
                                </div>
                                <div class="text-left mt-5 ml-24">
                                  <input
                                    :disabled="!tabung_gas"
                                    v-model="tabung_gas_count"
                                    type="number"
                                    min="1"
                                    max="100"
                                    placeholder="0"
                                    class="
                                      border-0
                                      px-3
                                      py-2
                                      -mt-1
                                      placeholder-gray-400
                                      text-gray-700
                                      bg-white
                                      rounded
                                      shadow
                                      focus:outline-none
                                      focus:ring
                                      w-20
                                      h-5
                                    "
                                  />
                                </div>
                              </div>

                              <div class="flex flex row justify-between mr-16">
                                <div class="text-left mt-5 ml-10">
                                  <input v-model="flysheet" type="checkbox" />
                                  <span class="ml-2 normal-case"
                                    >Fly sheet</span
                                  >
                                </div>
                                <div class="text-left mt-5 ml-24">
                                  <input
                                    :disabled="!flysheet"
                                    v-model="flysheet_count"
                                    type="number"
                                    min="1"
                                    max="100"
                                    placeholder="0"
                                    class="
                                      border-0
                                      px-3
                                      py-2
                                      -mt-1
                                      placeholder-gray-400
                                      text-gray-700
                                      bg-white
                                      rounded
                                      shadow
                                      focus:outline-none
                                      focus:ring
                                      w-20
                                      h-5
                                    "
                                  />
                                </div>
                              </div>
                              <!-- custom tools -->
                              <div class="mt-5">Add custom tools</div>
                              <div class="flex flex row justify-between mr-16">
                                <div class="text-left mt-5 ml-10">
                                  <input
                                    v-model="custom"
                                    type="text"
                                    placeholder="type your tools"
                                    class="
                                      border-0
                                      px-3
                                      py-2
                                      -mt-1
                                      placeholder-gray-400
                                      text-gray-700
                                      bg-white
                                      rounded
                                      shadow
                                      focus:outline-none
                                      focus:ring
                                      w-36
                                      h-5
                                    "
                                  />
                                </div>
                                <div class="text-left mt-5 ml-10">
                                  <input
                                    :disabled="custom.length < 3"
                                    v-model="custom_count"
                                    type="number"
                                    min="1"
                                    max="100"
                                    placeholder="0"
                                    class="
                                      border-0
                                      px-3
                                      py-2
                                      -mt-1
                                      ml-5
                                      placeholder-gray-400
                                      text-gray-700
                                      bg-white
                                      rounded
                                      shadow
                                      focus:outline-none
                                      focus:ring
                                      w-20
                                      h-5
                                    "
                                  />
                                </div>
                              </div>
                              <button
                                @click="postEquipment"
                                class="
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
                                "
                              >
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
                  <h6 class="text-lg font-semibold normal-case">Members</h6>
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
                  <h6 class="text-lg font-semibold normal-case">Chat</h6>
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
      <weather
        v-else
        @closeForeCast="closeForeCast"
        :data="weather"
        :lokasi="location"
      ></weather>
    </div>
  </div>
</template>

<script>
import { AddToCalendar } from "vue-add-events-to-google-calendar";
import ChatRoom from "../components/ChatRoom.vue";
import ChatInput from "../components/ChatInput.vue";
import Weather from "../components/Weather.vue";

export default {
  name: "CardMytrip",
  components: {
    AddToCalendar,
    ChatRoom,
    ChatInput,
    Weather,
  },
  data: function () {
    return {
      openDetail: false,
      showForeCast: false,
      weather: [],
      listEquipment: [],
      tenda_4: false,
      tenda_2: false,
      carriel: false,
      cooking_set: false,
      kompor: false,
      tabung_gas: false,
      flysheet: false,
      matras: false,
      custom: "",
      tenda_4_count: null,
      tenda_2_count: null,
      carriel_count: null,
      cooking_set_count: null,
      kompor_count: null,
      tabung_gas_count: null,
      flysheet_count: null,
      matras_count: null,
      custom_count: null,
    };
  },
  props: ["trip", "index"],
  computed: {
    equipmentList: function () {
      let list = {};
      if (this.tenda_4) {
        list.tenda_4 = this.tenda_4_count;
      }
      if (this.tenda_2) {
        list.tenda_2 = this.tenda_2_count;
      }
      if (this.carriel) {
        list.carriel = this.carriel_count;
      }
      if (this.cooking_set) {
        list.cooking_set = this.cooking_set_count;
      }
      if (this.kompor) {
        list.kompor = this.kompor_count;
      }
      if (this.tabung_gas) {
        list.tabung_gas = this.tabung_gas_count;
      }
      if (this.flysheet) {
        list.flysheet = this.flysheet_count;
      }
      if (this.matras) {
        list.matras = this.matras_count;
      }
      if (this.custom.length > 2) {
        list[this.custom] = this.custom_count;
      }
      return list;
    },
    location: function () {
      return this.trip.Mountain.lokasi;
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
    updateList: function(){
      const newList = this.listEquipment.map(item => {
        let totalChecked = 0
        item.Users.map(el => {
          totalChecked += +(el.EquipmentUser.jumlah)
        })
        item.hasFill = totalChecked
        return item
      })
      return newList
    }
  },
  methods: {
    postEquipment: function () {
      if (Object.values(this.equipmentList).includes(null)) {
        this.$toasted.show("fill all amount").goAway(2000);
        return;
      }
      const data = {
        TripId: this.trip.id,
        list: this.equipmentList,
      };
      this.$store
        .dispatch("postEquipment", data)
        .then(() => {
          this.$modal.hide("my-modal");
          this.$toasted.show("success add equipment").goAway(2000);
          this.getEquipmentList();
          (this.tenda_4 = false),
            (this.tenda_2 = false),
            (this.carriel = false),
            (this.cooking_set = false),
            (this.kompor = false),
            (this.tabung_gas = false),
            (this.flysheet = false),
            (this.matras = false),
            (this.custom = ""),
            (this.tenda_4_count = null),
            (this.tenda_2_count = null),
            (this.carriel_count = null),
            (this.cooking_set_count = null),
            (this.kompor_count = null),
            (this.tabung_gas_count = null),
            (this.flysheet_count = null),
            (this.matras_count = null),
            (this.custom_count = null);
        })
        .catch((err) => {
          this.$toasted.show(err.response.data.message).goAway(2000);
        });
    },
    updateEquipment: function (idEquipment) {
      const payload = {
        UserId: localStorage.getItem("userId"),
        EquipmentId: idEquipment,
      };
      this.$store
        .dispatch("postUserEquipment", payload)
        .then((response) => {
          this.getEquipmentList()
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    showDetail: function () {
      if (this.openDetail) {
        this.openDetail = false;
        this.showForeCast = false;
      } else {
        this.openDetail = true;
      }
    },
    deleteHandler: function () {
      this.$toasted.show("Are u sure to delete this?", {
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
              toastObject.goAway(0);
              this.deleteTrip();
            },
          },
        ],
      });
    },
    deleteTrip: function () {
      this.$store
        .dispatch("deleteTrip", this.trip.id)
        .then((response) => {
          this.$store.dispatch("getMyTrip");
          this.$toasted.show(response.data.message).goAway(2000);
          this.openDetail = false;
        })
        .catch((err) => {
          this.$toasted.show(err.response.data.message).goAway(2000);
        });
    },
    showForecast: function () {
      const location = this.trip.Mountain.lokasi;
      this.$store
        .dispatch("getWeather", location)
        .then((response) => {
          this.weather = response.data;
          this.weather.map((el) => {
            if (el.cuaca.includes("hujan")) {
              el.image = require("@/assets/rainy.svg");
            } else if (el.cuaca.includes("berawan")) {
              el.image = require("@/assets/cloudy.svg");
            } else if (el.cuaca.includes("cerah")) {
              el.image = require("@/assets/sun.svg");
            } else if (el.cuaca.includes("pecah")) {
              el.image = require("@/assets/storm.svg");
            } else {
              el.image = require("@/assets/SunCloudy.svg");
            }
            return el;
          });
          this.showForeCast = true;
        })
        .catch((err) => {
          this.$toasted.show(err.response.data.message).goAway(2000);
        });
    },
    closeForeCast: function () {
      this.showForeCast = false;
    },
    getEquipmentList: function () {
      this.$store
        .dispatch("getEquipmentById", this.trip.id)
        .then((response) => {
          this.listEquipment = response.data;
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
  },
  created() {
    this.getEquipmentList();
  },
};
</script>

<style>
</style>