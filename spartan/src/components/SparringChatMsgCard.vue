<template>
  <div>
    <div class="outgoing_msg">
      <div class="sent_msg">
        <p>message</p>
      </div>
    </div>
    <div class="incoming_msg">
      <div class="incoming_msg_img">
        <img
          src="https://avatars.dicebear.com/api/bottts/fikri.svg"
          alt="image"
        />
      </div>
      <div class="received_msg">
        <div class="received_withd_msg">
          <span class="time_date">message</span>
          <p>message</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SparringChatMsgCard",
  props: ["message"],
  // data() {
  //   return {
  //     username: localStorage.getItem("username"),
  //   };
  // },
};
</script>

<style>
</style>