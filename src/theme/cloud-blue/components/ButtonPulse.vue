
<template>
<div class="pulse-btn-container">
  <div :id="id" class="pulse-btn" v-on:click="onClick">
    <i :class="`${prefix} fa-${icon}`"></i>
  </div>
  </div>
</template>

<script>
import { animatePulse } from "../../../lib/anime";

export default {
  name: "ButtonPulse",
  props: {
    id: {
      type: String
    },
    icon: {
      type: String,
      default: () => []
    },
    prefix: {
      type: String,
      default: "fa"
    },
    size: {
      type: String,
      default: "15px"
    },
    onClick: {
      type: Function,
      default: (ev) => {}
    }
  },
  mounted: function() {
    animatePulse("#" + this.id);
  }
};
</script>

