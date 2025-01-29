<script setup>
import { ref, onMounted, inject } from 'vue'
import * as echarts from 'echarts'

let axios = inject('axios')
let chartData = ref({})

let xAxisData = ref([])
let yAxisData = ref({})

const getData = async () => {
  let res = await axios.get('/chartFour/data')
  chartData.value = res.data.data.chartData
  xAxisData.value = chartData.value.day
  yAxisData.value = chartData.value.num
}

onMounted(() => {
  getData().then(() => {
    let myChart = echarts.init(document.querySelector('.itemFour'))
    let option = {
      label: {
        show: true
      },
      xAxis: {
        type: 'category',
        data: xAxisData.value,
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['Clothes', 'digit'],
      },
      series: [
        {
          name: 'Clothes',
          stack: 'total',
          data: yAxisData.value.Clothes,
          type: 'bar',
          emphasis: {
            //高亮的图形样式和标签样式。
            focus: "series", //聚焦当前高亮的数据所在的系列的所有图形。
          }
        },
        {
          name: 'digit',
          stack: 'total',
          data: yAxisData.value.digit,
          type: 'bar',
          emphasis: {
            //高亮的图形样式和标签样式。
            focus: "series", //聚焦当前高亮的数据所在的系列的所有图形。
          }
        },
        {
          name: 'Electrical',
          stack: 'total',
          data: yAxisData.value.Electrical,
          type: 'bar',
          emphasis: {
            //高亮的图形样式和标签样式。
            focus: "series", //聚焦当前高亮的数据所在的系列的所有图形。
          }
        },
        {
          name: 'gear',
          stack: 'total',
          data: yAxisData.value.gear,
          type: 'bar',
          emphasis: {
            //高亮的图形样式和标签样式。
            focus: "series", //聚焦当前高亮的数据所在的系列的所有图形。
          }
        },
        {
          name: 'Chemicals',
          stack: 'total',
          data: yAxisData.value.Chemicals,
          type: 'bar',
          emphasis: {
            //高亮的图形样式和标签样式。
            focus: "series", //聚焦当前高亮的数据所在的系列的所有图形。
          }
        }
      ]
    }
    myChart.setOption(option)
  })
})
</script>

<template>
  <h1>产品类别</h1>
  <div class="itemFour">

  </div>
</template>

 <style scoped>
h1 {
  margin-top: 0.1rem;
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.itemFour {
  width: 100%;
  height: 100%;
}
</style>
