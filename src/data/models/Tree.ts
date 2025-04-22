import type { ITree } from '../contracts/ITree'

class Tree implements ITree {
  data: Object[]
  allNodes: number
  flattData: Object[]
  constructor(data: Object[]) {
    this.data = data
    this.flattData = []
    this.allNodes = this.countObjects(this.data)
  }
  deleteNode(path: Object[], nodes: Object[], index: number) {
    if (!index && nodes == path) {
      console.log(`ROOOOT index =${index}`)
      this.allNodes -= this.countObjects(nodes[0])
      nodes.splice(0, 1)
      return
    }
    if (nodes) {
      this.allNodes -= this.countObjects(nodes)
      nodes.splice(index, 1)
    }
    if (path) {
      this.allNodes -= 1
      path.splice(index, 1)
    }
  }
  addNode(path: Object[], nodes: Object[], index: number) {
    // console.log(JSON.stringify(nodes) + '//' + index)

    if (nodes) {
      this.allNodes += 1
      nodes.splice(index + 1, 0, { caption: `New` })
    } else {
      this.allNodes += 1
      path.splice(index + 1, 0, { caption: `New` })
    }
  }

  // for now this is a recursive function that get the total number of nodes in the data schematic
  countObjects(data: object[] | object) {
    let count = 0
    this.flattData = []
    let that = this
    function traverse(node: object[] | object) {
      if (Array.isArray(node)) {
        for (const item of node) {
          traverse(item)
        }
      } else if (typeof node === 'object' && node !== null) {
        count++
        if (node.nodes) {
          traverse(node.nodes)
          that.flattData.push({ caption: node.caption })
        } else {
          that.flattData.push(node)
        }
      }
    }

    traverse(data)
    return count
  }

  getNodePosition(
    path: object[] | Object,
    nodes: object[] | object,
    index: number
  ) {
    console.log(`path= ${JSON.stringify(path)}`)
    console.log(`node= ${JSON.stringify(nodes)}`)
    console.log(`index= ${index}`)
  }
}

export { Tree }
