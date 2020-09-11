
<template>
  <div id="app-content" class="app-content">
    <div id="content-header">
      <ContentHeader></ContentHeader>
    </div>

    <div id="content-intro" class="section" v-bind:style="{backgroundImage:background}">
      <div
        class="content-box"
        data-aos="zoom-in"
        data-aos-anchor="#content-header"
        data-aos-duration="800"
        data-aos-anchor-placement="center-center"
      >
        <ContentIntro></ContentIntro>
      </div>
    </div>

    <div id="content-details" class="section" v-bind:style="{backgroundImage:background}">
      <div
        class="content-box"
        data-aos="zoom-out"
        data-aos-anchor="#content-intro"
        data-aos-duration="800"
        data-aos-anchor-placement="top-top"
      >
        <ContentDetails></ContentDetails>
      </div>
    </div>

    <div id="content-map" class="section" v-bind:style="{backgroundImage:background}">
      <div
        class="content-box"
        data-aos="zoom-in"
        data-aos-anchor="#content-map"
        data-aos-duration="800"
        data-aos-anchor-placement="top-center"
      >
        <ContentMap></ContentMap>
      </div>
    </div>

    <div id="content-ads">
      <!-- <ContentAds></ContentAds> -->
      <!-- <div data-aos="zoom-out"
        data-aos-anchor="#content-map"
        data-aos-duration="1300"
        data-aos-anchor-placement="top-center">
        <ContentAds></ContentAds>
      </div>-->
    </div>
  </div>
</template>

<script>
import { AppImg } from "../../../config/app-config";

export default {
  name: "AppContent",
  data() {
    return {
      background: `url('${AppImg.get("cloud-blue-body.jpg")}')`,
    };
  },
};
</script>

<style lang="scss" scoped>
// @mixin triangle-left($height, $width,$widthTriangle, $color) {
//   width: 0;
//   height: 0;
//   border-bottom: $height solid $color;
//   border-left: $width solid $color;
//   border-right: $widthTriangle solid transparent;
// }

// $IMAGE-BOX-HEIGHT: 300px;
// $IMAGE-BOX-WIDTH: 215px;
// $IMAGE-BOX-TRI-WIDTH: 100px;

// .box-triangle {
//   @include triangle-left($IMAGE-BOX-HEIGHT
//   , $IMAGE-BOX-WIDTH
//   , $IMAGE-BOX-TRI-WIDTH
//   , rgba(255,255,255, 0.4));
//   color: rgba(0, 0, 0, 0.6);
//   box-sizing: border-box;
//   .box-text {
//     position: absolute;
//     left: -$IMAGE-BOX-WIDTH;
//     padding: 10px;
//   }
// }
</style>
