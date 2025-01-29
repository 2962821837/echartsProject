<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

let mapData = ref({});

const getData = async () => {
  mapData.value = await axios.get('http://localhost:8080/map/china-cities.json');
}

onMounted(async () => {
  getData().then(() => {
    let mychart = echarts.init(document.querySelector('.mapPage'));
    echarts.registerMap('china', mapData.value.data);
    mychart.setOption({
      geo: {
        map: 'china',
        itemStyle: {
          areaColor: '#0099ff',
          borderColor: '#00ffff',
          shadowColor: 'rgba(230,131,70, 0.5)',
          shadowBlur: 30,
        },
        emphasis: { // 将 emphasis 提升到与 itemStyle 同级

          focus: 'self'
        },
      },
      series: [
        {
          type: "scatter",
          itemStyle: {
            color: "red",
          },
          name: '城市销售额',
          coordinateSystem: "geo",
          data: [
            { name: "北京", value: [116.46, 39.92, 4367] },
            { name: "上海", value: [121.48, 31.22, 8675] },
            { name: "深圳", value: [114.07, 22.62, 2461] },
            { name: "广州", value: [113.23, 23.16, 187] },
            { name: "西安", value: [108.45, 34, 3421] },
          ],
        }
      ],
      tooltip: {
        trigger: "item",
      },
      visualMap: {
        type: "continuous",
        min: 100,
        max: 5000,
        calculable: true,
        inRange: {
          color: ['#50a3ba', '#eac736', '#d94e5d']
        }
      },
      textStyle: {
        color: '#fff'
      }
    })
  })
})
</script>
<template>
  <h1>城市销售量</h1>
  <div class="mapPage">
    我是地图
  </div>
</template>



<style lang="less" scoped>
h1 {
  margin-top: 0.1rem;
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.mapPage {
  width: 100%;
  height: 100%;
}
</style>