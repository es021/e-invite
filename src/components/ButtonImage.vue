
<template>
  <div :class="`btn-img btn-${color}`" v-on:click="onClick">
    <div class="btn-img-img" :style="{backgroundImage:img}"></div>
  </div>
</template>

<script>
import { AppImg } from "../config/app-config";

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

<style lang="scss" scoped>
@import "../style/define/_mixin.scss";

$height: 50px;
$height-img-active: 42px;

.btn-img {
  @include flex_center;
  justify-content: flex-start;
  height: $height;
  width: $height;
  background: white;
  border-radius: 100%;
  border: 1px black solid;
  color: black;
  padding: 5px;
  margin: 10px;
  cursor: pointer;

  .btn-img-img {
    background-position: center center;
    background-size: cover;
    width: $height - 10;
    height: $height - 10;
  }
}

.btn-img:hover {
  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.3);
}

.btn-img:active {
  box-shadow: none;
  .btn-img-img {
    width: $height-img-active;
    height: $height-img-active;
  }
}

.btn-img.btn-light-blue {
  color: darken(#79d1e9, 10);
  border-color: darken(#79d1e9, 10);
}

.btn-img.btn-green {
  color: #0eab69;
  border-color: #0eab69;
}
</style>
