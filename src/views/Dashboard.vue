<template>
  <div>
    <el-container>
      <el-header style="height: 108px" class="bg-smooth-green">
        <dashboard-header></dashboard-header>
      </el-header>
      <el-container style="min-height: 92vh">
        <dashboard-aside class="bg-smooth-green opacity-75"></dashboard-aside>
        <!-- 主要界面 -->
        <el-main class="bg-lower-green">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import DashboardHeader from '@/components/DashboardHeader.vue'
import DashboardAside from '../components/DashboardAside.vue'
</script>

<style lang="scss" scoped>
:deep(.el-header) {
  padding: 0;
}
</style>
