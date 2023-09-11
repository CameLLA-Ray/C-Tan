<template>
  <div class="ml-16">
    <!-- header-box -->
    <div class="text-heigher-green font-medium mb-7 mt-12">
      <p class="text-3xl">企业产品碳管理</p>
      <p class="text-xl">Carbon Emission Manage</p>
    </div>

    <div class="flex flex-row justify-between mb-5">
      <!-- search-box -->
      <div class="flex flex-row justify-between search-box">
        <div class="w-80 h-10">
          <el-input v-model="SearchInput" placeholder="Search by" :prefix-icon="Search"></el-input>
        </div>

        <div class="w-32 h-10">
          <el-select v-model="kind" placeholder="选择查询">
            <el-option v-for="item in selectBy" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
      </div>

      <!-- create-box -->
      <div class="flex flex-row justify-between gap-5 mr-8">
        <button
          class="btn-1 flex flex-row items-center justify-center self-center rounded-lg"
          @click="hiddenModelClass"
        >
          <p>自主创建</p>
          <span class="inline-block"
            ><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8333 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM15.8333 15.8333H4.16667V4.16667H15.8333V15.8333ZM9.16667 14.1667H10.8333V10.8333H14.1667V9.16667H10.8333V5.83333H9.16667V9.16667H5.83333V10.8333H9.16667V14.1667Z"
                fill="#1AD598"
              />
            </svg>
          </span>
        </button>
        <button
          class="btn-2 flex flex-row items-center justify-center self-center rounded-lg text-base"
        >
          <p>碳模型库引入</p>
          <span class="inline-block">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.2242 12.5816L17.9688 10.4551V5.46833C17.9687 5.32328 17.9282 5.18112 17.8519 5.05777C17.7756 4.93441 17.6665 4.83473 17.5367 4.7699L12.8492 2.42615C12.7408 2.37196 12.6212 2.34375 12.5 2.34375C12.3788 2.34375 12.2592 2.37196 12.1508 2.42615L7.46328 4.7699C7.33353 4.83473 7.22439 4.93441 7.14809 5.05777C7.07178 5.18112 7.03133 5.32328 7.03125 5.46833V10.4543L2.77578 12.5816C2.64591 12.6465 2.53669 12.7463 2.46038 12.8698C2.38407 12.9933 2.34368 13.1357 2.34375 13.2808V18.7496C2.34383 18.8946 2.38428 19.0368 2.46059 19.1602C2.53689 19.2835 2.64603 19.3832 2.77578 19.448L7.46328 21.7918C7.57174 21.8459 7.69129 21.8741 7.8125 21.8741C7.93371 21.8741 8.05326 21.8459 8.16172 21.7918L12.5 19.6238L16.8383 21.7933C16.9467 21.8475 17.0663 21.8756 17.1875 21.8756C17.3087 21.8756 17.4283 21.8475 17.5367 21.7933L22.2242 19.4496C22.3542 19.3846 22.4635 19.2847 22.5398 19.161C22.6161 19.0374 22.6565 18.8949 22.6562 18.7496V13.2808C22.6563 13.1357 22.6159 12.9933 22.5396 12.8698C22.4633 12.7463 22.3541 12.6465 22.2242 12.5816ZM16.4062 10.4551L13.2812 12.0176V8.29568L16.4062 6.73318V10.4551ZM12.5 3.9988L15.4406 5.46833L12.5 6.93865L9.55937 5.46833L12.5 3.9988ZM8.59375 6.73318L11.7188 8.29568V12.0176L8.59375 10.4551V6.73318ZM7.03125 19.8293L3.90625 18.2668V14.5449L7.03125 16.1074V19.8293ZM7.8125 14.7511L4.87188 13.2808L7.8125 11.8105L10.7531 13.2808L7.8125 14.7511ZM8.59375 16.1074L11.7188 14.5449V18.2668L8.59375 19.8293V16.1074ZM16.4062 19.8293L13.2812 18.2668V14.5449L16.4062 16.1074V19.8293ZM17.1875 14.7511L14.2469 13.2808L17.1875 11.8105L20.1281 13.2808L17.1875 14.7511ZM21.0938 18.2668L17.9688 19.8293V16.1074L21.0938 14.5449V18.2668Z"
                fill="#1AD598"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
    <!-- img-box -->
    <div class="mb-12">
      <img src="/assets/img/Frame427319015.png" />
    </div>

    <!-- emission-box -->
    <div v-if="hiddenModel" class="emission-box flex justify-center items-center">
      <div class="container pl-5 pt-5 pr-5">
        <p class="table-title text-xl font-semibold">新建产品碳信息</p>
        <new-model-table></new-model-table>
        <div class="flex flex-row gap-3 justify-end mr-5">
          <button class="btn btn-3" @click="hiddenModelClass">Cancel</button>
          <button class="btn btn-4">Save</button>
        </div>
      </div>
    </div>

    <!-- data-box -->
    <div>
      <el-table :data="tableData" size="large">
        <el-table-column label="包装种类">
          <template #default="scope">
            <span :style="scope.row.type.style">{{ scope.row.type.value }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="产品名及编号"
          prop="nameId"
          sortable
          width="424px"
        ></el-table-column>
        <el-table-column label="创建时间" prop="date" sortable></el-table-column>
        <el-table-column label="生成方式" sortable>
          <template #default="scope">
            <span :style="scope.row.useWay.style">{{ scope.row.useWay.value }}</span>
          </template>
        </el-table-column>
        <el-table-column label="" align="right">
          <template #default>
            <button @click="hiddenDetailClass">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7885 10.1442C17.7885 11.0523 17.0523 11.7885 16.1442 11.7885C15.2361 11.7885 14.5 11.0523 14.5 10.1442C14.5 9.23615 15.2361 8.5 16.1442 8.5C17.0523 8.5 17.7885 9.23615 17.7885 10.1442Z"
                  stroke="black"
                  stroke-linecap="round"
                />
                <path
                  d="M17.7885 22.1882C17.7885 23.0963 17.0524 23.8325 16.1443 23.8325C15.2362 23.8325 14.5001 23.0963 14.5001 22.1882C14.5001 21.2801 15.2362 20.544 16.1443 20.544C17.0524 20.544 17.7885 21.2801 17.7885 22.1882Z"
                  stroke="black"
                  stroke-linecap="round"
                />
                <path
                  d="M17.7885 16.1882C17.7885 17.0963 17.0523 17.8324 16.1442 17.8324C15.2361 17.8324 14.5 17.0963 14.5 16.1882C14.5 15.2801 15.2361 14.544 16.1442 14.544C17.0523 14.544 17.7885 15.2801 17.7885 16.1882Z"
                  stroke="black"
                  stroke-linecap="round"
                />
                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#999CA0" />
              </svg>
            </button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- detail-box -->
    <div v-if="hiddenDetail" class="emission-box flex justify-center items-center">
      <div class="container pl-5 pt-5 pr-5">
        <p class="table-title text-xl font-semibold">产品详情</p>
        <detail-information-table></detail-information-table>
        <div class="flex flex-row gap-3 justify-end mr-5">
          <button class="btn btn-3" @click="hiddenDetailClass">Cancel</button>
          <button class="btn btn-4">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref, onMounted, getCurrentInstance, reactive, watch } from 'vue'
