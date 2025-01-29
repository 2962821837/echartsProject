<template>
  <div class="itemPage">
    <div class="chart">
      <slot></slot>
    </div>
  </div>
</template>
 <script>
export default {
}
 </script>
 <style scoped>
.itemPage {
  border: 2px solid blue;
  background-color: rgba(56, 56, 233, 0.5);
  height: 5.125rem;
  margin: 0.25rem;
  background-color: rgba(13, 130, 255, 0.851);
}
h2 {
  /* 48像素 */
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.25rem;
}
.chart {
  /* 高度360 */
  height: 4.5rem;
}
</style>
