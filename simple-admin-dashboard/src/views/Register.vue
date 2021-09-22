<template>
   <div id="register"  style="display: flex;
    margin-top: 100px;
    justify-content: center;
    ">
        <div style="padding-left: 50px;
            padding-right: 50px;
            ">
            <div class="register-container"
            style="width: 500px;
            padding: 1.5rem;
            background-color: #23232e;">
                <form @submit.prevent="register" id="register-form">
                    <div><h3>Register here</h3></div>
                    <div class="mb-3">
                        <label for="register-email" class="form-label">Email Address (Must be unique)</label>
                        <input v-model="email" type="email" class="form-control" id="register-email" aria-describedby="emailHelp"  placeholder="Please Input your email">
                    </div>
                    <div class="mb-3">
                        <label for="register-password" class="form-label">Password</label>
                        <input v-model="password" type="password" class="form-control" id="register-password" placeholder="Please input your password">
                    </div>
                    <button type="submit" style="margin-right: 20px" class="btn btn-primary">Register</button>
                    <button @click.prevent="toLogin" class="back-btn btn btn-danger">Back</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import router from "../router/index"

export default {
    name: "Register",
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        register() {
            this.$store.dispatch("register", {
                email: this.email,
                password: this.password
            })
        },
        toLogin() {
            router.push({path: "/login"})
        }
    }
}
</script>

<style>

</style>