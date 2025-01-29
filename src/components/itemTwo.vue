<script setup>
import { onMounted, ref, inject } from 'vue'
import * as echarts from 'echarts'

let axios = inject('axios')

let chartData = ref({})
let xAxisData = ref([])
let yAxisData = ref({})
let legend = ref([])

const getData = async () => {
  let res = await axios.get('/chartTwo/data')
  chartData.value = res.data.data.chartData
  xAxisData.value = chartData.value.day
  yAxisData.value = chartData.value.num
  legend.value = Object.keys(yAxisData.value)

}

onMounted(() => {
  let echartTwo = echarts.init(document.getElementById('chartTwo'))
  getData().then(() => {
    let option = {
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
      legend: {
        data: legend.value
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      series: [
        {
          name: 'Chemicals',
          type: 'line',
          data: yAxisData.value.Chemicals,
          smooth: true,
          stack: 'Total',
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(
              0, // x0
              0, // y0
              0, // x1
              1, // y1
              [
                {
                  offset: 0,
                  color: 'rgba(128, 255, 165, 1)' // 起始颜色
                },
                {
                  offset: 1,
                  color: 'rgba(1, 191, 236, 1)' // 结束颜色
                }
              ]
            )
          },

          emphasis: {
            focus: 'series'
          },
          lineStyle: {
            width: 0
          }
        },
        {
          name: 'digit',
          type: 'line',
          data: yAxisData.value.digit,
          smooth: true,
          stack: 'Total',
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(
              0, // x0
              0, // y0
              0, // x1
              1, // y1
              [
                {
                  offset: 0,
                  color: 'rgba(0, 221, 255,1)' // 起始颜色
                },
                {
                  offset: 1,
                  color: 'rgba(77, 119, 255,1)' // 结束颜色
                }
              ]
            )
          },
          lineStyle: {
            width: 0
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'Electrical',
          type: 'line',
          data: yAxisData.value.Electrical,
          smooth: true,
          stack: 'Total',
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(
              0, // x0
              0, // y0
              0, // x1
              1, // y1
              [
                {
                  offset: 0,
                  color: 'rgba(168, 155, 105, 1)' // 起始颜色
                },
                {
                  offset: 1,
                  color: 'rgba(1, 101, 136, 1)' // 结束颜色
                }
              ]
            )
          },
          lineStyle: {
            width: 0
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'gear',
          type: 'line',
          data: yAxisData.value.gear,
          smooth: true,
          stack: 'Total',
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(
              0, // x0
              0, // y0
              0, // x1
              1, // y1
              [
                {
                  offset: 0,
                  color: 'rgba(128, 255, 165, 1)' // 起始颜色
                },
                {
                  offset: 1,
                  color: 'rgba(1, 131, 216, 1)' // 结束颜色
                }
              ]
            )
          },
          lineStyle: {
            width: 0
          },
          emphasis: {
            focus: 'series'
          }
        },
        {
          name: 'Clothes',
          type: 'line',
          stack: 'Total',
          data: yAxisData.value.Clothes,
          smooth: true,
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(
              0, // x0
              0, // y0
              0, // x1
              1, // y1
              [
                {
                  offset: 0,
                  color: 'rgba(88, 25, 165, 1)' // 起始颜色
                },
                {
                  offset: 1,
                  color: 'rgba(66, 131, 216, 1)' // 结束颜色
                }
              ]
            )
          },
          lineStyle: {
            width: 0
          },
          emphasis: {
            focus: 'series'
          }
        },
      ]
    }
    echartTwo.setOption(option)
  })


})
</script>

<template>
  <h1>产品月销</h1>
  <div id="chartTwo">
  </div>
</template>
<style scoped>
h1 {
  margin-top: 0.1rem;
  color: #fff;
  font-size: 20px;
  text-align: center;
}
#chartTwo {
  width: 100%;
  height: 100%;
}
</style>
