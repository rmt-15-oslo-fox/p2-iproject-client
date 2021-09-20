<template>
  <div>
    <div class="relative mb-3 mt-4">
      <button
        class="
          w-full
          py-5
          text-left
          bg-white
          text-gray-800
          active:bg-gray-100
          text-xs
          font-bold
          uppercase
          px-4
          py-2
          rounded
          shadow
          hover:shadow-md
          outline-none
          focus:outline-none
        "
        type="button"
        style="transition: all 0.15s ease 0s"
      >
        1. Semeru 26 januari 2022
      </button>
    </div>
    <div
      class="
        w-full
        -mt-2
        py-5
        text-left
        bg-white
        text-gray-800
        active:bg-gray-100
        text-xs
        font-bold
        uppercase
        px-4
        py-2
        rounded
        shadow
        hover:shadow-md
        outline-none
        focus:outline-none
      "
    >
      <div class="flex flex-row h-96">
            <div class="w-1/5">
              <div class="pr-5">
                <div
                class="
                    flex flex-col
                    min-w-0
                    break-words
                    bg-white
                    w-full
                    shadow-lg
                    rounded-lg
                    h-96
                "
                >
                <div class="px-4 py-5 flex-auto">
                    <h6 class="text-xl font-semibold">Peralatan</h6>
                    <hr>
                    <div class="mt-4 mb-2 text-gray-600">
                        <select >
                            <option value="">Tambahkan Peralatan</option>
                            <option value="">Tenda</option>
                            <option value="">Tenda</option>
                            <option value="">Tenda</option>
                        </select>
                        <div class="flex-flex-col">

                        <div class="text-center mt-5">
                            <p>------All List------</p>
                        </div>
                        <div class="flex flex-col mr-5">
                            <div class="mt-3">
                                <input disabled checked type="checkbox" /> Tenda
                            </div>
                            <div class="mt-3">
                                <input type="checkbox" /> Tenda
                            </div>
                            <div class="mt-3">
                                <input type="checkbox" /> Tenda
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="w-1/5">
              <div class="w-3/12 w-full pr-5">
                <div
                class="
                    flex flex-col
                    min-w-0
                    break-words
                    bg-white
                    w-full
                    shadow-lg
                    rounded-lg
                    h-96
                "
                >
                <div class="px-4 py-5 flex-auto">
                    <h6 class="text-xl font-semibold">PJ</h6>
                    <hr>
                </div>
                </div>
            </div>
            </div>
            <div class="flex-auto">
                <div class="w-full pr-5">
                    <div
                    class="
                        flex flex-col
                        min-w-0
                        break-words
                        bg-white
                        w-full
                        shadow-lg
                        rounded-lg
                        h-96
                    "
                    >
                    <div class="px-4 py-5 flex-auto">
                        <h6 class="text-xl font-semibold">Chat</h6>
                        <hr>
                    </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMytrip",
};
</script>

<style>
</style>