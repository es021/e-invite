
<template>
  <div>
    <div class="map-parent">
      <div class="map-detail">
        <div class="map-address">
          <div class="text">
            {{locationTitle}}
            <br />
            <small class="text-muted" v-html="locationDetail">
            </small>
          </div>
        </div>
        <div
          class="map-app"
          data-aos="zoom-in"
          data-aos-anchor="#content-map"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
        >
          <ButtonImage :onClick="openWaze" color="light-blue" imgPath="waze.png" />
          <ButtonImage :onClick="openGoogleMap" color="green" imgPath="gm.png" />
        </div>
      </div>
      <div class="map-google">
        <iframe
          :src="googleMapUrl"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import * as Data from "../data";

export default {
  name: "ContentMap",
  data: () => {
    return {
      ...Data.Map
    };
  },
  methods: {
    openWaze() {
      window.location = this.onClickWaze;
    },
    openGoogleMap() {
      window.location = this.onClickGoogle;
    },
  },
};
</script>



