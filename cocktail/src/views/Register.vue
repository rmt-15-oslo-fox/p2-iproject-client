<template>
  <div>
      <div class="d-flex justify-content-center align-items-center">
          <div class="p-2">
              <div class="py-2 d-flex flex-row justify-content-between">
                  <div class="p-2">
                      kiri
                  </div>
                  <div class="p-2 d-flex justify-content-between">
                      <div class="p-1">
                          Sign In
                      </div>
                      <div class="p-1">
                          Sign Up
                      </div>
                  </div>
              </div>
              <div class="py-2">
                  Tengah
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
          <div class="p-2">
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
            password: ''
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

<style>

</style>