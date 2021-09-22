<template>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="mt-5 md:mt-0 md:col-span-3">
      <form @submit.prevent="handleAdd" action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="start-date"
                  class="block text-sm font-medium text-gray-700"
                  >Start Time</label
                >
                <input
                  v-model="dataEvent.start"
                  type="datetime-local"
                  name="start-date"
                  id="start-date"
                  class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div v-if="type === 'anime'" class="col-span-6 sm:col-span-3">
                <label
                  for="episode"
                  class="block text-sm font-medium text-gray-700"
                  >Episode</label
                >
                <input
                  v-model="dataEvent.episode"
                  type="number"
                  name="episode"
                  id="episode"
                  class="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="status"
                  class="block text-sm font-medium text-gray-700"
                  >Status</label
                >
                <select
                  disabled
                  v-model="dataEvent.status"
                  id="status"
                  name="status"
                  autocomplete="status"
                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                >
                  <option value="active">Active</option>
                  <option value="on-hold">On-Hold</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AddEvent',
  props: ['dataMovie', 'type'],
  data() {
    return {
      dataEvent: {
        start: new Date().toISOString().slice(0, -8),
        status: 'active',
        episode: 0,
      },
    };
  },
  computed: {
    startDate() {
      let date = this.dataEvent.start;
      return new Date(date);
    },
    summary() {
      let output =
        this.dataEvent.episode != 0
          ? `${this.type}-${this.dataEvent.episode}-${this.dataMovie.id}`
          : `${this.type}-${this.dataMovie.id}`;
      return output;
    },
    endDate() {
      let time = 0;
      if (this.dataMovie.runtime) {
        time = this.dataMovie.runtime;
      } else if (
        this.dataMovie.episode_run_time &&
        this.dataMovie.episode_run_time[0]
      ) {
        time = this.dataMovie.episode_run_time[0];
      } else {
        time = this.dataMovie.episode_duration;
      }
      let date = this.addMinutes(this.startDate, time);
      return date;
    },
  },
  methods: {
    async handleAdd() {
      try {
        let payload = {
          start: this.startDate,
          end: this.endDate,
          status: this.dataEvent.status,
          summary: this.summary,
        };
        console.log(payload);
      } catch (err) {
        console.log(err);
      }
    },
    addMinutes(date, minutes) {
      return new Date(date.getTime() + minutes * 60000);
    },
  },
};
</script>
<style></style>
