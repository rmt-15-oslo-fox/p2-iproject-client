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

        <section aria-labelledby="recent-heading" class="mt-16">
          <h2 id="recent-heading" class="sr-only">Recent Schedule</h2>

          <div class="space-y-16 sm:space-y-24">
            <event-card
              v-for="event in events"
              :key="event.number"
              :event="event"
            ></event-card>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import EventCard from '../../components/events/EventCard.vue';
const events = [
  {
    number: 'WU881944444',
    date: 'May 22, 2021',
    datetime: '2021-01-22',
    href: `/events/WU88191111`,
    invoiceHref: `/movies/WU88191111`,
    total: '100 Minutes',
    products: [
      {
        id: 1,
        name: 'This is Title',
        description: 'This is summary',
        href: '#',
        price: '90 Minutes',
        status: 'delivered',
        date: 'January 5, 2021',
        datetime: '2021-01-05',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/order-history-page-06-product-01.jpg',
        imageAlt:
          'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      // More products...
    ],
  },
  // More events...
];

export default {
  name: 'Completed List',
  components: { EventCard },
  data() {
    return {
      events,
    };
  },
};
</script>
