<template>
  <div class="inbox_people">
    <div class="heading">
      <h4>Available to chat</h4>
    </div>
    <div class="inbox_chat">
      <div class="chat_list" v-for="(user, i) in listUser" :key="i">
        <div class="chat_people">
          <div class="chat_img">
            <img
              :src="`https://avatars.dicebear.com/api/bottts/${user}.svg`"
              alt="user"
            />
          </div>
          <div class="chat_ib">
            <h5>{{ user }}<span class="chat_date">Online</span></h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SparringChatUser",
  data() {
    return {
      listUser: [],
    };
  },
  sockets: {
    usersLogin(users) {
      this.listUser = users;
    },
  },
};
</script>

<style>
</style>