<template>
  <div class="container">
    <h3 class="cation">
      <span @click="player!.getNodePosition(path!, nodes!, index)">{{
        caption
      }}</span>
      <input
        v-if="nodes?.length"
        type="button"
        :value="expand ? '-' : '+'"
        @click="toggle"
      />
      <button @click="player!.addNode(path!, nodes!, index)">ADD</button>
      <button @click="player!.deleteNode(path!, nodes!, index)">DELETE</button>
    </h3>
    <child
      v-if="expand"
      v-for="(node, _index) in nodes"
      :key="_index"
      :caption="node.caption"
      :nodes="node.nodes"
      :path="nodes"
      :index="+_index"
    />
  </div>
</template>

<script setup lang="ts">
import { Tree } from '../data/models/Tree'
import { defineAsyncComponent, inject, ref, toRef } from 'vue'
import { props as treeContent } from '../components/tree'

const props = defineProps(treeContent)
const caption = toRef(props, 'caption')
const nodes = toRef(props, 'nodes')
const expand = ref(true)
const toggle = () => (expand.value = !expand.value)
const child = defineAsyncComponent(() => import('../components/tree.vue'))

const player = inject<Tree>('controller')
</script>
<style scoped>
.container {
  margin-left: 40px;
  text-align: justify;
}
h3,
h4 {
  margin: 0px;
}
</style>
