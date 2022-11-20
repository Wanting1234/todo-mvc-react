import React, { useState } from "react";

const AddTask = ({ createTask }) => {
  const [taskName, setTaskName] = useState("");

  const changeTaskName = (e) => {
    setTaskName(e.target.value);
  };

  const handleKeyDown = (e) => {
    const enterCode = 13;
    const newTaskName = taskName.trim();

    if (e.keyCode === enterCode && newTaskName.length > 0) {
      createTask(newTaskName);
      setTaskName("");
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
