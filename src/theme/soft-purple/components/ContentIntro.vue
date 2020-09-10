
<template>
  <div>
    <div class="title">Walimatul Urus</div>

    <div class="body">
      <small>Assalamualaikum Warahmatullahi Wabarakatuh</small>
      <br />
      <br />
      <b>
        HJ. ABU BAKAR BIN MAHABOT
        <br />&
        <br />HJH. ZUBAIDAH BINTI ABDUL HALIM
      </b>
      <br />
      <br />

      <small>
        Dengan penuh rasa kesyukuran kepada Allah SWT
        <br />dan berbesar hati ingin mempersilakan
        <br />DATO' / DATIN / TUAN / PUAN / ENCIK / CIK
        <br />
        <div class="text-jemputan">{{jemputan}}</div>-------------------------------------------------------------
        <br />sekeluarga bagi menyerikan majlis perkahwinan puteri kami
        <br />
        <div class="text-title">Siti Balqis Binti Muhammad Ghanisma</div>dengan pasangannya
        <div class="text-title">Izhar</div>
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentIntro",
  data() {
    return {
      jemputan: "",
    };
  },
  mounted() {
    var jemputan = this.$route.params.jemputan;
    this.jemputan = jemputan;
  },
};
</script>


