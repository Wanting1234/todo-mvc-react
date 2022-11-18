import React from "react";

export const TaskItem = ({ task, onChange }) => (
  <li className={task.completed ? "marked" : "unmarked"}>
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={task.completed}
        onChange={onChange}
      />
      <label className="task">{task.name}</label>
      <button className="delete">x</button>
    </div>
  </li>
);
