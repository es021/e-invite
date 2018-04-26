
<template>
<div id="app-header" class="app-header" v-bind:style="{backgroundImage:backgroundImage}">
  <div class="title font-lobster">
    Huwaida<br>
    <span class="and">
    &
    </span><br>
    Zulsarhan
  </div>
  <div class="date">
    28 September 2018
  </div>

  <div class="wzs21" id="button-next-page">NEXT</div>
</div>
</template>

<script>
import { AppImg } from "../config/app-config";
import { animeExec } from "../lib/anime";
import anime from "animejs";

export default {
  name: "AppHeader",
  data() {
    return {
      backgroundImage: `url('${AppImg.get(AppImg.header)}')`
    };
  },
  mounted : function() {
    var oriSize = "50px";
    var newSize = "55px";
    var expandRate = 200;
    var contractRate = 300;
    var prop = {
      width: [
        { value: newSize, duration: expandRate },
        { value: oriSize, duration: contractRate }
      ],
      height: [
        { value: newSize, duration: expandRate },
        { value: oriSize, duration: contractRate }
      ]
    };

    animeExec("#button-next-page", prop, 1000, true);
  }
};
</script>

<style lang="scss" scoped>

</style>
