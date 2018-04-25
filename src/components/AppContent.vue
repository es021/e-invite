
<template>
<div id="app-content" class="app-content">
  
  <div id="intro" class="section">
     <div data-aos="zoom-in"
        data-aos-anchor="#app-header"
        data-aos-duration="700"
        data-aos-anchor-placement="center-center">
          <small>Assalamualaikum Warahmatullah Wa Barakahtuh</small>
    </div>
  </div>

  <div id="details" class="section">
     <div class="box-triangle" data-aos="fade-right"
        data-aos-anchor="#intro"
        data-aos-duration="800"
        data-aos-anchor-placement="top-top">
        <div class="box-text">
          Details
        </div>
    </div>
  </div>

  <div id="map" class="section">
     <div class="box-triangle" data-aos="fade-right"
        data-aos-anchor="#intro"
        data-aos-duration="800"
        data-aos-anchor-placement="center-top">
        <div class="box-text">
          Location
        </div>
    </div>
  </div>
  <!-- <div id="map" class="section"
     v-bind:style="{backgroundImage:backgroundImage2}">
     <div class="box-triangle" data-aos="fade-right"
        data-aos-anchor="#intro"
        data-aos-duration="800"
        data-aos-anchor-placement="center-top">
        <div class="box-text">
          Location
        </div>
    </div>
  </div> -->

</div>
</template>

<script>
import { AppImg } from "../config/app-config";
//     v-bind:style="{backgroundImage:backgroundImage2}"

export default {
  name: "AppContent",
  data() {
    return {
      backgroundImage2: `url('${AppImg.get("background.png")}')`
    };
  },
  created() {}
};
</script>

<style lang="scss" scoped>
@import "../style/define/_constant.scss";
@import "../style/define/_mixin.scss";

$COLOR-PEACH: #f0e7d6;

@mixin triangle-left($height, $width,$widthTriangle, $color) {
  width: 0;
  height: 0;
  border-bottom: $height solid $color;
  border-left: $width solid $color;
  border-right: $widthTriangle solid transparent;
}

$IMAGE-BOX-HEIGHT: 300px;
$IMAGE-BOX-WIDTH: 215px;
$IMAGE-BOX-TRI-WIDTH: 100px;
.app-content {
  font-family: "Bad Script";

  #intro {
  }

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

  .section {
    border-top: $COLOR-THEME 2px dotted;
    padding:10px;
    background: $COLOR-PEACH;
    background-size: cover;
    background-position: center center;
    font-weight: bold;
    font-size: 20px;
    height: 70vh;
    color: $COLOR-TEXT;
  }
}
</style>
