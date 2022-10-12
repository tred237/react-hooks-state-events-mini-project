import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)

  function onTaskFormSubmit(e, detailState, categoryState){
    e.preventDefault()
    const newTask = {
      text: detailState,
      category: categoryState,
    }
    setTasks([...tasks,newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        tasks={TASKS}
        setTasks={setTasks}/>
      <NewTaskForm 
        categories={CATEGORIES} 
        onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
