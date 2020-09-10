
<template>
  <div>
    <div class="map-parent">
      <div class="map-detail">
        <div class="map-address">
          <div class="text">
            DEWAN SRI JUGRA
            <br />
            <small class="text-muted">
              JALAN STADIUM TELOK DATOK
              <br />TELOK DATOK
              <br />42700 BANTING, SELANGOR
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
          src="//www.google.com/maps/embed/v1/place?q=Dewan%20Sri%20Jugra%20Banting%20Selangor
          &zoom=15
          &key=AIzaSyARe_33egQYxDFVhHbmbk1JejbD48Yc9Eg"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContentMap",
  data: () => {
    return {};
  },
  methods: {
    openWaze() {
      window.location =
        "waze://?q=Dewan+Sri+Jugra+Jalan+Mahkamah,+Banting,ll=2.8187772,101.5165589,&navigate=yes";
    },
    openGoogleMap() {
      window.location =
        "http://maps.google.com/?daddr=Dewan+Sri+Jugra+Jalan+Mahkamah,+Banting";
    },
  },
};
</script>



