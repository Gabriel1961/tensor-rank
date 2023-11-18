import * as tf from "@tensorflow/tfjs"

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

export enum TaskTag {
  regression = "regression",
  classification = "classification",
  images = "images",
  easy = "easy",
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
  description: string
  author: string
  features: number
  instances: number
  csvUrl: string
  subject: string 

  headers: string[]
  lables: string[]

  tags: TaskTag[]
}

export interface DatasetData {
  headers: string[],

  testX: tf.Tensor2D
  testY: tf.Tensor2D
  trainX: tf.Tensor2D
  trainY: tf.Tensor2D

  dataHead: string[][]
}

// we will use this in the url because it is more readable than the id 
export const encodeTaskTitleToUrl = (taskTitle: string) => {
  return taskTitle.replaceAll(" ", "_")
}

export const decodeTextTitleToUrl = (taskTitleUrl: string) => {
  return taskTitleUrl.replaceAll("_", " ")
}