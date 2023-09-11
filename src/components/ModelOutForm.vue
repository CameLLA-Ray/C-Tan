<template>
  <div>
    <el-select v-model="value" placeholder="">
      <el-option v-for="item in product" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const product = [
  {
    label: 'qqqq',
    value: 'qqqq'
  },
  {
    label: 'qqqq',
    value: 'qqqq'
  }
]

const value = ref('')
</script>

<style lang="scss" scoped></style>
