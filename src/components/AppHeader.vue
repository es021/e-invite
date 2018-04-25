
<template>
<div id="app-header" class="app-header" v-bind:style="{backgroundImage:backgroundImage}">
  <div class="header font-lobster">Hello World!</div>
</div>
</template>

<script>
import { AppImg } from '../config/app-config';

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
