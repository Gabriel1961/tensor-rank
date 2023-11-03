interface Solution {
  id: string
  score: number
  taskId: string
  sourceCode: string
  author: {
    name: string
    id: string
  }
}

interface Task {
  id: string
  title: string
  subtitle: string
  datasetId: string
  tags: string[]
}

interface Dataset {
  id: string
  name: string
  author: string
  info: string
  instances: number
  tags: string[]
}