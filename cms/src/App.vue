<template>
  <div>
    <login v-if="currentPage === 'login'" @changePage="changePage"></login>
    <navbar
      v-if="
        currentPage === 'dashboard' ||
        currentPage === 'history' ||
        currentPage === 'createArtikel' ||
        currentPage === 'update-form' ||
        currentPage === 'edit-form' ||
        currentPage === 'about'
      "
      @changePage="changePage"
    ></navbar>
    <register
      v-if="currentPage === 'register'"
      @changePage="changePage"
    ></register>
    <listJobs
      v-if="currentPage === 'dashboard'"
      @changePage="changePage"
    ></listJobs>
    <history
      v-if="currentPage === 'history'"
      @changePage="changePage"
    ></history>
    <about v-if="currentPage === 'about'" @changePage="changePage"></about>
    <createArtikel
      v-if="currentPage === 'createArtikel'"
      @changePage="changePage"
    ></createArtikel>
    <edit-artikel
      v-if="currentPage === 'editArtikel'"
      @changePage="changePage"
    ></edit-artikel>
  </div>
</template>

<script>
import Login from "./views/login.vue";
import Navbar from "./components/navbar.vue";
import Register from "./views/register.vue";
import ListJobs from "./views/listJobs.vue";
import History from "./views/history.vue";
import About from "./views/about.vue";
import CreateJob from "./views/createJobForm.vue";
import EditJob from "./views/editJob.vue";
export default {
  components: {
    Login,
    Navbar,
    Register,
    ListJobs,
    History,
    About,
    CreateJob,
    EditJob,
  },
  data() {
    return {
      currentPage: "login",
    };
  },
  methods: {
    changePage(pageName) {
      this.currentPage = pageName;
    },
    checkLogin() {
      let access_token = localStorage.access_token;
      if (access_token) {
        this.currentPage = "dashboard";
      } else {
        this.currentPage = "login";
      }
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>

<style scoped>
</style>