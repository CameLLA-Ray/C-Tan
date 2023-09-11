<template>
  <div>
    <div class="text-heigher-green font-medium mb-5">
      <p class="text-4xl">企业碳排放数据</p>
      <p class="text-2xl">Carbon data</p>
    </div>

    <div class="w-96 h-10">
      <el-input v-model="input" placeholder="Search by" :prefix-icon="Search"></el-input>
    </div>

    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <div class="mt-10 ml-8">
            <data-table-form
              :scopes="scopes"
              :dischargeModes="dischargeModes"
              :reqFrequencies="reqFrequencies"
              :tableData="tableData"
              :gasclasses="gasclasses"
            ></data-table-form>
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
import DataTableForm from '@/components/DataTableForm.vue'

const input = ref('')

const dataList = reactive([{}])
const tableData = reactive([
  {
    company: 'C-Tan-吸碳有限公司（海淀）实验室',
    status: '编辑中 Eding',
    date: '01.01.2022'
  },
  {
    company: 'C-Tan-吸碳有限公司（朝阳）实验室',
    status: '编辑中 Eding',
    date: '01.01.2022'
  },
  {
    company: 'C-T an-吸碳有限公司（海淀）集装总部',
    status: '编辑中 Eding',
    date: '01.01.2022'
  }
])
const scopes = [
  {
    label: '范畴1',
    value: '范畴1'
  },
  {
    label: '范畴2',
    value: '范畴2'
  },
  {
    label: '范畴3',
    value: '范畴3'
  }
]
const dischargeModes = [
  {
    label: '直接排放',
    value: '直接排放'
  },

  {
    label: '间接排放',
    value: '间接排放'
  }
]
const reqFrequencies = [
  {
    label: 'Monthly',
    value: 'Monthly'
  },
  {
    label: 'Yearly',
    value: 'Yearly'
  }
]
const gasclasses = [
  {
    label: 'CO2',
    value: 'CO2'
  },
  {
    label: 'CH4',
    value: 'CH4'
  },
  {
    label: 'N2O',
    value: 'N2O'
  },
  {
    label: 'HFCs',
    value: 'HFCs'
  },
  {
    label: 'PFCs',
    value: 'PFCs'
  },
  {
    label: 'SF6',
    value: 'SF6'
  }
]
</script>

<style lang="scss" scoped></style>
