<template>
  <div class="container mx-auto">
    <div class="shadow rounded-lg p-8 w-1/2 mx-auto">
      <div class="pb-4 border-b-2 border-gray text-xl mb-4">My Profile</div>
      <div class="pb-4 border-b-2 border-gray mb-6">
        <span class="mb-2 inline-block font-semibold">Avatar</span>
        <div class="flex">
          <div
            class="h-36 bg-gray shadow"
            style="max-width: 144px"
            :class="{
              'w-36 flex items-center justify-center': user.avatar_url === null,
            }"
          >
            <img
              :src="preview !== null ? preview : user.avatar_url"
              :alt="`profile ${user.name}`"
              v-if="user.avatar_url !== null || preview !== null"
              class="w-full h-full object-cover"
            />
            <span v-if="user.avatar_url === null && preview === null"
              >Empty</span
            >
          </div>
          <div class="ml-8">
            <label
              for="avatar"
              class="
                btn-secondary
                text-black
                shadow-xl
                cursor-pointer
                block
                max-w-max
                mb-3
              "
            >
              Choose Image
              <input
                type="file"
                class="hidden"
                id="avatar"
                @change="onAvatarUploaded($event)"
              />
            </label>
            <p class="w-1/2">
              Your Profile Picture should have a 1:1 ratio and size must be
              smaller then 2MB
            </p>
          </div>
        </div>
      </div>
      <div class="pb-4 border-b-2 border-gray mb-12">
        <div class="mb-6">
          <label class="mb-2 inline-block font-semibold" for="name">Name</label>
          <input class="input" type="" id="name" v-model="user.name" />
        </div>
        <div>
          <label class="mb-2 inline-block font-semibold" for="email"
            >Email</label
          >
          <input class="input" :value="user.email" id="email" disabled />
        </div>
      </div>
      <div>
        <button
          type="button"
          class="btn-primary text-white"
          @click.prevent="updateProfileHandler"
        >
          Save Profile
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MyProfile",
  data() {
    return {
      preview: null,
      payload: {
        avatar_url: null,
      },
    };
  },
  computed: {
    user: {
      get() {
        return this.$store.state.user;
      },
    },
  },
  methods: {
    ...mapActions(["fetchUserProfile", "updateUserProfie"]),
    async updateProfileHandler() {
      this.payload = {
        avatar_url: this.payload.avatar_url
          ? this.payload.avatar_url
          : this.user.avatar_url,
        name: this.user.name,
        email: this.user.email,
        id: this.user.id,
      };
      console.log(this.payload);
      await this.updateUserProfie({ ...this.payload });
    },
    onAvatarUploaded(event) {
      const avatar = event.target.files[0];
      this.payload.avatar_url = avatar;

      this.preview = URL.createObjectURL(avatar);
    },
  },
  async created() {
    if (localStorage.getItem("access_token")) {
      await this.fetchUserProfile();
    }
  },
};
</script>

<style></style>
