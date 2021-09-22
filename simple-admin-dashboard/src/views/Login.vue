<template>
  <div id="login"  style="display: flex;
    margin-top: 100px;
    justify-content: center;
    ">
        <div style="padding-left: 50px;
            padding-right: 50px;
            ">
            <div class="login-container"
            style="width: 500px;
            padding: 1.5rem;
            background-color: #23232e;">
                <form @submit.prevent="login" id="login-form">
                    <div><h3>Simple Admin Dashboard</h3></div>
                    <div class="mb-3">
                        <label for="login-email" class="form-label">Email Address</label>
                        <input v-model="email" id="login-email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Please Input your email" required>
                    </div>
                    <div class="mb-3">
                        <label for="login-password" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control" placeholder="Please input your password" id="login-password" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <div class="g-signin2" style="padding: 5%;" data-onsuccess="onSignIn"></div>
                </form>
                <div>
                    <p>Don't have an account yet? <a @click.prevent="toRegister" id="register-button" href="">Sign Up</a> here</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from "../router/index"

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login () {
            this.$store.dispatch("login", {
                email: this.email,
                password: this.password
            })
        },
        toRegister() {
            router.push({path: "/register"})
        }
    }
}
</script>

<style>

</style>