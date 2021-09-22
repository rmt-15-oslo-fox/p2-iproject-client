<template>
  <div class="container mx-auto">
    <div class="shadow rounded-lg p-8 w-1/2 mx-auto">
      <form @submit.prevent="createCourseHandler">
        <div class="form-control mb-3">
          <input
            type="text"
            id="title"
            class="input input-primary font-semibold text-xl w-full"
            placeholder="Course Title"
            v-model="payload.title"
          />
        </div>

        <div class="form-control mb-3">
          <textarea
            class="
              textarea textarea-primary
              h-24
              textarea-bordered
              input input-primary
              font-semibold
              text-xl
              w-full
            "
            placeholder="Description"
            v-model="payload.description"
          ></textarea>
        </div>

        <div class="form-control mb-3">
          <input
            type="number"
            id="price"
            class="input input-primary font-semibold text-xl w-full"
            placeholder="Rp10.000"
            v-model="payload.price"
          />
        </div>

        <div class="w-full flex justify-between">
          <div class="w-1/2">
            <label class="label">
              <span class="label-text">Category</span>
            </label>
            <select
              class="select select-bordered w-full max-w-xs my-2"
              v-model="payload.category"
            >
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
                v-text="category.name"
              ></option>
            </select>
          </div>
          <div class="w-1/2">
            <label class="label">
              <span class="label-text">Course Level</span>
            </label>
            <select
              class="select select-bordered w-full max-w-xs my-2"
              v-model="payload.course_level"
            >
              <option disabled="disabled" selected="selected">
                Course Level
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Medium">Medium</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
        </div>

        <div v-bind:class="{ hidden: preview === '' }" class="my-5">
          <span class="text-xl font-sans">Image Preview</span>
          <img :src="preview" alt="Preview" class="max-w-sm max-h-40" />
        </div>
        <label
          for="thumbnail_url"
          class="
            flex flex-col
            items-center
            bg-purple-light-2
            rounded-xl
            py-2
            cursor-pointer
            hover:bg-indigo-600
            mt-5
            mb-8
          "
        >
          <i class="fas fa-cloud-upload-alt fa-2x text-white"></i>
          <span class="mt-2 text-white leading-normal">Choose a File</span>
          <input
            type="file"
            class="hidden"
            id="thumbnail_url"
            @change="onFileUploaded($event)"
          />
        </label>
        <div class="text-right">
          <button class="btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "CreateCourse",
  data() {
    return {
      preview: "",
      payload: {
        title: "",
        description: "",
        category: "Select Category",
        course_level: "",
        price: 0,
        thumbnail_url: "",
      },
    };
  },
  computed: {
    ...mapState(["categories"]),
  },
  methods: {
    ...mapActions(["fetchCreateCourse", "fetchCategories"]),
    onFileUploaded(event) {
      const file = event.target.files[0];
      this.payload.thumbnail_url = file;
      const url = URL.createObjectURL(file);
      this.preview = url;
    },
    async createCourseHandler() {
      await this.fetchCreateCourse({ ...this.payload });
    },
  },
  async created() {
    await this.fetchCategories();
  },
};
</script>

<style></style>
