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
                <div class="media media-chat">
                  <div class="username">
                    <p>
                      username1:
                    </p>
                  </div>
                  <div class="media-body">
                    <p>How are you ...???</p>
                  </div>
                </div>
                <div class="media media-chat media-chat-reverse">
                  <div class="media-body">
                    <p>Hiii, I'm good.</p>
                  </div>
                </div>
                <div class="media media-chat media-chat-reverse">
                  <div class="media-body">
                    <p>How are you doing?</p>
                    <p>
                      Long time no see! Tomorrow office. will be free on sunday.
                    </p>
                  </div>
                </div>
                <div class="media media-chat">
                  <div class="username">
                    <p>
                      username2:
                    </p>
                  </div>
                  <div class="media-body">
                    <p>Hello Everybody!!!!</p>
                  </div>
                </div>
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
export default {
  name: `ChatBox`,
  data() {
    return {
      message: "",
    };
  },
  computed: {
    ...mapState(["messages"]),
  },
  methods: {
    ...mapMutations(["INSERT_MESSAGE"]),
    messageHandler() {
      //   push message to a state
      this.INSERT_MESSAGE(this.message);
    },
  },
};
</script>

<style></style>
