<script setup>
import { provide } from 'vue'
import * as echarts from 'echarts'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8848'

provide('axios', axios)
provide('echarts', echarts)

</script>

<template>
  <router-view />
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}
body {
  background: url('@/assets/bg.jpg') top center no-repeat;
}
</style>
