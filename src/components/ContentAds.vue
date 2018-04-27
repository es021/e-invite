
<template>
  <div class="ads">
    Want your own e-Invitation Card?<br>
    <i class="text-muted">contact us at</i>
    <br><b><i class="fab fa-whatsapp left"></i>016-5246191</b>
    <br><b><i class="fa fa-envelope left"></i>anda.dijemput@gmail.com</b>  
  </div>
</template>

<script>
export default {
  name: "ContentAds"
};
</script>

<style lang="scss" scoped>
@import "../style/define/_mixin.scss";
@import "../style/define/_constant.scss";
.ads {
  font-family: $FONT-NORMAL;
  color: lighten($COLOR-THEME, 20);
  background: darken($COLOR-THEME-DARK, 20);
  padding: 10px 20px;
  padding-bottom: 55px;
  font-size: 12px;
}
</style>
