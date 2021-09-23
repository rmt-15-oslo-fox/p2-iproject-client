<template>
  <div>
    <!-- navbar -->
    <div class="navbar-top fixed-top">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <!-- sidebar button -->
          <button
            class="navbar-toggler me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- sidebar button -->
          <a class="navbar-brand fw-bold me-auto" href="#"
            >Job Portal Management System</a
          >
        </div>
      </nav>
    </div>

    <div class="sidebar">
      <div
        class="offcanvas offcanvas-start sidebar-nav"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            Jobs Portal
          </h5>
        </div>
        <div class="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </div>
          <div class="dropdown mt-3">
            <div class="border link-unstyled text-center update-sidebar">
              <button @click="listJobs" class="btn w-100 h-100 pt-3 pb-3">
                List Jobs
              </button>
            </div>
            <div class="border link-unstyled text-center create-sidebar">
              <button @click="createJob" class="btn w-100 h-100 pt-3 pb-3">
                Create Jobs
              </button>
            </div>
            <div class="border link-unstyled text-center create-sidebar">
              <a @click="history" class="btn w-100 h-100 pt-3 pb-3">
                History
              </a>
            </div>
            <div class="border link-unstyled text-center about-sidebar">
              <a @click="about" class="btn w-100 h-100 pt-3 pb-3">About</a>
            </div>
            <div class="border link-unstyled text-center about-sidebar">
              <a @click="logout" class="btn w-100 h-100 pt-3 pb-3">Logout</a>
            </div>
            <div
              class="border link-unstyled text-center user mt-5"
              height="300px"
            >
              <button
                class="
                  btn
                  w-100
                  h-100
                  border
                  d-flex
                  justify-content-around
                  align-items-center
                "
              >
                <img
                  src="https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116__340.jpg"
                  alt=""
                  width="50px"
                  height="50px"
                  class="rounded-circle"
                />
                <p class="d-flex align-items-center">User</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- navbar -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      localStorage.clear();
      this.$emit("changePage", "login");
    },
    history() {
      this.$emit("changePage", "history");
    },
    about() {
      this.$emit("changePage", "about");
    },
    createJob() {
      this.$emit("changePage", "createJob");
    },
    listJobs() {
      this.$emit("changePage", "dashboard");
    },
  },
};
</script>

<style>
</style>