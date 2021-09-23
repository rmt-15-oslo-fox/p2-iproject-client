<template lang="">
  <div>
    <base-dialog
      :show="!add"
      :title="`Edit Event for ` + event.summary"
      @close="closeDialog"
    >
      <UpdateEvent :event="event" @close="closeDialog"></UpdateEvent>
    </base-dialog>
    <h3 class="sr-only">
      Schedule Date
      <time :datetime="event.datetime">{{ event.date }}</time>
    </h3>

    <div
      class="bg-green-50 border-2 border-green-800 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8"
    >
      <dl
        class="divide-y divide-gray-200 space-y-4 text-sm text-gray-600 flex-auto md:divide-y-0 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8"
      >
        <div class="flex justify-between md:block">
          <dt class="font-medium text-gray-900">Schedule ID</dt>
          <dd class="md:mt-1">
            {{ event.summary }}
          </dd>
        </div>
        <div class="flex justify-between pt-4 md:block md:pt-0">
          <dt class="font-medium text-gray-900">Due Date</dt>
          <dd class="md:mt-1">
            <time :datetime="event.end">{{ event.end.split('T')[0] }}</time>
          </dd>
        </div>
        <div
          class="flex justify-between pt-4 font-medium text-gray-900 md:block md:pt-0"
        >
          <dt>Est. Watch Time</dt>
          <dd class="md:mt-1">
            {{
              Math.abs(new Date(event.end) - new Date(event.start)) / 1000 / 60
            }}
          </dd>
        </div>
      </dl>
      <div class="space-y-4 mt-6 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0">
        <button
          @click.prevent="openDialog"
          class="w-full flex items-center justify-center bg-white py-2 px-4 border border-green-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 md:w-auto"
        >
          Update
        </button>
        <button
          @click.prevent="handleDelete(event.id)"
          class="w-full flex items-center justify-center bg-white py-2 px-4 border border-red-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 md:w-auto"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import UpdateEvent from '../../components/events/UpdateEvent.vue';

export default {
  name: 'EventCard',
  props: ['event'],
  data() {
    return {
      add: true,
    };
  },
  components: {
    UpdateEvent,
  },
  methods: {
    ...mapActions(['actionDeleteEvents', 'actionFetchEvents']),
    openDialog() {
      this.add = false;
    },
    closeDialog() {
      this.add = true;
    },
    async handleDelete(id) {
      await this.actionDeleteEvents(id);
      await this.actionFetchEvents();
    },
  },
};
</script>
<style lang=""></style>
