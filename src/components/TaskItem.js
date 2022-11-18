import React, { useState } from "react";

export const TaskItem = ({ task, updateStatus, deleteTask }) => {
  const [beVisible, setBeVisible] = useState(false);

  function handleEnter() {
    setBeVisible(true);
  }

  function handleLeave() {
    setBeVisible(false);
  }

  function handleClick(id) {
    deleteTask(id);
  }

  return (
    <li
      className={task.completed ? "marked" : "unmarked"}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={task.completed}
          onChange={updateStatus}
        />
        <label className="task">{task.name}</label>
        <button
          className={beVisible ? "delete" : "present"}
          data-testid={task.id}
          onClick={() => handleClick(task.id)}
        >
          x
        </button>
      </div>
    </li>
  );
};
