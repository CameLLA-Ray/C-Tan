<template>
  <div class="ml-16">
    <!-- header-box -->
    <div class="text-heigher-green font-medium mb-5 mt-12">
      <p class="text-3xl">企业外贸碳合规资讯</p>
      <p class="text-xl">Carbon compliance Information</p>
    </div>
    <div>
      <el-input
        v-model="input"
        placeholder="Search by"
        :prefix-icon="Search"
        class="shadow-md"
      ></el-input>
    </div>

    <!-- main-box -->
    <div v-if="!change">
      <div class="main-box mt-8 shadow-md">
        <div class="flex flex-row justify-between">
          <div>
            <p class="text-xl">包装产品种类选择</p>
            <p class="text-base">Selection of packaging product types</p>
          </div>
          <div>
            <el-input v-model="input" placeholder="Search by" :prefix-icon="Search"></el-input>
          </div>
        </div>

        <div>
          <img src="/assets/img/image79.png" />
        </div>
      </div>
      <div class="px-6 py-6 bg-white mt-5 rounded-lg" style="width: 1068px">
        <button @click="change = true">
          <img src="/assets/img/Group40024.png" />
        </button>
      </div>
    </div>
    <div v-else class="mt-8">
      <img src="/assets/img/5.png" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input = ref('')
const change = ref(false)
</script>

<style lang="scss" scoped>
:deep(.el-input__wrapper) {
  border-radius: 10px;
}

:deep(.el-input) {
  border-radius: 10px;
  width: 344px;
  overflow: hidden;
}

.main-box {
  width: 1068px !important;
  height: 335px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
}
</style>
