<template>
  <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
    <div
      class="
        relative
        flex flex-col
        min-w-0
        break-words
        bg-white
        w-full
        mb-8
        shadow-lg
        rounded-lg
      "
    >
      <div class="px-4 py-5 flex-auto">
        <div
          class="
            text-white
            p-3
            text-center
            inline-flex
            items-center
            justify-center
            w-12
            h-12
            mb-5
            shadow-lg
            rounded-full
            bg-red-400
          "
        >
          <i class="fas fa-award"></i>
        </div>
        <h6 class="text-xl font-semibold">Gunung Semeru</h6>
        <p class="mt-2 mb-4 text-gray-600">
          Divide details about your product or agency work into parts. A
          paragraph describing a feature will be enough.
        </p>
        <button
            class="bg-blue-300 text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
            type="button"
            style="transition: all 0.15s ease 0s;"
        >
            Join
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style>
</style>