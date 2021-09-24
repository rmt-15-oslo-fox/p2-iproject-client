<template>
  <div class="mesgs">
    <div class="msg_history">
      <SparringChatMsgCard />
    </div>
    <div class="chat-form">
      <div class="container">
        <div class="send-message">
          <div class="row">
            <div class="col-sm-10 col-xs-8">
              <input
                type="text"
                class="form-control"
                id=""
                placeholder="Message"
                v-model="inputMsg"
                @keyup.enter="sendMessage"
              />
            </div>
            <div class="col-sm-2 col-xs-4">
              <button
                type="button"
                class="btn btn-success btn-block"
                @click="sendMessage"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SparringChatMsgCard from "../components/SparringChatMsgCard.vue";

export default {
  name: "MsgBox",
  components: {
    SparringChatMsgCard,
  },
  // data() {
  //   return {
  //     inputMsg: "",
  //   };
  // },
  // methods: {
  //   sendMessage() {
  //     const data = {
  //       username: localStorage.getItem("username"),
  //       message: this.inputMsg,
  //     };

  //     this.$store.commit("Push_Message", data);
  //     this.$socket.emit("sendMessage", data);
  //     this.inputMsg = "";
  //   },
  // },
  // sockets: {
  //   broadcastMessage(data) {
  //     this.$store.commit("Push_Message", data);
  //   },
  // },
  // computed: {
  //   messages() {
  //     return this.$store.state.messages;
  //   },
  // },
};
</script>

<style>
</style>