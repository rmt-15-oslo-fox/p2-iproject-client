<template>
  <router-link
    :to="{ name: 'CourseDetail', params: { id: item.id } }"
    class="
      flex flex-col
      w-1/5
      h-full
      pt-5
      pb-3
      px-3
      border-2 border-gray
      rounded-xl
      shadow
      mr-5
    "
  >
    <div class="mb-3" style="height: 130px">
      <img
        :src="item.thumbnail_url"
        :alt="item.title"
        class="w-full h-full rounded-sm shadow object-contain"
      />
    </div>
    <div class="mb-3">
      <div class="font-semibold tracking-wider text-xl mb-1 max-h-9 truncate">
        {{ item.title }}
      </div>
      <div class="flex text-sm mb-2">
        <span class="mr-1">{{ `${item.rating}.0` }}</span>
        <div>
          <span
            class="fa fa-star text-gray"
            v-for="i in 5"
            :key="i"
            :class="{
              'text-gold': i <= item.rating,
            }"
          ></span>
        </div>
      </div>
      <div class="font-semibold text-xl text-purple-dark mb-3">{{ price }}</div>
      <div
        class="
          text-sm
          bg-purple-light-2
          max-w-min
          px-3
          py-1
          rounded
          text-white
          font-semibold
        "
      >
        {{ item.course_level }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CartItem",
  props: ["item"],
  computed: {
    price() {
      return `Rp ${this.item.price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    },
  },
};
</script>

<style></style>
