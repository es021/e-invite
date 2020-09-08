
<template>
  <div class="app-header" v-bind:style="{backgroundImage:background}">
    <div class="title font-lobster">
      Huwaida<br>
      <span class="and">
      &
      </span><br>
      Zulsarhan
    </div>
    <div class="date">
     Sabtu, 29 September 2018<br></br>
     <small>19 Muharram 1440H</small>
    </div>
  </div>
</template>

<script>
import { AppImg } from "../../../config/app-config";

export default {
  name: "ContentHeader",
  data() {
    return {
      background: `url('${AppImg.get(AppImg.header)}')`,
    };
  },
};
</script>


