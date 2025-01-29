<script setup>
import * as echarts from 'echarts'
import { onMounted, ref, inject } from 'vue'

let axios = inject('axios')

const chartData = ref([])

const getData = async () => {
  let res = await axios.get('/chartThree/data')
  chartData.value = res.data.data.chartData

}

onMounted(() => {
  getData().then(() => {
    let myChart = echarts.init(document.querySelector('.pie'))
    let option = {
      legend: {
        top: 'bottom',
        textStyle: {
          color: '#fff'
        }
      },
      series: [{
        type: 'pie',
        data: chartData.value,
        radius: [10, 100],
        center: ['50%', '45%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 10
        }
      }]
    }
    myChart.setOption(option)
  })
})

</script>
<template>
  <h1>库存统计</h1>
  <div class="pie">
  </div>
</template>
 <style scoped>
h1 {
  margin-top: 0.1rem;
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.pie {
  width: 100%;
  height: 100%;
}
</style>
