import { Component } from "solid-js"
import TaskPanelDisplay from "./Components/TaskPanelDisplay";
import { Task, TaskTag } from "../../datamodel";
import styles from "./TasksPage.module.scss"
const TasksPage: Component = () => {
  const task = {id:"",title:"Some Random Task", subtitle:"Just a simple description", datasetId:"", tags:[TaskTag.classification,TaskTag.images]} as Task;
  return <div class={styles.container}>
    <TaskPanelDisplay task={task}/>
    <TaskPanelDisplay task={task}/>
    <TaskPanelDisplay task={task}/>
    <TaskPanelDisplay task={task}/>
    <TaskPanelDisplay task={task}/>
    <TaskPanelDisplay task={task}/>
    <TaskPanelDisplay task={task}/>
    <TaskPanelDisplay task={task}/>
    <TaskPanelDisplay task={task}/>
    <TaskPanelDisplay task={task}/>
    <TaskPanelDisplay task={task}/>
    <TaskPanelDisplay task={task}/>
    <TaskPanelDisplay task={task}/>
    <TaskPanelDisplay task={task}/>
    <TaskPanelDisplay task={task}/>
    <TaskPanelDisplay task={task}/>
  </div>
}

export default TasksPage;