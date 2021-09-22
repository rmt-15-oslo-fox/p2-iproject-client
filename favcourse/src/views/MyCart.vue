<template>
  <div class="container mx-auto flex justify-between" v-if="carts.length > 0">
    <div class="flex flex-wrap w-10/12">
      <item-cart
        v-for="item in carts"
        :key="item.id"
        :item="item.Course"
      ></item-cart>
    </div>
    <section
      class="
        flex
        items-center
        justify-center
        flex-col
        px-8
        py-8
        flex-grow
        shadow
        border-2 border-transparent
        rounded
        min-w-max
      "
    >
      <div class="mb-3">
        <h2 class="text-4xl font-semibold text-purple-mid mb-5">{{ price }}</h2>
      </div>
      <div class="pb-4 border-b-2 border-gray">
        <button
          class="btn-primary w-full text-white"
          :class="{ 'opacity-40 cursor-not-allowed': totalPrice === 0 }"
          :disabled="totalPrice === 0"
          @click="checkoutHandler"
        >
          Checkout Now
        </button>
      </div>
      <div class="mt-3">
        <ul>
          <li class="mb-1">
            <i class="fas fa-check-circle text-purple-light-2"></i>
            Full lifetime access
          </li>
          <li class="mb-1">
            <i class="fas fa-check-circle text-purple-light-2"></i>
            Chat with instructor
          </li>
        </ul>
      </div>
    </section>
  </div>
  <div
    v-else-if="carts.length === 0"
    class="flex justify-center items-center mt-10"
  >
    <span class="font-bold text-2xl"
      >Oops it looks like your shopping cart is still empty</span
    >
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import ItemCart from "../components/ItemCart.vue";
export default {
  components: { ItemCart },
  name: "MyCart",
  async created() {
    await this.fetchCarts();
  },
  methods: {
    ...mapActions(["fetchCarts", "fetchCheckout"]),
    async checkoutHandler() {
      const coursesIds = this.carts.map((item) => {
        return item.Course.id;
      });

      await this.fetchCheckout(coursesIds);
      window.snap.pay(this.checkoutToken);
    },
  },
  computed: {
    ...mapState(["carts", "checkoutToken"]),
    ...mapGetters(["totalPrice", "getPrice"]),
    price() {
      return this.getPrice(this.totalPrice);
    },
  },
};
</script>

<style></style>
