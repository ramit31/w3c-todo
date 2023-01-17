import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import shortid from "shortid";

function App() {
  const [inputTask, setInputTask] = useState(() => "");
  const [taskList, setTaskList] = useState(() => []);

  function handleAdd(item) {
    if (item === "") {
      alert("You must write something!");
      return;
    }
    setTaskList((prevState) => {
      const itemDetail = {};
      itemDetail["id"] = shortid.generate();
      itemDetail["task"] = item;
      itemDetail["completed"] = false;
      return [...prevState, itemDetail];
    });
  }

  //reference: https://stackoverflow.com/questions/66576037/setstate-not-updating-array
  function handleChecked(itemId) {
    setTaskList((prevState) => {
      return prevState.map((ele) => {
        if (ele.id === itemId) {
          return { ...ele, completed: !ele.completed };
        }
        return ele;
      });
    });
  }

  function handleRemove(itemId) {
    setTaskList(prevState=>{
      return prevState.filter(ele=>{
        return ele.id!==itemId;
      })
    })
  }

  return (
    <div className="app">
      <div className="header">
        <h2>My To Do List</h2>
        <input
          type="text"
          value={inputTask}
          className="task"
          onChange={(e) => setInputTask(e.target.value)}
          placeholder="Title..."
        />
        <button
          type="button"
          onClick={() => handleAdd(inputTask)}
          className="addBtn"
        >
          Add
        </button>
      </div>
      {taskList.map((ele) => {
        return (
          <ToDoList key={ele.id} taskItem={ele} onTaskClick={handleChecked} onTaskClose={handleRemove} />
        );
      })}
    </div>
  );
}

export default App;
