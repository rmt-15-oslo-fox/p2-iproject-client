<template>
  <div>
    <div class="flex w-full mt-5">
      <span
        class="
          z-10
          leading-snug
          font-normal
          absolute
          text-center text-blueGray-300
          absolute
          bg-transparent
          rounded
          text-base
          items-center
          justify-center
          w-8
          pl-3
          py-3
        "
      >
      <div class="-mt-2">
        <i class="far fa-smile-beam"></i>
      </div>
      </span>
      
      <input
        type="text"
        placeholder="type message"
        class="
          px-2
          py-1
          placeholder-blueGray-300
          text-blueGray-600
          bg-white bg-white
          rounded
          text-sm
          border-0
          shadow
          outline-none
          focus:outline-none
          focus:ring
          w-full
          pl-10
          pr-10
        "
      />
    </div>
    <span
        class="
          leading-snug
          font-normal
          text-center text-blueGray-300
          text-base
          text-right
        "
      >
      <div class="-mt-6 mr-2">
        <i class="fas fa-paper-plane"></i>
      </div>
      </span>
  </div>
</template>

<script>
export default {
  name: "ChatInput",
};
</script>

<style>
</style>