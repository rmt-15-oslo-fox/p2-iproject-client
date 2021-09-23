<template>
  <div class="container mx-auto flex justify-center flex-wrap">
    <course-card
      v-for="learn in my_learnings"
      :key="learn.id"
      :course-data="learn.Course"
    ></course-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CourseCard from "../components/CourseCard.vue";
export default {
  components: { CourseCard },
  name: "MyLearning",
  methods: {
    ...mapActions(["fetchMyLearnings"]),
  },
  computed: {
    ...mapState(["my_learnings"]),
  },
  async created() {
    await this.fetchMyLearnings();
  },
};
</script>

<style></style>
