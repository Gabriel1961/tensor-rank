import { Component } from "solid-js";
import styles from "./Home.module.scss"
const HomePage: Component = () => {
  return <div class={styles.container}>
    <div class={styles.header}>TensorRank</div>
  </div>
}

export default HomePage;