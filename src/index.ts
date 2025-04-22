import { defineAsyncComponent } from 'vue'
const tree = defineAsyncComponent(() => import('./components/tree.vue'))

export { tree }
