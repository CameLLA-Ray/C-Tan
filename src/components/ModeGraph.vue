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
  const __graph_json_data1 = {
    rootId: 'a',
    nodes: [
      //根节点
      { id: 'a', offset_y: -5, html: '<span class="font-bold text-2xl">硬包装过程</span>' },

      // 根节点左侧的数据:
      {
        id: 'r-b',
        html: '<span class="font-bold text-xs inline-block w-32"> 普通玻璃瓶 12522kg</span>',
        width: 100
      },
      {
        id: 'r-c',
        html: '<span class="font-bold text-xs inline-block w-32"> 硬壳塑料包装 9561kg</span>',
        width: 100
      },
      {
        id: 'r-d',
        html: '<span class="font-bold text-xs inline-block w-32"> 硬纸板 7566kg</span>',
        width: 100
      },

      //根节点右侧的数据:
      { id: 'b', html: '<span class="font-bold text-xs">废气 1256t</span>' },
      { id: 'c', html: '<span class="font-bold text-xs">甲烷 450.6t</span>' },
      { id: 'd', html: '<span class="font-bold text-xs">污水 15887t</span>' },
      { id: 'e', html: '<span class="font-bold text-xs">灰烬 1467t</span>' }
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
      {
        from: 'r-d',
        to: 'a',
        lineWidth: 4,
        isHideArrow: true
      },
      { from: 'a', to: 'b', isHideArrow: true },
      { from: 'a', to: 'c', isHideArrow: true },
      { from: 'a', to: 'd', isHideArrow: true },
      { from: 'a', to: 'e', isHideArrow: true }
    ]
  }
  proxy.$refs.seeksRelationGraph.setJsonData(__graph_json_data1)
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
