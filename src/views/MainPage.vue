<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="page-header">
          <h1>Live Music Room</h1>
        </div>
      </div>
    </div>
    <div class="row">
      <search-field> </search-field>
      <chat-box> </chat-box>
      <online-list> </online-list>
    </div>
  </div>
</template>

<script>
import SearchField from "../components/SearchField.vue";
import ChatBox from "../components/ChatBox.vue";
import OnlineList from "../components/OnlineList.vue";
export default {
  name: `MainPage`,
  components: {
    SearchField,
    ChatBox,
    OnlineList,
  },
};
</script>

<style></style>
