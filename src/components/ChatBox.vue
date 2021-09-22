<template>
  <div class="col-md-6">
    <div class="page-content page-container" id="page-content">
      <div class="padding">
        <div class="">
          <div class="col-md-12">
            <div class="card card-bordered">
              <div class="card-header">
                <h4 class="card-title"><strong>Chat Room</strong></h4>
              </div>
              <div
                class="ps-container ps-theme-default ps-active-y"
                id="chat-content"
                style="overflow-y: scroll !important; height: 400px !important"
              >
                <chat-card
                  v-for="(message, index) in messages"
                  :key="index"
                  :message-data="message"
                >
                </chat-card>
                <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px">
                  <div
                    class="ps-scrollbar-x"
                    tabindex="0"
                    style="left: 0px; width: 0px"
                  ></div>
                </div>
                <div
                  class="ps-scrollbar-y-rail"
                  style="top: 0px; height: 0px; right: 2px"
                >
                  <div
                    class="ps-scrollbar-y"
                    tabindex="0"
                    style="top: 0px; height: 2px"
                  ></div>
                </div>
              </div>
              <div class="publisher bt-1 border-light">
                <input
                  class="publisher-input"
                  type="text"
                  placeholder="Write something"
                  v-model="message"
                />

                <a
                  class="publisher-btn text-info"
                  href="#"
                  data-abc="true"
                  @click.prevent="messageHandler"
                  ><i class="fa fa-paper-plane"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import ChatCard from "../components/ChatCard.vue";
export default {
  name: `ChatBox`,
  components: { ChatCard },
  data() {
    return {
      message: "",
    };
  },
  computed: {
    ...mapState(["messages"]),
  },
  sockets: {
    broadcastMessage(data) {
      //   console.log(data);
      this.INSERT_MESSAGE(data);
      this.message = "";
    },
  },
  methods: {
    ...mapMutations(["INSERT_MESSAGE"]),
    messageHandler() {
      //   push message to a state
      this.$socket.emit("sendMessage", {
        message: this.message,
        username: localStorage.getItem("username"),
      });

      //   this.INSERT_MESSAGE({
      //     message: this.message,
      //     username: localStorage.getItem("username"),
      //   });
    },
  },
};
</script>

<style></style>
