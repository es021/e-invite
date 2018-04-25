
<template>
<div>
  <h3>Test Css Page</h3>
  <div class="text-clip">Hello World!</div>
</div>
</template>

<script>
  export default {
    name: "TestCss"
  };
</script>

<style scoped lang="scss">
  .text-clip {
    background: url('https://es021.github.io/e-invite/og-image/banner.jpg');
    background-size:cover;
    background-position:center center;
    font-weight:bold;
    font-size : 50px;
    color:rgba(255,255,255,0.5);
  }
</style>