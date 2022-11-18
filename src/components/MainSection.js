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
      <input type="checkbox" className="toggle-all" id="toggle-all" />
      <label></label>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="view">
              <input type="checkbox" className="toggle" />
              <label className="task">{task.name}</label>
              <button className="delete">x</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainSection;
