
<template>
  <div class="doa" v-html="SatukanHati"></div>
</template>

<script>
import * as Data from "../data";

export default {
  name: "ContentDoa",
  data() {
    return {
      ...Data.Doa,
    };
  },
  mounted() {},
};
</script>


