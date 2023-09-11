<template>
  <div>
    <el-form :model="emissionList">
      <el-form-item label="产品类型">
        <el-input
          v-model="emissionList.productType"
          :placeholder="emissionList.productType"
        ></el-input>
      </el-form-item>
      <el-row :gutter="1">
        <el-col :span="8">
          <el-form-item label="产品名称">
            <el-input v-model="emissionList.product" :placeholder="emissionList.product"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8" :offset="8">
          <el-form-item label="产品型号">
            <el-input v-model="emissionList.version" :placeholder="emissionList.version"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="1">
        <el-col :span="8">
          <el-form-item label="产品描述">
            <el-input
              v-model="emissionList.description"
              :placeholder="emissionList.description"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8" :offset="8">
          <el-form-item label="是否公开">
            <el-select v-model="emissionList.isPublic" :placeholder="emissionList.isPublic">
              <el-option
                v-for="item in isPublic"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="产品图片">
        <p class="text-gray-300">支持png/jpg格式的图片,保证图片大小在10MB以内</p>
        <div
          class="w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-green-200 hover:border-green-200 hover:border-solid mb-5"
          :class="{ 'bg-green-400 border-green-400 border-solid': is_dargover }"
          @drag.prevent.stop=""
          @dragstart.prevent.stop=""
          @dragend.prevent.stop="is_dargover = false"
          @dragover.prevent.stop="is_dargover = true"
          @dragenter.prevent.stop="is_dargover = true"
          @dragleave.prevent.stop="is_dargover = false"
          @drop.prevent.stop="upload($event)"
        >
          <h5>上传图片 Upload</h5>
        </div>
        <input
          type="file"
          multiple
          accept="image/png, image/jpg"
          style="display: none"
          @change="upload($event)"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, reactive, ref } from 'vue'
const isPublic = [
  {
    label: '是',
    value: 1
  },
  {
    label: '否',
    value: 0
  }
]

const emissionList = reactive({
  productType: '酒水包装',
  product: '葡萄酒',
  description: '111111',
  isPublic: 1,
  userId: 0,
  version: 'D122pt'
})

//Section of upload
const proxy = ref('')
const is_dargover = false
//上传图片事件
const upload = function ($event) {
  proxy.is_dargover = false
  const files = $event.dataTransfer ? [...$event.dataTransfer.files] : [...$event.target.files]

  console.log(files)
}

onMounted(() => {
  proxy.value = getCurrentInstance()
})
</script>

<style lang="scss" scoped>
:deep(.el-form-item__label) {
  font-weight: 600;
  font-size: 14px;
}

:deep(.el-form-item) {
  display: block;
  clear: both !important;
}
</style>
