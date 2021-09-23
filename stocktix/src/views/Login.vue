<template>
<div>
  <div class="container">
    <div id="userform">
    </div>
    <div id="login-page" class="container" style="max-width: 600px">
      <img class="imglogin" src="https://ik.imagekit.io/xvfgr2ixls8/undraw_Finance_re_gnv2_xOrnOSaTu4.png?updatedAt=1632339304901">
      <h1 style="text-align: center">Hi, Welcome Back!</h1>
      <br />
      <div class="card border-dark" style="background-color: #C0EC83">
        <article class="card-body mx-auto" style="max-width: 400px;">
          <h4 class="card-title mt-3 text-center">Login</h4>
          <br />
          <!-- form login -->
          <form @submit.prevent="login" id="login-form">
            <!-- email -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
              <input
                v-model="email"
                id="email-login"
                class="form-control"
                name="email"
                placeholder="Email"
                type="email"
              />
            </div>

            <!-- password -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
              </div>
              <input
                v-model="password"
                id="password-login"
                class="form-control"
                name="password"
                placeholder="Password"
                type="password"
              />
            </div>

            <!-- submit -->
            <div class="form-group" style="text-align: center">
              <button type="submit" class="btn-lg btn-dark rounded-pill">Login</button>
            </div>

            <!-- back to login -->
          <p class="text-center">
          Doesn't have an account yet?<br />
          <router-link class="next"
          style="color: black; font-weight: bold;"
          to="/register">Create New Account &raquo;</router-link> 
          </p>
          </form>
          <p class="divider-text" style="text-align: center">
          <router-link class="previous"
          style="color: black; font-weight: bold;"
          to="/">&laquo; Back</router-link>
           </p>
        </article>
      </div>
    </div>
  </div>
  <Footer />
</div>

</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch('loginUser', {
        email: this.email,
        password: this.password
      })
      .then(data => { 
        localStorage.setItem('access_token', data.data.access_token)
        this.$store.commit('SET_ISLOGIN', true)
        this.$router.push('/')
      })
      .catch(err => {
        this.$swal(err.message)
      })
    },
  },
  components: {
    Footer
  }
};
</script>

<style lang="css">
@import '../assets/style.css'
</style>