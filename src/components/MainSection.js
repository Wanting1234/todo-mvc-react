import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";

const MainSection = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  const creatTask = (taskName) => {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(),
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
