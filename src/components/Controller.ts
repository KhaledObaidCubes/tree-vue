import { reactive } from 'vue'
export type TMustHave = { id: string }

export type TNode = {
  id: string
  children: TNode[]
}
// export type TNode<T extends TMustHave = TMustHave> = T & {
//   children: TNode<T>[]
// }

export class Controller {
  model = reactive({ id: '1', children: [] }) as TNode
  addNode(arr: TNode[]) {
    arr.push({
      id: ' new Node ' + this.model.children.length,
      children: [] as Array<TNode>,
    } as TNode)
  }
}
