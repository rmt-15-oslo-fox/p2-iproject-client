<template>
  <div id="app">
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
    <body>
      <div class="nav-container">
        <div class="nav-bar mt-2">
          <nav class="nav-bar-text">
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li v-if="isLogin"><router-link to="/Search">Search</router-link></li>
              <li v-if="isLogin"><router-link to="/Map">Map</router-link></li>
              <li><a href="">Logout </a></li>
            </ul>
          </nav>
        </div>
      </div>
      <router-view />
    </body>
  </div>
</template>

<script>
export default {
  name : 'App',
  computed : {
    isLogin(){
      return this.$store.state.isLogin
    }
  }
}
</script>

<style scoped>
body {
  background-color: rgba(172, 75, 75, 0.678);
  box-sizing: border-box;
  margin-top: -20px;
}

.nav-bar {
  height: 50px;
  text-align: center;
  border: 2px solid rgb(100, 100, 100);
  border-radius: 200px;
  width: 800px;
  margin: 0 auto;
  font-size: 20px;
  background-color: rgba(55, 96, 102, 0.555);
}

a {
  text-decoration: none;
  color: black;
}

.nav-bar-text {
  margin-top: 10px;
}

.nav-bar ul li {
  list-style-type: none;
  display: inline;
  padding: 50px;
}
.nav-container{
  position: fixed;
  z-index: 99;
  width: 100%;
}
</style>
