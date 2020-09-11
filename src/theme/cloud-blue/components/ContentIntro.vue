
<template>
  <div>
    <div class="title">{{eventName}}</div>

    <div class="body">
      <small>Assalamualaikum Warahmatullahi Wabarakatuh</small>
      <br />
      <br />
      <b>
        {{dad}}
        <br />&
        <br />
        {{mom}}
      </b>
      <br />
      <br />
      <small>
        Dengan penuh rasa kesyukuran kepada Allah SWT
        <br />dan berbesar hati ingin mempersilakan
        <br />DATO' / DATIN / TUAN / PUAN / ENCIK / CIK
        <br />
        <div class="text-jemputan">{{jemputan}}</div>-------------------------------------------------------------
        <br />
        sekeluarga bagi menyerikan {{eventName2}} kami
        <br />
        <div class="text-title">{{pengantinPerempuan}}</div>dengan pasangannya
        <div class="text-title">{{pengantinLelaki}}</div>
      </small>
    </div>
  </div>
</template>

<script>
import * as Data from "../data";

export default {
  name: "ContentIntro",
  data() {
    return {
      ...Data.Intro,
      jemputan: "",
    };
  },
  mounted() {
    var jemputan = this.$route.params.jemputan;
    this.jemputan = jemputan;
  },
};
</script>


