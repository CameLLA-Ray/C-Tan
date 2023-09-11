<template>
  <div>
    <div class="text-heigher-green font-medium mb-5">
      <p class="text-4xl">企业基本信息</p>
      <p class="text-2xl">Manage information</p>
    </div>

    <div class="w-96 h-10">
      <el-input v-model="SearchInput" placeholder="Search by" :prefix-icon="Search"></el-input>
    </div>

    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <div class="mt-10 ml-8">
            <information-table-form></information-table-form>
          </div>
        </el-table-column>
        <el-table-column label="企业名称" prop="company"></el-table-column>
        <el-table-column label="编辑状态" prop="status"></el-table-column>
        <el-table-column label="编辑日期" prop="date"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import InformationTableForm from '@/components/InformationTableForm.vue'
const tableData = reactive([
  {
    company: 'C-Tan-吸碳科技有限公司',
    status: '编辑中 Eding',
    date: '01.01.2022'
  },
  {
    company: 'C-Tan-吸碳科技有限公司',
    status: '编辑中 Eding',
    date: '01.01.2022'
  },
  {
    company: 'C-Tan-吸碳科技有限公司',
    status: '编辑中 Eding',
    date: '01.01.2022'
  }
])

const SearchInput = ref('')
</script>

<style lang="scss" scoped>
:deep(.el-input__wrapper) {
  border-radius: 8px;
}
</style>
