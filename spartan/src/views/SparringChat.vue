<template>
  <div class="SparringChat">
    <div class="container mt-4">
      <div class="messaging">
        <div class="inbox_msg shadow">
          <SparringChatUser />
          <SparringChatMsgBox />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SparringChatUser from "../components/SparringChatUser.vue";
import SparringChatMsgBox from "../components/SparringChatMsgBox.vue";

export default {
  name: "SparringChat",
  components: {
    SparringChatUser,
    SparringChatMsgBox,
  },
};
</script>

<style>
</style>