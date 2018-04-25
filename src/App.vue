<template>
  <div id="app">
  <router-link to="/">Home</router-link>
  <router-link to="/test-css">Test Css</router-link>
  <router-link to="/test-aos">Test Aos</router-link>

   <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
