<script setup>
import { inject, onMounted, ref } from 'vue';
import * as echarts from 'echarts';

let axios = inject('axios')
let chartData = ref({})
let xAxis = ref([])
let yAxis = ref([])



const getData = async () => {
  let res = await axios.get('/chartOne/data')
  chartData.value = res.data.data.chartData

  xAxis.value = chartData.value.map(item => item.num)
  yAxis.value = chartData.value.map(item => item.title)

}

onMounted(() => {
  getData().then(() => {
    let myChart = echarts.init(document.getElementById('chartOne'));
    let option = {
      title: {

      },
      xAxis: {
        type: 'value',
        axisLabel: {
          color: '#fff'
        }
      },
      yAxis: {
        type: 'category',
        data: yAxis.value,
        axisLine: {
          lineStyle: {
            color: "#fff"
          }
        }
      },
      grid: {
        top: '3%',
        left: '1%',
        right: '6%',
        bottom: '3%',
        containLabel: true
      },
      series: [
        {
          type: 'bar',
          name: '销量',
          data: xAxis.value,
          barWidth: 25,

          label: {
            show: true,
            position: 'right',
            color: '#fff'
          },
          itemStyle: {
            borderRadius: [0, 15, 15, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: '#00c6ff'
              },
              {
                offset: 0.5,
                color: '#0072ff'
              },
              {
                offset: 1,
                color: '#00c6ff'
              }
            ])
          }
        }
      ]
    }
    myChart.setOption(option)
  })

});
</script>
<template>
  <h1>销售总量</h1>
  <div id="chartOne">

  </div>
</template>
<style scoped>
h1 {
  margin-top: 0.1rem;
  color: #fff;
  font-size: 20px;
  text-align: center;
}
#chartOne {
  width: 100%;
  height: 100%;
}
</style>