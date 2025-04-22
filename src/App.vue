<template>
  <Node id="KHALID ROOT" ref="tree" />

  <button @click="getModel">****</button>
</template>
<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
const tree = ref()
const Node = defineAsyncComponent(() => import('./components/Node.vue'))
const getModel = () => console.log(tree.value.controller.model)
</script>
