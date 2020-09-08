
<template>
  <div class="app-header" v-bind:style="{backgroundImage:background}">
    <div class="title font-lobster">
      {{pengantinPerempuan}}<br>
      <span class="and">
      &
      </span><br>
      {{pengantinLelaki}}
    </div>
    <div class="date">
     {{date}}<br><br>
     <small>{{dateHijr}}</small>
    </div>
  </div>
</template>

<script>
import { AppImg } from "../../../config/app-config";

export default {
  name: "ContentHeader",
  data() {
    return {
      date : "Sabtu, 29 September 2018",
      dateHijr : "19 Muharram 1440H",
      pengantinLelaki : "Izhar",
      pengantinPerempuan : "Balqis",
      background: `url('${AppImg.get("soft-purple.jpg")}')`,
    };
  },
};
</script>


