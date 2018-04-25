
<template>
<div>
  <link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' />
  <div class="header font-lobster">Hello World!</div>
</div>
</template>

<script>
  export default {
    name: "TestCss"
  };
</script>

<style scoped lang="scss">

  .font-lobster{
    font-family: 'Lobster';
  }

  .header {
    background: url('https://es021.github.io/e-invite/og-image/banner.jpg');
    background-size:cover;
    background-position:center center;
    font-weight:bold;
    font-size : 50px;
    color:rgba(255,255,255,0.5);
  }
</style>