<template lang="">
  <div class="min-h-screen bg-green-50 flex">
    <div
      class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img
            class="h-24 mx-auto w-auto"
            src="@/assets/LogoMain.png"
            alt="Logo"
          />
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Or
            {{ ' ' }}
            <router-link
              to="/register"
              class="font-medium text-green-600 hover:text-green-500"
            >
              Register
            </router-link>
          </p>
        </div>

        <div class="mt-8">
          <div>
            <div>
              <p class="text-sm font-medium text-gray-700">
                Sign in with
              </p>

              <div class="mt-1 flex justify-center">
                <div>
                  <a
                    @click.prevent="handleGoogle"
                    href="#"
                    class="w-full inline-flex justify-center py-2 px-9 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-green-50"
                  >
                    <span class="sr-only">Sign in with Google</span>
                    <img
                      class="h-5 w-5"
                      src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-6 relative">
              <div
                class="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div class="w-full border-t border-gray-300" />
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <form @submit.prevent="handleLogin" class="space-y-6">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    v-model="loginData.email"
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="space-y-1">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    v-model="loginData.password"
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required=""
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1473&q=80"
        alt=""
      />
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      loginData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(['actionLogin', 'actionGoogleSignIn']),

    async handleLogin() {
      try {
        await this.actionLogin(this.loginData);
        this.$router.push('/dashboard');
      } catch (error) {
        console.log(error);
      }
    },
    async handleGoogle() {
      try {
        let googleUser = await this.$gAuth.signIn();
        let id_token = await googleUser.getAuthResponse().id_token;
        await this.actionGoogleSignIn(id_token);
        this.$router.push('/dashboard');
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
