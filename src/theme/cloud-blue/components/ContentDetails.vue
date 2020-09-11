
<template>
  <div>
    <div v-for="(d,i) in details" :key="i" class="body detail">
      <div class="det-title">
        <i :class="`fa fa-${d.icon} left`"></i>
        {{d.title}}
      </div>
      <div v-for="(item,k) in d.data" :key="k" class="det-item">
        <div class="deti-label" v-html="item.label"></div>
        <div class="deti-value">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Data from "../data";
export default {
  name: "ContentDetails",
  data() {
    return {
      details: Data.Detail,
    };
  },
};
</script>


