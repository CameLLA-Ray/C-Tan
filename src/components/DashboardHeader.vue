<template>
  <!-- 顶栏设计 -->
  <div>
    <el-container>
      <el-aside>
        <div class="flex justify-around">
          <div class="pt-5">
            <img src="/assets/img/logo21.png" />
          </div>
        </div>
      </el-aside>
      <el-main class="bg-normal-green">
        <el-container style="text-align: right" class="main-container">
          <el-aside>
            <div class="text-center text-xl">Hello Raven,</div>
          </el-aside>
          <el-main class="header-main">
            <el-row justify="end" align="middle" :gutter="10">
              <el-col :span="10">
                <el-input
                  v-model="input"
                  placeholder="Search for stocks and more"
                  :prefix-icon="Search"
                  class="shadow-md"
                ></el-input>
              </el-col>
              <el-col :span="6">
                <div class="flex flex-grow gap-10 justify-center justify-items-center items-center">
                  <div
                    class="w-10 h-10 flex items-center bg-slate-100 justify-center rounded-lg overflow-hidden shadow-md"
                  >
                    <el-icon :size="24"><Bell /></el-icon>
                  </div>
                  <el-avatar :size="48" src="/assets/img/3D05.png" />
                </div>
              </el-col>
            </el-row>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Bell } from '@element-plus/icons-vue'

const input = ref('')
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
:deep(.el-main) {
  padding-top: 10px;
}
:deep(.el-aside) {
  text-align: center;
}
.main-container {
  align-items: center;
}
</style>
