<template>
  <div>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <title>Page 1</title>
    </head>
    <div class="container">
      <div class="container-login row">
        <div class="search-page row">
          <div class="row">
            <div class="test">
              <h1>SEARCH YOUR PROVINCE</h1>
              <br /><br />
              <form @submit.prevent="sendSearch">
                <input
                  v-model="search"
                  class="search"
                  type="text"
                  placeholder="Search example : sulawesi tengah"
                />
                <br /><br /><br />
                <button class="btn btn-info">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Search -->
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    sendSearch() {
      this.$store.commit("search", this.search);
      this.$store.dispatch("filterData");
      this.$router.push('/Result')
    },
  },
  created() {
    this.$store.dispatch("getDataProvince");
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.container-login {
  height: 100vh;
}

.login-page {
  height: 80vh;
  margin-top: 10vh;
  padding: 20px 150px;
  box-shadow: 1px 2px 20px -1px;
}

.login {
  background-color: rgba(102, 186, 189, 0.836);
  height: 100%;
  text-align: center;
}

.page-login {
  height: 100%;
}

.button-login {
  border: 2px solid blanchedalmond;
  padding: 2px;
  width: 250px;
  background-color: blanchedalmond;
}

.test {
  height: 400px;
  margin-top: 180px;
  text-align: center;
  color: #ffff;
}

.search-page {
  height: 80vh;
  margin-top: 10vh;
  padding: 20px 150px;
  box-shadow: 1px 2px 20px -1px;
  background-color: rgb(34, 44, 63);
  overflow: scroll;
}

.search {
  width: 800px;
  border: 2px solid rgba(219, 211, 211, 0.788);
  border-radius: 20px;
}

/* .card-province {
    height: 100px;
} */

.text-card {
  color: #ffff;
  text-align: center;
}
</style>