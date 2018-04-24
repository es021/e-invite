
<template>
<div>


    HTML SCSS JS Result 

EDIT ON
  
    
    
    
    
    
    
    
  

<div class="item item--secondary"
     data-aos="fade-right"
     data-aos-anchor="#trigger-left"
     data-aos-anchor-placement="top-top">
  LEFT
  <span>when top of <strong>2</strong> hits top of window</span>
</div>

<div class="item item--primary"
     data-aos="fade-left"
     data-aos-anchor="#trigger-right"
     data-aos-anchor-placement="top-center">
  RIGHT
  <span>when top of <strong>5</strong> hits center of window</span>
</div>

<div class="item">1</div>
<div class="item" id="trigger-left">
  2
  <span>trigger left</span>
</div>
<div class="item">3</div>
<div class="item">4</div>
<div class="item" id="trigger-right">
  5
  <span>trigger right</span>
</div>
<div class="item">6</div>
<div class="item">7</div>
<div class="item">8</div>
<div class="item">9</div>
<div class="item">10</div>
<div class="item">11</div>
<div class="item">12</div>


</div>

</template>

<script>
export default {
  name: "AppHome"
};
</script>

<style scoped lang="scss">
@mixin center-v () {
  position: fixed;
  top: 0;
  bottom: 0;
  margin: auto;
}

body {
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

.item {
  width: 200px;
  margin: 50px auto;
  max-height: 250px;
  padding: 75px 20px;
  background: #ccc;
  text-align: center;
  color: #FFF;
  font-size: 3em;
  
  span {
    display: block;
    font-size: 1rem;
  }

  &--primary {
    @include center-v;
    right: 20px;
    background: green;
  }
  
  &--secondary {
    @include center-v;
    left: 20px;
    background: red;
  }
}
</style>