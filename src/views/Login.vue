<template>
   <section>
    <form
      v-on:submit.prevent="loginButton"
      id="login"
      class="form-container container"
    >
      <h1>Login</h1>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="user.email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="user.password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <GoogleLogin
        :params="params"
        :renderParams="renderParams"
        :onSuccess="onSuccess"
        :onFailure="onFailure"
      ></GoogleLogin>
      <p>
        Don't have account?
        <router-link to="/register">Sign Up</router-link>
        <router-view/>
      </p>
    </form>
  </section>
</template>

<script>
import axios from '../axios/server'
import GoogleLogin from 'vue-google-login'
import swal from 'sweetalert'
export default {
name:'login',
  data(){
    return{
      user:{
        email:"",
        password:""
      },
      params: {
        client_id:
          "865238389938-3608gnfpfuco8dokhjuf95v900oglpn6.apps.googleusercontent.com",
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    }
  },
  components: {
    GoogleLogin,
  },
  created(){
    if (localStorage.getItem('access_token')) {
      this.$router.push('/')
    }
  },
  methods:{
    loginButton(){
      axios({
        url:'/login',
        method:'post',
        data:{
          email: this.user.email,
          password: this.user.password
        }
      })
      .then((res)=>{
        localStorage.setItem('access_token', res.data.access_token)
        this.$router.push('/')
      })
      .catch((err)=>{
        swal({
            title: `${err.response.status}`,
            text: `${err.response.data[0]}`,
            icon: "error",
          });
        console.log(err)
      })
    },
    onSuccess(googleUser) {
      // console.log(googleUser.Zb.id_token);
      // this.$emit("idToken", googleUser.Zb.id_token)
      axios({
        url: `/customers/authGoogle`,
        method: "post",
        data: { idToken: googleUser.Zb.id_token },
      })
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err.response);
        });
      // This only gets the user information: id, name, imageUrl and email
      // console.log(googleUser.getBasicProfile());
    },
    onFailure() {},
  }
}
</script>

<style>

</style>