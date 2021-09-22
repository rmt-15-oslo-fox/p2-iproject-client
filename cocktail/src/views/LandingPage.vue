<template>
  <div class="d-flex parent">
      <div class="d-flex flex-column sidebar-green h-100">
          <div >
              logo
          </div>
          <div>
              content
          </div>
      </div>
      <div class="d-flex flex-column content-page h-100">
          <div>
              Navbar
          </div>
          <div>
              Search
          </div>
          <div class="container">
              <div class="row">
                  <div class="col">
                    <result-card></result-card>
                  </div>
                  <div class="col">
                    <result-card></result-card>
                  </div>
                  <div class="col">
                    <result-card></result-card>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import ResultCard from '../components/ResultCards.vue'
export default {
components : { ResultCard }
}
</script>

<style scoped>
.parent {
    height: 100vh;
}

.sidebar-green {
    background-color:#0F430E;
    width: 20%;
    color: white;
}

.content-page {
    width: 80%
}
</style>