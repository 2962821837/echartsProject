<script setup>
import itemPage from '@/components/itemPage.vue';
import itemOne from '@/components/itemOne.vue';
import itemTwo from '@/components/itemTwo.vue';
import itemThree from '@/components/itemThree.vue';
import itemFour from '@/components/itemFour.vue';
import mapPage from '@/components/mapPage.vue';

import { onMounted } from 'vue';



onMounted(() => {
})
</script>
<template>
  <div class="home">
    <header>
      <h1>大数据可视化--vue3.0与echarts</h1>
    </header>
    <!-- 大容器 -->
    <section class='container'>
      <!-- 左容器 -->
      <section class='itemLeft'>
        <itemPage>
          <itemOne></itemOne>
        </itemPage>
        <itemPage>
          <itemTwo></itemTwo>
        </itemPage>
      </section>
      <!-- 中容器 -->
      <section class='itemCenter'>
        <mapPage></mapPage>
      </section>
      <!-- 右容器 -->
      <section class='itemRight'>
        <itemPage>
          <itemThree></itemThree>
        </itemPage>
        <itemPage>
          <itemFour></itemFour>
        </itemPage>
      </section>
    </section>
  </div>
</template>
<style lang="less">
.home {
  height: 100vh;
}
header {
  height: 1rem;
  width: 100%;
  /* 设置一个半透明淡蓝色 */
  background-color: rgba(0, 0, 255, 0.2);
  /* 把标题文字样式设置 */
  h1 {
    font-size: 0.375rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
}
// 主体容器样式
.container {
  // 这里就不需要设置使用rem了
  min-width: 1200px;
  max-width: 2048px;
  // 设置居中
  margin: 0 auto;
  // 盒子上10px 左右10px 下0的外边距
  padding: 0.125rem 0.125rem 0;
  display: flex; //父容器设置flex布局才能在子元素使用
  // 设置左中右的占比 但是不要忘了在父容器要设置flex
  .itemLeft,
  .itemRight {
    flex: 3;
  }
  .itemCenter {
    flex: 5;
  }
}
</style>