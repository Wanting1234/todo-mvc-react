import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import { TaskItem } from "./TaskItem";
import { ToggleAll } from "./ToggleAll";
import { TaskFilter } from "./TaskFilter";

const MainSection = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );
  const [filter, setFilter] = useState("all");

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

  const changeFilter = (event, filterName) => {
    event.preventDefault();
    setFilter(filterName);
  };

  const getVisibleTasks = () => {
    if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    } else if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  };

  const visibleTasks = getVisibleTasks();

  const deleteCompleted = () => {
    setTasks(tasks.filter((task) => task.completed === false));
  };

  return (
    <div className="main-section">
      <AddTask createTask={createTask} />
      <ToggleAll toggleAll={toggleAll} />
      <label></label>
      <ul className="task-list">
        {visibleTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateStatus={updateStatus}
            deleteTask={() => deleteTask(task.id)}
            editTask={editTask}
          />
        ))}
      </ul>
      <TaskFilter
        tasks={tasks}
        filter={filter}
        changeFilter={changeFilter}
        deleteCompleted={deleteCompleted}
      />
    </div>
  );
};

export default MainSection;
