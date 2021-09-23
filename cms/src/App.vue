<template>
  <div>
    <login v-if="currentPage === 'login'" @changePage="changePage"></login>
    <navbar
      v-if="
        currentPage === 'dashboard' ||
        currentPage === 'history' ||
        currentPage === 'createJob' ||
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
    <createJob
      v-if="currentPage === 'createJob'"
      @changePage="changePage"
    ></createJob>
    <edit-job
      v-if="currentPage === 'editJob'"
      @changePage="changePage"
    ></edit-job>
  </div>
</template>

<script>
import Login from "./views/login.vue";
import Navbar from "./components/navbar.vue";
import Register from "./views/register.vue";
import ListArtikel from "./views/listArtikel.vue";
import History from "./views/history.vue";
// import About from "./views/About.vue";
import CreateJob from "./views/createJobForm.vue";
import EditJob from "./views/editJob.vue";
export default {
  components: {
    Login,
    Navbar,
    Register,
    ListArtikel,
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