<template>
  <div>
    <div class="outgoing_msg" v-if="message.username === username">
      <div class="sent_msg">
        <p>{{ message.message }}</p>
      </div>
    </div>
    <div class="incoming_msg" v-else>
      <div class="incoming_msg_img">
        <img
          :src="`https://avatars.dicebear.com/api/bottts/${message.username}.svg`"
          alt="image"
        />
      </div>
      <div class="received_msg">
        <div class="received_withd_msg">
          <span class="time_date">{{ message.username }}</span>
          <p>{{ message.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SparringChatMsgCard",
  props: ["message"],
  data() {
    return {
      username: localStorage.getItem("username"),
    };
  },
};
</script>

<style>
</style>