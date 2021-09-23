<template>
<div>
  <div id="userform">
    <div id="register-page" class="container" style="max-width: 600px">
      <img class="imglogin" src="https://ik.imagekit.io/xvfgr2ixls8/undraw_Investing_re_bov7_xfR9gvJQqu.png?updatedAt=1632339316991">
      <h1 style="text-align: center">Start your investment journey!</h1>
      <br />
      <div class="card border-dark" style="background-color: #C0EC83">
        <article class="card-body mx-auto" style="max-width: 400px">
          <h4 class="card-title mt-3 text-center">Create Account</h4>
          <br />
          <!-- form register -->
          <form @submit.prevent="register" id="register-form">
            <!-- username -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
              </div>
              <input
                v-model="username"
                id="username-register"
                name="username"
                class="form-control"
                placeholder="Username"
                type="text"
              />
            </div>

            <!-- email -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
              <input
                v-model="email"
                id="email-register"
                name="email"
                class="form-control"
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
                id="password-register"
                name="password"
                class="form-control"
                placeholder="Password"
                type="password"
              />
            </div>

            <!-- submit -->
            <div class="form-group" style="text-align: center">
              <button type="submit" class="btn-lg btn-dark rounded-pill">Get Started</button>
            </div>

            <!-- back to login -->
            <p class="text-center">
              Have an account?
              <router-link class="next"
              style="color: black; font-weight: bold;"
              to="/login">Login &raquo;</router-link>
              <br>
              <br>
              <router-link class="previous"
              style="color: black; font-weight: bold;"
              to="/">&laquo; Back</router-link>  
            </p>
          </form>
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
  name: 'Register',
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      let payload = {
        username: this.username,
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('registerUser', payload)
      .then(({data}) => {
        this.$swal(`Successfully created ${data.email}'s account`)
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
}
</script>

<style lang="css">
@import '../assets/style.css'
</style>