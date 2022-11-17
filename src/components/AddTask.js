import React, { useState } from "react";

const AddTask = () => {
  const [taskName, setTaskName] = useState("");

  const changeTaskName = (e) => {
    setTaskName(e.target.value);
  };

  const handleKeyDown = (e) => {
    const enterCode = 13;
    const isEnter = e.keyCode === enterCode;
    const newTaskName = taskName.trim();
    const isTaskNamePresent = newTaskName.length > 0;
    if (isEnter && isTaskNamePresent) {
      e.target.value = "";
    }
  };

  return (
    <input
      className="new-task"
      placeholder="What needs to be done?"
      autoFocus
      value={taskName}
      onChange={changeTaskName}
      onKeyDown={handleKeyDown}
    />
  );
};

export default AddTask;
