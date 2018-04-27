
<template>
<div class="app-scroll">
  <ButtonPulse v-if="directionDown" 
    id="next" :onClick="scrollNext" 
    icon="angle-double-down"/>
  <ButtonPulse v-else 
    id="next" :onClick="scrollUp" 
    icon="angle-double-up"/>
</div>
</template>

<script>
import { animateScroll } from "../lib/scroll";
export default {
  name: "AppScroll",
  data: () => {
    return {
      directionDown: true,
      current: 0,
      contents: ["header", "intro", "details", "map","ads"]
    };
  },
  methods: {
    getElementTop: function(select) {
      function offset(el) {
        var rect = el.getBoundingClientRect(),
          scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      }
      var div = document.querySelector(select);
      var divOffset = offset(div);
      return divOffset.top;
    },
    scrollToContent() {
      var id = this.contents[this.current];
      var top = this.getElementTop("#app-content #content-" + id);
      top -= 10;
      animateScroll(top, 200);
      if (this.current == this.contents.length - 1) {
        this.directionDown = false;
      }
    },
    scrollNext: function(event) {
      this.current++;
      this.scrollToContent();
    },
    scrollUp: function(event) {
      this.current = 0;
      this.directionDown = true;
      this.scrollToContent();
    }
  }
};
</script>

<style lang="scss" scoped>
.app-scroll {
  position: fixed;
  top: 40%;
  left: -4px;
  z-index: 20;
}
</style>

