<template>
  <!-- <h3>TOTAL NODES #: {{ treeInc.allNodes }}</h3>
  <h3>TOTAL NODES #: {{ treeInc.flattData }}</h3> -->
  <h3>
    <tree-comp :path="data" :caption="'ROOT LEVEL'" :nodes="data"></tree-comp>
  </h3>
</template>
<script setup lang="ts">
import { reactive, defineAsyncComponent, provide, ref } from 'vue'
import { TreeSchematic } from './data/models/TreeSchematic'
import { Tree } from './data/models/Tree'

const data = reactive(TreeSchematic)
const treeInc = ref(new Tree(data))
provide('controller', treeInc.value)

const TreeComp = defineAsyncComponent(() => import('./components/tree.vue'))
</script>
