<template>
  <div class="mx-auto container">
    <form class="w-1/2 py-3 px-5 mx-auto">
      <div class="mb-5">
        <label for="title" class="font-semibold mb-1">Title</label>
        <input type="text" id="title" class="input" />
      </div>
      <div class="mb-5">
        <label for="description" class="font-semibold mb-1">Description</label>
        <textarea id="description" class="input"></textarea>
      </div>
      <div class="mb-5">
        <label for="category" class="font-semibold mb-1">Category</label>
        <input type="text" id="category" class="input" />
      </div>
      <div>
        <label for="title" class="font-semibold mb-1">Price</label>
        <input type="number" id="title" class="input" min="10000" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MyCourses",
};
</script>

<style></style>
