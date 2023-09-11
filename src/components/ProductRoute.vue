<template>
  <div class="flex flex-row bg-white p-9 rounded-xl w-screen">
    <div class="self-start">
      <div class="flex flex-row gap-5 mb-10">
        <img src="/assets/img/酒水包装图片.png" />
        <p class="text-xl flex justify-center items-center font-semibold">酒水包装</p>
      </div>
      <div class="list-box">
        <el-scrollbar max-height="770px" :always="true">
          <button v-for="item in list" :key="item">
            <div class="scrollbar-item">
              <p class="text-sm font-normal">
                {{ item.name }}
                <span :class="item.kind == 'C-Tan精品' ? 'green-play' : 'orange-play'">{{
                  item.kind
                }}</span>
              </p>
            </div>
          </button>
        </el-scrollbar>
      </div>
    </div>

    <aside class="font-bold text-xl ml-44 mr-7 mt-14 flex flex-col justify-around">
      <p>硬<br />包<br />装</p>
      <p>软<br />包<br />装</p>
      <p>塑<br />封<br />包<br />装</p>
    </aside>

    <div class="divide-line1 ml-6 mt-10"></div>
    <div>
      <div class="flex flex-row justify-between">
        <p class="font-bold text-2xl mb-2">葡萄酒 - W122pt</p>
        <button class="btn" @click="success">使用该模型</button>
      </div>
      <div class="divide-line2"></div>
      <mode-graph></mode-graph>
      <mode-graph-1></mode-graph-1>
      <mode-graph-2></mode-graph-2>
    </div>
    <div class="divide-line1 mt-10"></div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import useModalStore from '@/stores/modal.js'
import ModeGraph from '@/components/ModeGraph.vue'
import ModeGraph1 from './ModeGraph1.vue'
import ModeGraph2 from './ModeGraph2.vue'

const list = reactive([
  {
    name: '白酒 - BJ56wj',
    kind: 'C-Tan精品'
  },
  {
    name: '葡萄酒 - W122pt',
    kind: 'C-Tan精品'
  },
  {
    name: '盒装酸奶 - Q72pj',
    kind: 'C-Tan示例'
  },
  {
    name: '盒装酸奶 - Q72pj',
    kind: 'C-Tan示例'
  },
  {
    name: '盒装酸奶 - Q72pj',
    kind: 'C-Tan示例'
  },
  {
    name: '盒装酸奶 - Q72pj',
    kind: 'C-Tan示例'
  },
  {
    name: '盒装酸奶 - Q72pj',
    kind: 'C-Tan示例'
  },
  {
    name: '盒装酸奶 - Q72pj',
    kind: 'C-Tan示例'
  },
  {
    name: '盒装酸奶 - Q72pj',
    kind: 'C-Tan示例'
  },
  {
    name: '盒装酸奶 - Q72pj',
    kind: 'C-Tan示例'
  },
  {
    name: '盒装酸奶 - Q72pj',
    kind: 'C-Tan示例'
  },
  {
    name: '盒装酸奶 - Q72pj',
    kind: 'C-Tan示例'
  },
  {
    name: '盒装酸奶 - Q72pj',
    kind: 'C-Tan示例'
  },
  {
    name: '盒装酸奶 - Q72pj',
    kind: 'C-Tan示例'
  },
  {
    name: '盒装酸奶 - Q72pj',
    kind: 'C-Tan示例'
  },
  {
    name: '盒装酸奶 - Q72pj',
    kind: 'C-Tan示例'
  },
  {
    name: '盒装酸奶 - Q72pj',
    kind: 'C-Tan示例'
  },
  {
    name: '盒装酸奶 - Q72pj',
    kind: 'C-Tan示例'
  },
  {
    name: '啤酒 - Q122pj',
    kind: 'C-Tan示例'
  }
])

const modal = useModalStore()
const success = () => {
  alert('使用成功')
}

computed(() => {
  return modal.addMessage
})
</script>

<style lang="scss" scoped>
.list-box {
  width: 300px;
}

.scrollbar-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 300px;
  border-radius: 4px;
  padding: 10px;

  text-align: center;
  border-radius: 4px;
  background-color: white;
}

.orange-play {
  margin-left: 20px;
  display: inline-block;
  width: 80px;
  border-radius: 4px;
  background-color: #f7c17fe5;
  color: #ad863f;
}

.green-play {
  margin-left: 20px;
  display: inline-block;
  width: 80px;
  border-radius: 4px;
  background-color: #96d9c9e7;
  color: #4e9b87;
}

.divide-line1 {
  width: 1px;
  height: 770px;
  background-color: #d8e3e0;
}

.divide-line2 {
  width: 713px;
  height: 5px;
  background-color: #d8e3e0;
  margin-bottom: 20px;
}

aside {
  color: #868686;
}

.btn {
  width: 100px;
  height: 32px;
  border-radius: 8px;
  color: white;
  background-color: #6c7c6f;
}
</style>
