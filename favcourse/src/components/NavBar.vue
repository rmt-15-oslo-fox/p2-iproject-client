<template>
  <header
    class="
      md:px-0 md:container
      mx-auto
      flex flex-col
      justify-between
      items-center
      py-8
      px-3
      md:flex-row
    "
  >
    <h1 class="text-3xl font-bold text-black-primary mb-5 md:mb-0">
      <router-link :to="{ name: 'Home' }">FavCourse</router-link>
    </h1>
    <nav>
      <ul class="flex">
        <li
          class="
            mr-3
            py-2
            px-8
            bg-white
            text-purple-light
            border-2 border-transparent
            rounded-full
            shadow
            hover:text-black-primary
          "
          v-if="!isLoggedIn"
        >
          <router-link :to="{ name: 'Login' }">Sign In</router-link>
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link :to="{ name: 'Register' }">Sign Up</router-link>
        </li>
        <li v-if="isLoggedIn">
          <div
            class="flex items-center cursor-pointer"
            @click.prevent="showMenuDrop"
          >
            <a
              class="
                rounded-full
                h-10
                w-10
                flex
                items-center
                justify-center
                cursor-pointer
                bg-purple-light
              "
            >
              <p
                class="text-white font-bold uppercase"
                v-if="user.avatar_url === null"
              >
                {{ user.name[0] }}
              </p>
              <img
                class="rounded-full w-full h-full object-cover"
                alt="profile"
                v-if="user.avatar_url !== null"
                :src="user.avatar_url"
              />
            </a>
            <i class="far fa-angle-down ml-2"></i>
          </div>
          <div class="relative" v-if="menuDropActive">
            <ul
              class="
                bg-white
                shadow
                border-2 border-purple-light
                py-4
                px-2
                rounded-xl
                min-w-max
                absolute
                top-1
                -left-12
              "
            >
              <li class="nav-drop">My Learning</li>
              <li class="nav-drop">
                <router-link :to="{ name: 'MyCart' }">My Cart</router-link>
              </li>
              <li class="nav-drop">
                <router-link :to="{ name: 'MyProfile' }"
                  >My Profile</router-link
                >
              </li>
              <li class="nav-drop">
                <router-link :to="{ name: 'Instructor' }"
                  >My Courses</router-link
                >
              </li>
              <li class="nav-drop mb-0">
                <button @click.prevent="logoutHandler">Sign Out</button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "NavBar",
  data() {
    return {
      menuDropActive: false,
    };
  },
  computed: {
    ...mapState(["isLoggedIn", "user"]),
  },
  watch: {
    $route(to) {
      if (to.name !== "Home" && to.name !== "CourseDetail") {
        this.showMenuDrop();
      }
    },
  },
  methods: {
    ...mapActions(["fetchUserProfile"]),
    ...mapMutations({
      setLoginStatus: "CHANGE_LOGIN",
    }),
    logoutHandler() {
      localStorage.clear();
      this.setLoginStatus(false);
      this.$router.push({ name: "Login" });
      this.$toast.success("Logout successful");
    },
    showMenuDrop() {
      this.menuDropActive = !this.menuDropActive;
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
