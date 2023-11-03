import { Route, Router, Routes } from "@solidjs/router";
import { Component, lazy } from "solid-js";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { LoginProvider } from "./contexts/loginContext";

const AboutPage = lazy(() => import("./pages/AboutPage"))
const TasksPage = lazy(() => import("./pages/TasksPage/TasksPage"))
const TaskPage = lazy(() => import("./pages/TaskPage"))
const ScoreboardPage = lazy(() => import("./pages/ScoreboardPage"))
const DatasetsPage = lazy(()=>import("./pages/DatasetsPage"))

export const App: Component = () => {
  return <LoginProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" component={HomePage} />
        <Route path="/task" component={TaskPage} />
        <Route path="/tasks" component={TasksPage} />
        <Route path="/scoreboard" component={ScoreboardPage} />
        <Route path="/datasets" component={DatasetsPage} />
        <Route path="/about" component={AboutPage} />
      </Routes>
    </Router >
  </LoginProvider>
}