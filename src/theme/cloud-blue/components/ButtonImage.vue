
<template>
  <div :class="`btn-img btn-${color}`" v-on:click="onClick">
    <div class="btn-img-img" :style="{backgroundImage:img}"></div>
  </div>
</template>

<script>
import { AppImg } from "../../../config/app-config";
import { animatePulse } from "../../../lib/anime";

export default {
  name: "ButtonImage",
  props: {
    imgPath: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      default: ev => {}
    }
  },
  data: () => {
    return {
      img: ""
    };
  },
  created() {
    this.img = `url('${AppImg.get(this.imgPath)}')`;
  }
};
</script>
