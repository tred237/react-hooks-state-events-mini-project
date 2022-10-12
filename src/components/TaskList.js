import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  function handleDelete(e){
    const newTasks = tasks.filter(element => element.text !== e.target.previousSibling.textContent)
    setTasks(newTasks)
  }

  return (
    <div className="tasks">
      {tasks.map(e => <Task key={e.text.replace(' ','-')} text={e.text} category={e.category} onDelete={handleDelete} />)}
    </div>
  );
}

export default TaskList;
