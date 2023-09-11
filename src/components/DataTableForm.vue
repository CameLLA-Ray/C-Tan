<template>
  <el-form :model="dataList">
    <!-- 第一行 -->
    <el-row>
      <el-col :span="8">
        <el-form-item label="范畴选择Scopes">
          <el-select v-model="scope" placeholder="请选择范畴">
            <el-option
              v-for="scope in scopes"
              :key="scope.value"
              :label="scope.label"
              :value="scope.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="排放方式">
          <el-select v-model="dischargeMode" placeholder="请选择排放方式">
            <el-option
              v-for="dischargeMode in dischargeModes"
              :key="dischargeMode.value"
              :label="dischargeMode.label"
              :value="dischargeMode.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="Requests Frequency">
          <el-select v-model="reqFrequency" placeholder="请选择数据输入频率">
            <el-option
              v-for="reqFrequency in reqFrequencies"
              :key="reqFrequency.value"
              :label="reqFrequency.label"
              :value="reqFrequency.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 第二行 -->
    <el-row>
      <el-col :span="8">
        <el-form-item label="组织选择">
          <p>C-Tan-吸碳有限公司（海淀）实验室</p>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="碳排放活动/设施">
          <el-input v-model="facility" placeholder="请输入一个设施/活动"></el-input>
          <button>+</button>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="活动数据">
          <p>0.16t</p>
        </el-form-item>
      </el-col>
    </el-row>

    <!-- 第三行 -->
    <el-row>
      <el-col :span="8">
        <el-form-item label="产生温室气体类别">
          <el-select v-model="gasclass" placeholder="">
            <el-option
              v-for="gasclass in gasclasses"
              :label="gasclass.label"
              :value="gasclass.value"
            ></el-option>
          </el-select>
          <button>+</button>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="活动数据不确定性">
          <p>5%</p>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="Date Created">
          <p>23.05.2021</p>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>

  <div class="flex flex-row gap-3 justify-end mr-5">
    <button class="btn btn-1">Cancel</button>
    <button class="btn btn-2">Save</button>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import axios from 'axios'

const props = defineProps({
  scopes: Array,
  dischargeModes: Array,
  reqFrequencies: Array,
  tableData: Array,
  gasclasses: Array
})

const scope = ref('')
const dischargeMode = ref('')
const reqFrequency = ref('')
const facility = ref('')
const gasclass = ref('')

//传输数据
const uploadData = function () {
  axios({
    method: 'post',
    url: 'http://182.61.52.110:8080/api/v1/entryInfo/add',
    data: {}
  }).then(() => {
    console.log('data is success post')
  })
}
</script>

<style lang="scss" scoped>
:deep(.el-input) {
  width: 213px;
}

:deep(.el-form-item) {
  flex-direction: column;
  justify-content: left;
}

:deep(.el-form-item__label) {
  text-align: left;
}

/*The style for button*/
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
