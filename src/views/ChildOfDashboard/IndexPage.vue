<template>
  <div class="text-heigher-green font-medium mb-5">
    <p class="text-4xl">企业碳排放情况一览</p>
    <p class="text-2xl">Dashboard</p>
  </div>

  <el-carousel type="card" :interval="2000" height="144px">
    <el-carousel-item v-for="item in formData">
      <div
        class="h-36 bg-normal-green text-heavy-green rounded-lg px-3 py-4 text-base flex flex-col justify-around"
        :class="item.style"
      >
        <div class="flex flex-row justify-around gap-2">
          <p class="font-semibold">{{ item.name }}排放</p>
          <div class="flex flex-col">
            <p class="self-end">{{ item.id }}</p>
            <P
              >与去年对比时:<span style="color: #77b900" class="text-base">{{ item.cmp }}</span></P
            >
          </div>
        </div>

        <div class="flex flex-row justify-around">
          <div>
            <p>Current Value</p>
            <p class="font-semibold text-lg">{{ item.value }}</p>
          </div>
          <div class="self-center">
            <div>
              <svg
                width="80"
                height="25"
                viewBox="0 0 80 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.50438 6.59999H1L1 25L79 25V8.84021L76.7434 14.4402L75.8469 16.6802H74.7959L72.6938 14.4402L71.2224 16.6802L66.808 16.6804L64.4958 14.4403L63.2345 11.0797L61.3988 12.7602L59.744 14.4402L59.2272 17L58.1761 16.6802H56.8856L54.4786 8.84021L53.7264 11.0802L52.5229 8.84021L51.6203 12.7602L49.2133 6.04021L47.8594 8.84021H45.3019L42.594 3.24022L40.9392 6.04021L38.7599 4.36L36.1045 8.83999L34.3972 0.999999L33.1616 8.83999L24.9196 12.2L23.8666 9.95998H22.8135L20.4065 6.59999H17.9995L17.0969 9.95998L13.4863 3.23999L11.982 12.2L11.2298 8.83999H9.57496L8.07058 0.999999L6.5662 7.71999L5.81401 4.36H3.85832L2.50438 6.59999Z"
                  fill="url(#paint0_linear_183_10789)"
                  fill-opacity="0.16"
                />
                <path
                  d="M1 6.59999H2.50438L3.85832 4.36H5.81401L6.5662 7.71999L8.07058 0.999999L9.57496 8.83999H11.2298L11.982 12.2L13.4863 3.23999L17.0969 9.95998L17.9995 6.59999H20.4065L22.8135 9.95998H23.8666L24.9196 12.2L33.1616 8.83999L34.3972 0.999999L36.1045 8.83999L38.7599 4.36L40.9392 6.04021L42.594 3.24022L45.3019 8.8402H47.8594L49.2133 6.04021L51.6203 12.7602L52.5229 8.8402L53.7264 11.0802L54.4786 8.8402L56.8856 16.6802H58.1761L59.2272 17L59.744 14.4402L61.3988 12.7602L63.2345 11.0797L64.4958 14.4403L66.808 16.6804L71.2224 16.6802L72.6938 14.4402L74.7959 16.6802H75.8469L76.7434 14.4402L79 8.8402"
                  stroke="#6C8C3C"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_183_10789"
                    x1="40"
                    y1="25"
                    x2="40"
                    y2="0.999999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#77B900" stop-opacity="0" />
                    <stop offset="0.809892" stop-color="#77B900" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>

  <div class="flex flex-row justify-between bg-white rounded-lg mb-8 py-5">
    <div>
      <img src="/assets/img/Frame(1).png" alt="some information " />
    </div>
    <div id="five" style="width: 450px; height: 624px"></div>

    <div>
      <div id="three" style="width: 500px; height: 312px"></div>
      <div id="four" style="width: 500px; height: 312px"></div>
    </div>
  </div>

  <div class="py-8 bg-white rounded-lg">
    <div id="bar" style="width: 1350px; height: 312px"></div>
  </div>
</template>

<script setup>
import { generateGraph } from '../../network/generateGraph'
import { getChart } from '../../network/getChart'
import { getActivity } from '../../network/getActivity'
import { onMounted, reactive } from 'vue'
import * as echarts from 'echarts'

const formData = reactive([
  {
    name: '二氧化碳',
    id: 'CO2',
    value: '123923t',
    cmp: '+5.63'
  },
  {
    name: '甲烷',
    id: 'CH4',
    value: '21215t',
    cmp: '-7.52'
  },
  {
    name: '一氧化二氮',
    id: 'N2O',
    value: '110163t',
    cmp: '+3.52'
  },
  {
    name: '氢氟烃',
    id: 'HFCS',
    value: '7293t',
    cmp: '-6.63'
  }
])

for (let i = 0; i < formData.length; i++) {
  if (i % 3 == 0) {
    formData[i].style = 'bg-green'
  } else if (i % 3 == 1) {
    formData[i].style = 'bg-orange'
  } else {
    formData[i].style = 'bg-normal'
  }
}

const data = reactive([])

getActivity().then((response) => {
  const data = reactive([response.data.data])
})

// 生成表格
const drawcharts1 = $(function () {
  var chart = echarts.init(document.getElementById('bar'), 'white', { renderer: 'canvas' })

  getChart({
    chartType: 1
  }).then((response) => {
    chart.setOption(response.data.data)
    console.log(response.data.data)
  })
})

const drawcharts3 = $(function () {
  var chart = echarts.init(document.getElementById('three'), 'white', { renderer: 'canvas' })

  getChart({
    chartType: 3
  }).then((response) => {
    chart.setOption(response.data.data)
    console.log(response.data.data)
  })
})
const drawcharts4 = $(function () {
  var chart = echarts.init(document.getElementById('four'), 'white', { renderer: 'canvas' })

  getChart({
    chartType: 4
  }).then((response) => {
    chart.setOption(response.data.data)
    console.log(response.data.data)
  })
})
const drawcharts5 = $(function () {
  var chart = echarts.init(document.getElementById('five'), 'white', { renderer: 'canvas' })

  getChart({
    chartType: 5
  }).then((response) => {
    chart.setOption(response.data.data)
    console.log(response.data.data)
  })
})

onMounted(() => {
  // 初始化表格, 写入请求表格的类型
  generateGraph({
    chartType: 1,
    height: 312,
    width: 1060
  })
  drawcharts1
  generateGraph({
    chartType: 3,
    height: 312,
    width: 550
  })
  drawcharts3
  generateGraph({
    chartType: 4,
    height: 312,
    width: 550
  })
  drawcharts4

  getActivity().then((response) => {
    data.value = reactive([response.data.data])
    console.log(data.value)

    generateGraph({
      chartType: 5,
      height: 312,
      width: 550,
      arg: {
        emissionMode: '直接排放',
        activity: data.value[0][1]
      }
    })
    drawcharts5
  })
})
</script>

<style lang="scss" scoped>
.bg-green {
  background-color: #bcd3c3;
}

.bg-orange {
  background-color: #fce0a8;
}

.bg-normal {
  background-color: #cadcbc;
}
</style>
