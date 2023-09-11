<template>
  <!-- 侧边栏 -->
  <el-aside>
    <h5 class="ml-5 mt-4 mb-11 text-darker-green font-medium">User Panel</h5>
    <!-- 菜单部分 -->
    <el-menu
      :default-active="defaultActive"
      class="bg-smooth-green"
      :unique-opened="true"
      @select="handleMenuSelect"
    >
      <el-menu-item index="1"
        ><el-icon><Menu /></el-icon
        ><router-link :to="{ name: 'dashboard:index' }">碳排放情况一览</router-link></el-menu-item
      >
      <el-sub-menu index="2">
        <template #title>
          <div class="mr-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20L12 3.71191"
                stroke="#808080"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 20V5M19 17V10.5M19 6V2"
                stroke="#808080"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M2 10H8V17H2V10ZM9 6H15V13H9V6Z" fill="#84828A" />
              <path d="M16 5H22V11.5H16V5Z" fill="#84828A" />
            </svg>
          </div>
          <span>企业碳核算</span>
        </template>
        <el-menu-item index="2-1">
          <router-link
            :to="{
              name: 'dashboard:information'
            }"
            >企业基本信息录入</router-link
          >
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link
            :to="{
              name: 'dashboard:data'
            }"
          >
            碳排放数据录入
          </router-link>
        </el-menu-item>
        <el-menu-item index="2-3">
          <router-link :to="{ name: 'dashboard:report' }"> 碳排放排查报告 </router-link>
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="3">
        <template #title>
          <div class="mr-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20L12 3.71191"
                stroke="#808080"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 20V5M19 17V10.5M19 6V2"
                stroke="#808080"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M2 10H8V17H2V10ZM9 6H15V13H9V6Z" fill="#84828A" />
              <path d="M16 5H22V11.5H16V5Z" fill="#84828A" />
            </svg>
          </div>
          <span>产品碳管理</span>
        </template>
        <el-menu-item index="3-1">
          <router-link
            :to="{
              name: 'dashboard:manage'
            }"
            >企业产品碳管理</router-link
          >
        </el-menu-item>
        <el-menu-item index="3-2">
          <router-link
            :to="{
              name: 'dashboard:model'
            }"
            >C-Tan产品碳模型库</router-link
          >
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <div class="mr-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20L12 3.71191"
                stroke="#808080"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 20V5M19 17V10.5M19 6V2"
                stroke="#808080"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M2 10H8V17H2V10ZM9 6H15V13H9V6Z" fill="#84828A" />
              <path d="M16 5H22V11.5H16V5Z" fill="#84828A" />
            </svg>
          </div>
          <span>企业碳资讯</span>
        </template>
        <el-menu-item index="4-1">
          <router-link
            :to="{
              name: 'dashboard:subscribe'
            }"
            >企业碳咨询订阅</router-link
          >
        </el-menu-item>
        <el-menu-item index="4-2">
          <router-link
            :to="{
              name: 'dashboard:message'
            }"
            >企业外贸碳合规资讯</router-link
          >
        </el-menu-item>
      </el-sub-menu>
    </el-menu>

    <!-- 提示标语和icon -->
    <div class="text-center">
      <div class="flex justify-items-center justify-around">
        <img src="/assets/img/IconContainer.png" alt="a light" />
      </div>
      <p class="text-smooth-gray text-xs font-medium -mt-3">碳排放警告信息</p>
      <p class="text-sm mt-3">
        If you aren’t willing to<br />
        own a stock for 10 years,<br />
        don’t even think about<br />
        owning it for 10 minutes.
      </p>
    </div>
    <div class="flex flex-row gap-2 mt-20 ml-6">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5282 17.4567V19.2006C14.5282 19.7529 14.0805 20.2006 13.5282 20.2006H4.45508C3.90279 20.2006 3.45508 19.7529 3.45508 19.2006V4.59082C3.45508 4.03854 3.90279 3.59082 4.45508 3.59082H13.5282C14.0805 3.59082 14.5282 4.03854 14.5282 4.59082V6.3347"
          stroke="#84828A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.05762 11.8955H20.9998"
          stroke="#84828A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.7744 8.37793L21.0001 11.8959L16.7744 15.4139"
          stroke="#84828A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <button>Log out</button>
    </div>
  </el-aside>
</template>

<script setup>
import { onMounted, ref } from 'vue'

//////菜单展开的设置部分////////
const isCollapse = ref(false) //菜单是否折叠
const defaultActive = ref('')
const handleMenuSelect = (index) => {
  defaultActive.value = index
  localStorage.setItem('defaultActive', index)
}

onMounted(() => {
  defaultActive.value = localStorage.getItem('defaultActive')
})
</script>

<style lang="scss" scoped>
:deep(.is-active) {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
}
:deep(.is-opened .is-active) {
  font-weight: bold;
}
</style>
