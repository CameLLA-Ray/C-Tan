<template>
  <div>
    <div class="graph-box">
      <RelationGraph ref="seeksRelationGraph" :options="graphOptions" />
      <button class="btn inline-block" @click="toggleDataModal">编辑信息</button>
    </div>
  </div>
</template>

<script setup>
import RelationGraph from 'relation-graph/vue3'
import { onMounted, getCurrentInstance, defineProps } from 'vue'
import useModalStore from '@/stores/modal'

//获得当前实例，替代this
const { proxy } = getCurrentInstance()

//////////////////
//图表初始化定义
const graphOptions = {
  debug: true,
  allowShowMiniToolBar: false,
  layouts: [
    {
      layoutName: 'tree',
      layoutLabel: '中心',
      from: 'left',
      layoutClassName: 'seeks-layout-center',
      max_per_width: '200',
      min_per_height: '40'
    }
  ],
  defaultLineShape: 3,
  defaultJunctionPoint: 'lr',
  defaultNodeBorderWidth: 0,
  defaultLineColor: '#a1a1aa',
  disableDragNode: true,
  disableZoom: true,
  defaultLineWidth: 4,
  moveToCenterWhenRefresh: true
}

//定义节点和连线关系
const showSeeksGraph = function (id) {
  const __graph_json_data2 = {
    rootId: 'a',
    nodes: [
      //根节点
      { id: 'a', offset_y: -5, html: '<span class="font-bold text-2xl">软包装过程</span>' },

      // 根节点左侧的数据:
      {
        id: 'r-b',
        html: '<span class="font-bold text-xs inline-block w-32"> 泡沫套 1466t</span>',
        width: 100
      },
      {
        id: 'r-c',
        html: '<span class="font-bold text-xs inline-block w-32"> 充气气囊 564t</span>',
        width: 100
      },

      //根节点右侧的数据:
      { id: 'b', html: '<span class="font-bold text-xs">废气 546t</span>' },
      { id: 'c', html: '<span class="font-bold text-xs">污水 1255t</span>' }
    ],
    lines: [
      {
        from: 'r-b',
        to: 'a',
        isHideArrow: true
      },
      {
        from: 'r-c',
        to: 'a',
        isHideArrow: true
      },
      { from: 'a', to: 'b', isHideArrow: true },
      { from: 'a', to: 'c', isHideArrow: true }
    ]
  }

  const __graph_json_data3 = {
    rootId: 'a',
    nodes: [
      //根节点
      { id: 'a', offset_y: -5, html: '<span class="font-bold text-2xl">塑封包装过程</span>' },

      // 根节点左侧的数据:
      {
        id: 'r-b',
        html: '<span class="font-bold text-xs inline-block w-32"> 软木塞 4657t</span>',
        width: 100
      },
      {
        id: 'r-c',
        html: '<span class="font-bold text-xs inline-block w-32"> 纸标签 1522t</span>',
        width: 100
      },

      //根节点右侧的数据:
      { id: 'b', html: '<span class="font-bold text-xs">废气 45t</span>' },
      { id: 'c', html: '<span class="font-bold text-xs">污水 5211t</span>' },
      { id: 'd', html: '<span class="font-bold text-xs">灰烬 122t</span>' }
    ],
    lines: [
      {
        from: 'r-b',
        to: 'a',
        isHideArrow: true
      },
      {
        from: 'r-c',
        to: 'a',
        isHideArrow: true
      },
      { from: 'a', to: 'b', isHideArrow: true },
      { from: 'a', to: 'c', isHideArrow: true },
      { from: 'a', to: 'd', isHideArrow: true }
    ]
  }

  proxy.$refs.seeksRelationGraph.setJsonData(__graph_json_data2)
}
//////////////////

// 关于新增数据的部分
const modal = useModalStore()

//点击按钮打开输入数据表单
const toggleDataModal = function () {
  modal.$patch((state) => {
    state.isOpen = true
  })
}

onMounted(() => {
  //当组件被挂载之后再初始化表格
  showSeeksGraph()
})
</script>

<style lang="scss" scoped>
.graph-box {
  width: 700px;
  height: 250px;
}

.btn-box {
  margin-left: 52rem;
}

.btn {
  margin-left: 600px;
  width: 75px;
  height: 32px;
  border-radius: 8px;
  color: white;
  background-color: #6c7c6f;
}
</style>