import NewModelTable from '@/components/NewModelTable.vue'
import DetailInformationTable from '@/components/DetailInformationTable.vue'
import useModalStore from '@/stores/modal.js'

const modal = useModalStore()
const proxy = ref('')

const kind = ref('')
const SearchInput = ref('')
const selectBy = [
  {
    label: '包装种类',
    value: '包装种类'
  },
  {
    label: '包装名称',
    value: '包装名称'
  }
]

///////控制新建模型表单展开
const hiddenModel = ref(false)
const hiddenModelClass = function () {
  hiddenModel.value = !hiddenModel.value
}

////////表格
const tableData = reactive([
  {
    type: {
      value: '酒水包装',
      style:
        'background-color:#BDD9FE;color:#217EFD;width:92px;padding:5px 0 5px 0;text-align:center;border-radius:10px;display: inline-block'
    },
    nameId: '葡萄酒-D122pt',
    date: '2023.12.30',
    useWay: {
      value: 'C-Tan模型库',
      style:
        'background-color:#bbf3e0;color:#1ad598;width:104px;height:31px;padding:5px;text-align:center;border-radius:8px;display: inline-block'
    }
  },
  {
    type: {
      value: '书籍包装',
      style:
        'background-color:#fff3db;color:orange;width:92px;padding:5px 0 5px 0;text-align:center;border-radius:10px;display: inline-block'
    },
    nameId: '杂志-B567zz',
    date: '2023.12.29',
    useWay: {
      value: '自主创建',
      style:
        'background-color:#fff3db;color:orange;width:72px;height:31px;padding:5px;text-align:center;border-radius:8px;display: inline-block'
    }
  },
  {
    type: {
      value: '美妆包装',
      style:
        'background-color:#F4CEFA;color:#DB5AEE;width:92px;padding:5px 0 5px 0;text-align:center;border-radius:10px;display: inline-block'
    },
    nameId: '素颜霜-S42sys',
    date: '2023.12.30',
    useWay: {
      value: 'C-Tan模型库',
      style:
        'background-color:#bbf3e0;color:#1ad598;width:104px;height:31px;padding:5px;text-align:center;border-radius:8px;display: inline-block'
    }
  }
])

///////控制表格一行详情信息的展开
const hiddenDetail = ref(false)
const hiddenDetailClass = function () {
  hiddenDetail.value = !hiddenDetail.value
}

onMounted(() => {
  proxy.value = getCurrentInstance()
})
</script>

<style lang="scss" scoped>
.search-box {
  width: 500px;
}

.container {
  width: 1071px;
  height: 702px;
  background-color: #fafafa;
  border-radius: 8px;
}

.table-title {
  color: #4b574d;
}

.btn-1 {
  width: 121px;
  height: 40px;
  background-color: white;
}
.btn-2 {
  width: 148px;
  height: 40px;
  background-color: white;
}

.btn {
  width: 75px;
  height: 32px;
  border-radius: 8px;
}
.btn-3 {
  border: 1px solid #999ca0;
}

.btn-4 {
  color: white;
  background-color: #6c7c6f;
}

.emission-box {
  margin-top: -75px;
  z-index: 10;
  position: absolute;
  left: 50%;
  top: 8%;
  transform: translate(-50%);
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgba(229, 230, 224, 0.747);
}
</style>
