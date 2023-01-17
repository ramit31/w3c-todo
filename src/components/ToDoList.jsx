import "./ToDoList.css";

function ToDoList({ taskItem, onTaskClick, onTaskClose}) {
  return (
    <div className={`item ${taskItem.completed && "checked"}`}>
      <p className="content" onClick={() => onTaskClick(taskItem.id)}>
        {taskItem.task}
      </p>
      <button type="button" className="close" onClick={()=>onTaskClose(taskItem.id)}>
        {"\u00D7"}
      </button>
    </div>
  );
}

export default ToDoList;
