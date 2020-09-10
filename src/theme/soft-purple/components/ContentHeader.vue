
<template>
  <div class="app-header" v-bind:style="{backgroundImage:background}">
    <div class="app-header-content">
      <div class="date">THE WEDDING OF</div>
      <div class="title font-lobster">
        {{pengantinPerempuan}}
        <br />
        <span class="and">&</span>
        <br />
        {{pengantinLelaki}}
      </div>
      <div class="date">
        {{day}}
        <br />
        <br />
        {{date}}
        <br />
        <br />
        <small>{{dateHijr}}</small>
      </div>
    </div>
  </div>
</template>

<script>
import { AppImg } from "../../../config/app-config";

export default {
  name: "ContentHeader",
  data() {
    return {
      day: "SATURDAY",
      date: "29 SEPTEMBER 2018",
      dateHijr: "19 MUHARRAM 1440H",
      pengantinLelaki: "Izhar",
      pengantinPerempuan: "Balqis",
      background: `url('${AppImg.get("soft-purple-header.jpg")}')`,
    };
  },
};
</script>


