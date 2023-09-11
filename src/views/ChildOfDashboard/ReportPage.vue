<template>
  <div>
    <div class="text-heigher-green font-medium mb-5">
      <p class="text-4xl">企业碳排放报告</p>
      <p class="text-2xl">Carbon Report</p>
    </div>

    <div class="mb-6">
      <img src="/assets/img/Frame(3).png" />
    </div>

    <div class="mb-6">
      <img src="/assets/img/Group(1).png" />
    </div>

    <div class="py-8 bg-white rounded-lg mb-6">
      <div id="bar" style="width: 1350px; height: 312px"></div>
    </div>

    <div>
      <img src="/assets/img/Frame(2).png" />
    </div>

    <div class="flex flex-row justify-between mt-9">
      <div id="three" style="width: 500px; height: 312px"></div>
      <div id="four" style="width: 500px; height: 312px"></div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, ref, onMounted } from 'vue'
import { uploadExcel } from '../../network/uploadExcel'
import axios from 'axios'
import { generateGraph } from '../../network/generateGraph'
import { getChart } from '../../network/getChart'
const proxy = ref('')
const file = ref(null)

// const upload = function ($event) {
//   proxy.is_dargover = false
//   const files = $event.dataTransfer ? [...$event.dataTransfer.files] : [...$event.target.files]
//   console.log(files)

//   uploadExcel(files).then((response) => {
//     console.log(response.data)
//   })
// }
// const onFileChange = function (event) {
//   file.value = event.target.files[0]
//   const formData = new FormData()
//   formData.append('file', file.value)
//   console.log(formData)

//   axios
//     .post('http://81.71.154.68:8080/api/v1/entryInfo/get/schema/excel', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data; boundary=<10>'
//       }
//     })
//     .then((response) => {
//       console.log(response.data.message)
//       console.log(response.data)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }

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

onMounted(() => {
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

  proxy.value = getCurrentInstance()
})
</script>

<style lang="scss" scoped></style>
