<template>
  <div class="container mx-auto flex justify-center flex-wrap">
    <course-card
      v-for="course in my_courses"
      :key="course.id"
      :course-data="course"
      class="mb-5"
    ></course-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CourseCard from "../components/CourseCard.vue";
export default {
  components: { CourseCard },
  name: "MyCourses",
  methods: {
    ...mapActions(["fetchMyCourses"]),
  },
  computed: {
    ...mapState(["my_courses"]),
  },
  async created() {
    await this.fetchMyCourses();
  },
};
</script>

<style></style>
