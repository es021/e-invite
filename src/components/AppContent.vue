
<template>
<div id="app-content" class="app-content">
  
  <div class="photo-text photo-1" 
     v-bind:style="{backgroundImage:backgroundImage2}"
     data-aos="fade-right"
     data-aos-anchor="#app-header"
     data-aos-anchor-placement="top-center">
     Event Details
  </div>

  <div v-for="i in 100" :key="i">
    Test
  </div>
</div>
</template>

<script>
import { AppImg } from "../config/app-config";

export default {
  name: "AppContent",
  data() {
    return {
      backgroundImage2: `url('${AppImg.get(AppImg.header)}')`
    };
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.app-content {
  .photo-text {
    background-size: cover;
    background-position: center center;
    font-weight: bold;
    font-size: 50px;
    color: rgba(255, 255, 255, 0.5);
  }

}
</style>
