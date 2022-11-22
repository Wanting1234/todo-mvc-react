import React from "react";
import { TaskItem } from "./TaskItem";

export const TaskList = ({
  tasks,
  filter,
  updateStatus,
  deleteTask,
  editTask,
}) => {
  const getVisibleTasks = () => {
    if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    } else if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }
    return tasks;
  };

  const visibleTasks = getVisibleTasks();

  return (
    <section className="task-list">
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            updateStatus={updateStatus}
            deleteTask={() => deleteTask(task.id)}
            editTask={editTask}
          ></TaskItem>
        ))}
      </ul>
    </section>
  );
};
