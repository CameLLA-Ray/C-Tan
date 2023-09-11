<template>
  <el-form :label-position="labposition" :model="formList">
    <el-row>
      <el-col :span="11">
        <el-form-item label="组织名称:">
          <el-input v-model="formList.name" placeholder=""></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="11">
        <el-form-item label="组织边界确定方式:">
          <el-select v-model="method" placeholder=" ">
            <el-option
              v-for="method in methods"
              :key="method.value"
              :label="method.label"
              :value="method.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="11">
        <el-form-item label="公司地址:">
          <el-input v-model="formList.address" placeholder=""></el-input> </el-form-item
      ></el-col>
      <el-col :span="11">
        <el-form-item label="碳核算基准年选择:">
          <el-input v-model="formList.base_year" placeholder=""></el-input> </el-form-item
      ></el-col>
    </el-row>
    <el-form-item label="组织边界详述:" class="detail-input">
      <el-input v-model="formList.detail" placeholder="" type="textarea" :rows="4"></el-input>
    </el-form-item>
  </el-form>

  <div class="flex flex-row gap-3 justify-end mr-5">
    <button class="btn btn-1">Cancel</button>
    <button class="btn btn-2" @click.prevent="updateInformation">Save</button>
  </div>
</template>

<script setup>
import { ref, reactive, defineProps } from 'vue'
import { information } from '../network/information'
import { add } from 'lodash'

const formList = reactive([
  {
    name: '',
    address: '',
    base_year: '',
    detail: ''
  }
])

const methods = [
  {
    label: '股权控制法',
    value: '股权控制法'
  },
  {
    label: '运营控制权法',
    value: '运营控制权法'
  }
]

const method = ref('')

const updateInformation = function () {
  const data = {
    address: formList.address,
    companyName: formList.name,
    organizationBoundary: method.value,
    organizationBoundaryDetails: formList.detail,
    standardYear: formList.base_year
  }
  //axios请求,向数据库发送数据
  information(data)
    .then((response) => {
      alert('传输成功')
    })
    .catch((error) => {
      console.log(error)
    })
}

const getUserInformation = function () {}

const labposition = ref('left')
</script>

<style lang="scss" scoped>
:deep(.el-input) {
  width: 368px;
}
:deep(.detail-input) {
  display: block;
  clear: both;
}

:deep(.el-textarea__inner) {
  resize: none;
  width: 1300px;
  height: 150px;
}

.btn {
  width: 75px;
  height: 32px;
  border-radius: 8px;
}

.btn-1 {
  border: 1px solid #999ca0;
}

.btn-2 {
  color: white;
  background-color: #6c7c6f;
}
</style>
