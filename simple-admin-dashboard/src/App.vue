<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
*{
    scroll-behavior: smooth;
    font-family: 'Open Sans';
}

.v-main {
    background: #37363d;
}

body {
    background: #37363d;
}

p {
    color: #b6b6b6;
}

h3 {
    margin-bottom: 50px;
    color: #b6b6b6;
}

label {
    color: #b6b6b6;
}
</style>
