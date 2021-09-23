<template>
  <div class="bg-white">
    <main class="pt-16 pb-14 sm:pt-24 sm:pb-20 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto">
        <div class="px-4 sm:px-0">
          <h1
            class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
          >
            Schedule History
          </h1>
          <p class="mt-2 text-sm text-gray-500">
            Check the status of recent Schedule, manage status, and View Detail.
          </p>
        </div>

        <section
          v-if="events.length > 0"
          aria-labelledby="recent-heading"
          class="mt-16"
        >
          <div class="space-y-16 sm:space-y-24">
            <event-card
              v-for="event in events"
              :key="event.id"
              :event="event"
            ></event-card>
          </div>
        </section>
        <div v-else>
          <p
            class="text-2xl mt-40 font-extrabold tracking-tight sm:text-3xl text-gray-500"
          >
            No Schedule Yet
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import EventCard from '../../components/events/EventCard.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: { EventCard },
  data() {
    return {};
  },
  computed: {
    ...mapState(['events']),
  },
  methods: {
    ...mapActions(['actionFetchEvents', 'actionPatchEvents']),
  },
  async created() {
    await this.actionFetchEvents();
  },
};
</script>
