
<template>
  <div class="app-footer">
  <div class="footer-copyright">
      {{hashtag}}
      <!-- © {{year}} YouAreInvited -->
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/test-css">Test Css</router-link>
      <router-link to="/test-aos">Test Aos</router-link> -->
  </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => {
    return {
      hashtag : "#balqisizhar",
      // year: ""
    };
  },
  created() {
    var time = new Date();
    this.year = time.getFullYear();
  }
};
</script>


