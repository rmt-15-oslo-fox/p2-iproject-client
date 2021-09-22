<template>
  <div class="d-flex justify-content-center align-items-center" style="padding:50px 175px; height: 100vh;">
      <div class="d-flex justify-content-center align-items-center w-100 shadow-lg h-100">
          <div class="p-5 w-50">
              <div class="py-2 d-flex flex-row justify-content-between">
                  <div class="p-2">
                      <img :src="'../assets/cocktailLogo.png'">
                  </div>
                  <div class="p-2 d-flex justify-content-between">
                      <div class="p-1">
                          Sign In
                      </div>
                      <div class="p-1">
                          <router-link to="/register">Sign Up</router-link>
                      </div>
                  </div>
              </div>
              <div class="py-2 text-left">
                  <h2>Sign In</h2>
                  <h5>Sign in to continue to our website</h5>
              </div>
              <div class="py-2">
                  <form @submit.prevent="handleRegister">
                        <div class="my-3">
                            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address">
                        </div>
                        <div class="my-3">
                            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <div class="mt-2">
                            <button type="submit" class="btn btn-primary">Register</button>
                        </div>
                  </form>
              </div>
          </div>
          <div class="p-2 right w-50">
              kanan
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name : 'Register',
    data(){
        return {
            email : '',
            password: '',
        }
    },
    methods : {
        handleRegister(){
            const payload = {
                email : this.email,
                password : this.password
            }
            this.$store.dispatch('register', payload)
        }
    }
}
</script>

<style scoped>
.right {
    background-image: linear-gradient(to bottom right, #0F2E0E, #1E6A1C) ;
    height: 100%
}
</style>