<template>
  <router-link
    :to="{ name: 'CourseDetail', params: { id: courseData.id } }"
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
        :src="courseData.thumbnail_url"
        :alt="courseData.title"
        class="w-full h-full rounded-sm shadow object-contain"
      />
    </div>
    <div class="mb-3">
      <div class="font-semibold tracking-wider text-xl mb-1 max-h-9 truncate">
        {{ courseData.title }}
      </div>
      <div class="mb-1">
        <span class="text-xs">{{ courseData.Instructor.name }}</span>
      </div>
      <div class="flex text-sm mb-2">
        <span class="mr-1">{{ `${courseData.rating}.0` }}</span>
        <div>
          <span
            class="fa fa-star text-gray"
            v-for="i in 5"
            :key="i"
            :class="{
              'text-gold': i <= courseData.rating,
            }"
          ></span>
        </div>
      </div>
      <div class="font-semibold text-xl text-purple-dark mb-3">
        {{ price }}
      </div>
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
        {{ courseData.course_level }}
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CourseCard",
  props: ["course-data"],
  computed: {
    ...mapGetters(["getPrice"]),
    price() {
      return this.getPrice(this.courseData.price);
    },
  },
};
</script>

<style></style>
