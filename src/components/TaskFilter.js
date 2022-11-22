export const TaskFilter = ({
  tasks,
  filter,
  changeFilter,
  deleteCompleted,
}) => {
  const activeCount = tasks.filter((task) => !task.completed).length;
  const noTasksClass = tasks.length === 0 ? "-hidden" : "";
  const itemsLeftText = `item${activeCount !== 1 ? "s" : ""} left`;
  const getSelectedClass = (filterName) => {
    return filter === filterName ? "selected" : "";
  };

  const ClearButton = () => {
    if (tasks.filter((task) => task.completed).length) {
      return (
        <button className="clear-completed" onClick={deleteCompleted}>
          Clear completed
        </button>
      );
    }
    return null;
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
            href="/active"
            className={getSelectedClass("active")}
            onClick={(event) => changeFilter(event, "active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="/completed"
            className={getSelectedClass("completed")}
            onClick={(event) => changeFilter(event, "completed")}
          >
            Completed
          </a>
        </li>
      </ul>
      <ClearButton />
    </div>
  );
};
