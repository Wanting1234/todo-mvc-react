import React, { useState } from "react";
import AddTask from "./AddTask";

const MainSection = () => {
  const [tasks, setTasks] = useState([]);

  const creatTask = (taskName) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        name: taskName,
        completed: false,
      },
    ]);
  };

  return (
    <div className="main-section">
      <AddTask creatTask={creatTask} />
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <input type="checkbox" />
            <label>{task.name}</label>
            <button>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainSection;
