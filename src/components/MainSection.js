import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import { TaskItem } from "./TaskItem";
import { TaskList } from "./TaskList";
import { ToggleAll } from "./ToggleAll";

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

  const toggleAll = (e) => {
    const newTasks = tasks.map((task) => {
      task.completed = e.target.checked;
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="main-section">
      <AddTask createTask={createTask} />
      <ToggleAll toggleAll={toggleAll} />
      <label></label>
      <TaskList
        tasks={tasks}
        prop1={(task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateStatus={updateStatus}
            deleteTask={() => deleteTask(task.id)}
            editTask={editTask}
          />
        )}
      />
    </div>
  );
};

export default MainSection;
