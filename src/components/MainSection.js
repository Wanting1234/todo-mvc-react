import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import { TaskItem } from "./TaskItem";

const MainSection = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (taskName) => {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(),
        name: taskName,
        completed: false,
      },
    ]);
  };

  const updateStatus = (id, isCompleted) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = isCompleted;
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, name) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.name = name;
        }
        return task;
      })
    );
  };

  return (
    <div className="main-section">
      <AddTask createTask={createTask} />
      <input type="checkbox" className="toggle-all" id="toggle-all" />
      <label></label>
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateStatus={updateStatus}
            deleteTask={() => deleteTask(task.id)}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default MainSection;
