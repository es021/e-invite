
<template>
  <div class="app-footer">
      © {{year}} YouAreInvited
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/test-css">Test Css</router-link>
      <router-link to="/test-aos">Test Aos</router-link> -->
  </div>
</template>

<script>
export default {
  name: "Footer",
  data : {
    year : ""
  },
  created(){
    var time = new Date();
    this.year = time.getFullYear();
  }
};
</script>


