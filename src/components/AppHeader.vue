
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
</div>
</template>

<script>
import { AppImg } from "../config/app-config";

export default {
  name: "AppHeader",
  data() {
    return {
      backgroundImage: `url('${AppImg.get(AppImg.header)}')`
    };
  },
  created() {}
};
</script>
