<template>
  <div class="container mx-auto flex justify-between">
    <!-- Left -->
    <section class="flex w-4/5">
      <!-- Image -->
      <div
        class="md:w-96 h-96 shadow p-8 mr-10 border-2 border-gray"
        style="min-width: 400px"
      >
        <img
          :src="course.thumbnail_url"
          :alt="course.title"
          class="w-full h-full object-contain"
        />
      </div>
      <!-- Detail -->
      <div class="flex-grow">
        <div class="flex items-center text-xs my-1">
          <span>Category</span>
          <i class="fas fa-chevron-right mx-2"></i>
          <span class="font-semibold text-purple-mid">{{
            course.Category.name
          }}</span>
        </div>
        <div class="mb-8">
          <h2 class="md:text-5xl font-bold tracking-wider">
            {{ course.title }}
          </h2>
        </div>

        <div class="mb-8">
          <h3 class="md:text-3xl font-semibold tracking-wider mb-3">
            Description
          </h3>
          <p class="h-14 overflow-hidden overflow-ellipsis">
            {{ course.description }}
          </p>
        </div>

        <div>
          <h3 class="md:text-2xl font-semibold tracking-wider mb-3">
            Instructor
          </h3>
          <div class="flex items-center">
            <div class="w-24 h-24">
              <img
                v-if="course.Instructor.avatar_url"
                :src="course.Instructor.avatar_url"
                class="rounded-full w-full h-full object-cover"
              />
              <i
                class="fas fa-user-circle fa-6x"
                v-if="course.Instructor.avatar_url === null"
              ></i>
            </div>
            <div class="ml-5">
              <h4 class="text-3xl font-semibold text-purple-dark">
                {{ course.Instructor.name }}
              </h4>
              <span>{{ `${course.Category.name} Instructor` }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Right -->
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
      "
    >
      <div class="mb-3">
        <h2 class="text-4xl font-semibold text-purple-mid">{{ price }}</h2>
      </div>
      <div
        class="pb-4 border-b-2 border-gray"
        v-if="user.id !== course.instructor_id"
      >
        <button
          class="btn-primary w-full mb-3 text-white"
          @click.prevent="addToCartHandler"
        >
          Add to Cart
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
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "CourseDetail",
  computed: {
    ...mapState(["course", "user"]),
    ...mapGetters(["getPrice"]),
    price() {
      return this.getPrice(this.course.price);
    },
  },
  methods: {
    ...mapActions(["fetchCourseById", "addCourseToCart"]),
    async addToCartHandler() {
      if (!localStorage.getItem("access_token")) {
        this.$router.push({ name: "Login" });
      } else {
        await this.addCourseToCart(this.course.id);
        this.$router.push({ name: "MyCart" });
      }
    },
  },
  async created() {
    await this.fetchCourseById(this.$route.params.id);
  },
};
</script>

<style></style>
