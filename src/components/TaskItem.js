import React from "react";

export const TaskItem = ({ task, updateStatus, deleteTask }) => {
  const handleClick = (id) => {
    deleteTask(id);
  };

  return (
    <li className={task.completed ? "marked" : "unmarked"}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={task.completed}
          onChange={(e) => updateStatus(task.id, e.target.checked)}
        />
        <label className="task">{task.name}</label>
        <button
          className="delete-btn"
          data-testid={task.id}
          onClick={() => handleClick(task.id)}
        >
          x
        </button>
      </div>
    </li>
  );
};
