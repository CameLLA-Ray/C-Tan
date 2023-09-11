<template>
  <div class="flex flex-col gap-5">
    <div>
      <label>包装类型</label>
      <el-input v-model="type" placeholder="请输入"></el-input>
    </div>

    <div>
      <label>单位</label>

      <el-input v-model="unit" placeholder="请输入"></el-input>
    </div>

    <div>
      <label>数据统计时间</label>
      <el-input
        v-model="date"
        placeholder="请输入开始时间到结束时间:2022/02/03 - 2023/02/03"
      ></el-input>
    </div>

    <div class="flex flex-row justify-end mr-5 mt-7">
      <button class="btn btn-4">Save</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const type = ref('')
const unit = ref('')
const date = ref('')
</script>

<style lang="scss" scoped>
.btn {
  width: 75px;
  height: 32px;
  border-radius: 8px;
}
.btn-3 {
  border: 1px solid #999ca0;
}

.btn-4 {
  color: white;
  background-color: #6c7c6f;
}
</style>
