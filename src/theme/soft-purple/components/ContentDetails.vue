
<template>
  <div>
      <div v-for="(d,i) in details" :key="i" class="body detail">
          <div class="det-title">
            <i :class="`fa fa-${d.icon} left`"></i>
            {{d.title}}
          </div>
          <div v-for="(item,k) in d.data" :key="k" class="det-item">
            <div class="deti-label" v-html="item.label">
            </div>
            <div class="deti-value">
              {{item.value}}
            </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "ContentDetails",
  data() {
    return {
      details: [
        {
          title: "TARIKH",
          icon : "calendar",
          data: [
            {
              label: "29 Sept 2018 (Sabtu)<br>19 Muharram 1440H"
            }
          ]
        },
        {
          title: "ALAMAT",
          icon : "map-marker-alt",
          data: [
            {
              label: "Dewan Sri Jugra<br>Jalan Stadium Telok Datok<br>Telok Datok<br>42700 Banting, Selangor"
            }
          ]
        },
        {
          title: "ATUCARA MAJLIS",
          icon : "clock",
          data: [
            {
              label: "Jamuan Makan",
              value: "11 AM - 4 PM"
            },
            {
              label: "Ketibaan Pengantin",
              value: "12 PM"
            }
          ]
        },
        {
          title: "UNTUK DIHUBUNGI",
          icon : "phone",
          data: [
            {
              label: "Hjh Zubaidah (Ibu)",
              value: "013 320 1800"
            },
            {
              label: "Balqis (Kakak)",
              value: "019 364 0730"
            },
            {
              label: "Shahirah (Kakak)",
              value: "019 995 6989"
            }
          ]
        }
      ]
    };
  }
};
</script>


