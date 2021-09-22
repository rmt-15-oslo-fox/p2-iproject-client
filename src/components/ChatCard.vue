<template>
  <div>
    <div
      class="media media-chat media-chat-reverse"
      v-if="messageData.username === username"
    >
      <div class="media-body">
        <p>{{ messageData.message }}</p>
      </div>
    </div>
    <div class="media media-chat" v-else>
      <div class="username">
        <p>{{ messageData.username }}:</p>
      </div>
      <div class="media-body">
        <p>{{ messageData.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `ChatCard`,
  data() {
    return {
      username: localStorage.getItem(`username`),
    };
  },
  props: ["message-data"],
};
</script>

<style></style>
