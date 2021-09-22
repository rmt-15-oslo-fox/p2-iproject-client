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
    <!-- Main Feature -->
    <div id="Main-feature">
      <div class="container">
        <!-- Login -->
        <div class="container-login row">
          <div class="login-page row">
            <div class="page-login col-7">
              <img src="https://www.djkn.kemenkeu.go.id/foto-thumbnail/300/2020/04/covid-4948866_1920/Sekilas-Pandang-Mengenai-Virus-Baru-Covid-19.jpg" width="103%" height="100%" />
            </div>
            <div class="login col">
              <br />
              <form @submit.prevent="addDataLogin">
                <h2>Login</h2>
                <br />
                <label>Username</label><br />
                <input 
                type="text"
                v-model="username" 
                /><br /><br />
                <label>Password</label><br />
                <input 
                type="password"
                v-model="password" 
                /><br /><br />
                <p>
                  Do not have account ?
                  <router-link to="/Register">
                    <a href="">here</a>
                  </router-link>
                </p>
                <br />
                <button class="button-login">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      username : '',
      password : ''
    }
  },
  methods : {
    addDataLogin(){
      const payload = {
        username : this.username,
        password : this.password
      }
      this.$store.commit('addDataLogin',payload)
      this.$store.dispatch('login')
      .then(resp => {
        localStorage.setItem('access_token',resp.data.access_token)
        this.$store.commit('changeIsLogin',true)
        this.$router.push('/')
      })
      .catch(() => {
        // console.log(err)
        this.$router.push('/')
      })
    }
  }
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