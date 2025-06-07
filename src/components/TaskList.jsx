function TaskList() {
  return (
    <ul className="task-list">
      <li className="task-item">
        <input type="checkbox" />
        <span>Sample Task</span>
        <button>Delete</button>
      </li>
    </ul>
  );
}

export default TaskList;
