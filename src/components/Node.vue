<template>
  <div class="container">
    <div>{{ props.id || controller.model.id }}</div>
    {{ children?.length }}
    <button @click="() =>controller.addNode(props.children ? props.children : controller?.model.children)" >
      +
    </button>
    <Node
      v-if="children?.length"
      v-for="(n, i) in children"
      v-bind="n"
      :key="i"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, provide, defineExpose } from 'vue'
import { Controller, type TNode } from './Controller'
const props = defineProps<Partial<TNode>>()
let controller = inject<Controller>('controller')

const children = computed(() => props.children ?? controller?.model.children)
//const N = defineAsyncComponent(() => import('./Node.vue'))
if (controller == undefined) {
  controller = new Controller()
  provide('controller', controller)
}
defineExpose({ controller })
</script>
<style>
.container {
  margin-left: 20px;
}
</style>
