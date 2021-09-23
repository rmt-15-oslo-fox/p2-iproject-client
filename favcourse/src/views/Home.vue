<template>
  <div class="container mx-auto flex justify-center flex-wrap">
    <course-card
      v-for="course in courses"
      :key="course.id"
      :course-data="course"
      class="mb-5"
    ></course-card>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";
import CourseCard from "../components/CourseCard.vue";
export default {
  components: { CourseCard },
  name: "Home",
  methods: {
    ...mapActions(["fetchCourses", "fetchClearCart"]),
  },
  computed: {
    ...mapState(["courses"]),
  },
  async created() {
    await this.fetchCourses();
  },
};
</script>
