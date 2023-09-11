<template>
  <div class="ml-16">
    <!-- header-box -->
    <div class="text-heigher-green font-medium mb-5">
      <p class="text-3xl">C-Tan产品碳模型库</p>
      <p class="text-xl">C-Tan Product Carbon Management</p>
    </div>

    <!-- search-box -->
    <div class="flex flex-row justify-between search-box mb-5">
      <div class="w-80 h-10">
        <el-input v-model="SearchInput" placeholder="Search by" :prefix-icon="Search"></el-input>
      </div>

      <div class="w-32 h-10">
        <el-select v-model="kind" placeholder="选择查询">
          <el-option v-for="item in selectBy" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
    </div>

    <!-- img-box -->
    <div class="mb-10 p-4 bg-white rounded-xl">
      <img src="/assets/img/Frame427319015.png" />
    </div>

    <!-- route-box -->
    <div class="flex">
      <product-route></product-route>
    </div>
  </div>
  <div>
    <div class="fixed z-10 inset-0 overflow-y-auto" id="modal" :class="changeHiddenClass">
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <!-- Add margin if you want to see some of the overlay behind the modal-->
          <div class="py-4 text-left px-6">
            <!--Title-->
            <div class="flex justify-between items-center pb-4">
              <p class="text-2xl font-bold">添加信息</p>
              <!-- Modal Close Button -->
              <div class="modal-close cursor-pointer z-50" @click.prevent="modal.isOpen = false">
                <i class="fas fa-times"></i>
              </div>
            </div>

            <!-- Tabs -->
            <ul class="flex flex-wrap mb-4">
              <li class="flex-auto text-center">
                <a
                  class="block rounded py-3 px-4 transition"
                  href="#"
                  @click.prevent="tab = 'in'"
                  :class="{
                    'hover:text-white text-white bg-darker-green': tab === 'in',
                    'hover:text-darker-green': tab === 'out'
                  }"
                  >新增输入</a
                >
              </li>
              <li class="flex-auto text-center">
                <a
                  class="block rounded py-3 px-4 transition"
                  href="#"
                  @click.prevent="tab = 'out'"
                  :class="{
                    'hover:text-white text-white bg-darker-green': tab === 'out',
                    'hover:text-darker-green': tab === 'in'
                  }"
                  >新增输出</a
                >
              </li>
            </ul>
            <!-- Form -->
            <model-in-form v-if="tab === 'in'"></model-in-form>
            <model-out-form v-else></model-out-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import ModelInForm from '../../components/ModelInForm.vue'
import ModelOutForm from '../../components/ModelOutForm.vue'
import ProductRoute from '../../components/ProductRoute.vue'
import useModalStore from '@/stores/modal'
import { computed, ref, reactive } from 'vue'

const kind = ref('')
const SearchInput = ref('')
const selectBy = [
  {
    label: '包装种类',
    value: '包装种类'
  },
  {
    label: '111',
    value: '111'
  }
]
// pinia
const modal = useModalStore()
const changeHiddenClass = computed(() => {
  return modal.hiddenClass
})
//change form
const tab = ref('in')
</script>

<style lang="scss" scoped>
.search-box {
  width: 500px;
}
</style>
