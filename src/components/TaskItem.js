import React, { useState } from "react";

export const TaskItem = ({
  task: { id, name, completed },
  updateStatus,
  deleteTask,
  editTask,
}) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (id) => {
    deleteTask(id);
  };

  function handleFocus() {
    setIsActive(true);
  }

  function handleBlur() {
    setIsActive(false);
  }

  const handleSubmit = (e) => {
    const newTaskName = e.target.value.trim();
    if (e.code === "Enter" && newTaskName.length > 0) {
      editTask(id, newTaskName);
      handleBlur();
    }
  };

  return (
    <li className={completed ? "marked" : "unmarked"}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={completed}
          onChange={(e) => updateStatus(id, e.target.checked)}
        />
        <label className="task" onDoubleClick={handleFocus}>
          {isActive ? (
            <input
              type="text"
              placeholder={name}
              onBlur={handleBlur}
              className="rename-input"
              onKeyDown={handleSubmit}
            />
          ) : (
            name
          )}
        </label>
        <button
          className="delete-btn"
          data-testid={id}
          onClick={() => handleClick(id)}
        ></button>
      </div>
    </li>
  );
};
