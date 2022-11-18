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

  const handleChange = (selectedTask) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === selectedTask.id) {
          task.completed = !selectedTask.completed;
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="main-section">
      <AddTask creatTask={creatTask} />
      <input type="checkbox" className="toggle-all" id="toggle-all" />
      <label></label>
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateStatus={() => handleChange(task)}
            deleteTask={() => deleteTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default MainSection;
