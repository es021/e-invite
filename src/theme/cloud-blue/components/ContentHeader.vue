
<template>
  <div class="app-header" v-bind:style="{backgroundImage:background}">
    <div class="app-header-content">
      <div class="date">{{eventName}}</div>
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
import * as Data from "../data";

export default {
  name: "ContentHeader",
  data() {
    return {
      ...Data.Header,
    };
  },
};
</script>


