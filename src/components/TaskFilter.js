export const TaskFilter = ({ tasks, filter, changeFilter }) => {
  const activeCount = tasks.filter((task) => !task.completed).length;
  const noTasksClass = tasks.length === 0 ? "-hidden" : "";
  const itemsLeftText = `item${activeCount !== 1 ? "s" : ""} left`;
  const getSelectedClass = (filterName) => {
    return filter === filterName ? "selected" : "";
  };

  return (
    <div className={`list-footer${noTasksClass}`}>
      <span className="task-count">
        <strong>{activeCount}</strong>
        &nbsp;
        {itemsLeftText}
      </span>
      <ul className="list-filter">
        <li>
          <a
            href="/"
            className={getSelectedClass("all")}
            onClick={(event) => changeFilter(event, "all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="/"
            className={getSelectedClass("active")}
            onClick={(event) => changeFilter(event, "active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="/"
            className={getSelectedClass("completed")}
            onClick={(event) => changeFilter(event, "completed")}
          >
            Completed
          </a>
        </li>
      </ul>
    </div>
  );
};
