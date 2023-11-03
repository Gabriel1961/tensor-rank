export interface Solution {
  id: string
  score: number
  taskId: string
  sourceCode: string
  author: {
    name: string
    id: string
  }
}

export interface User {
  id: string
  name: string
  tasksSolved: number 
  tasksPublished: number
}

export enum TaskTag {
  regression="regression",
  classification="classification",
  images="images",
}

export interface Task {
  id: string
  title: string
  subtitle: string
  datasetId: string
  tags: TaskTag[]
}

export interface Dataset {
  id: string
  name: string
  author: string
  info: string
  instances: number
  tags: string[]
}

// we will use this in the url because it is more readable than the id 
export const encodeTaskTitleToUrl = (taskTitle:string) => {
  return taskTitle.replace(" ","_")
}