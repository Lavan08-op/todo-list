import react, { useState } from "react";
// import React from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import Todoinput from "./components/Todoinput";

function App() {
  const [task, settask] = useState([]);
  const [editingid, seteditingid] = useState(null);
  const [Editedtext, setEditedtext] = useState("");

  const addtask = (tasktest) => {
    if (tasktest.trim() === "") {
      alert("please enter a valid task");
      return;
    }
    const newtask = {
      id: Date.now(),
      Text: tasktest,
      completed: false,
    };
    const updatedTasks = [...task, newtask];
    settask(updatedTasks);
    console.log("Tasks after add:", updatedTasks);
  };
  const edittask = (id) => {
    const tasktoedit = task.find((task) => task.id === id);
    seteditingid(id);
    setEditedtext(tasktoedit.Text);
  };
  const updatetask = () => {
    if (Editedtext.trim() === "") {
      alert("please enter a valid task");
      return;
    }
    const updatedTasks = task.map((task) =>
      task.id === editingid ? { ...task, Text: Editedtext } : task
    );

    settask(updatedTasks);
    seteditingid(null);
    setEditedtext("");
    console.log("Tasks after update:", updatedTasks);
  };

  const deletetask = (id) => {
    const updatedtask = task.filter((task) => task.id !== id);
    settask(updatedtask);
    console.log("Tasks after delete:", updatedtask);
  };

  // const [count, setCount] = useState(0);
  // const [name, setname] = useState(" ");

  // const handleclick = () => {
  //   setCount(count + 1);
  // };
  // const handlechange = (e) => {
  //   setname(e.target.value);
  // };
  // const mousehover = () => {
  //   alert("you hovered me");
  // };

  return (
    <>
      <div className="container">
        <div className="todo-box">
          <h1 className="title"> My-Todo List</h1>
        </div>
        <div className="intro-box">
          <h2>Enter your daily Todo-task to keep your track </h2>
        </div>

        <div className="todo-input-box">
          <Todoinput onadd={addtask} />
          <TodoList
            task={task}
            ondelete={deletetask}
            onEdit={edittask}
            updateTask={updatetask}
            editedtext={Editedtext}
            seteditedtext={setEditedtext}
            Editingid={editingid}
          />
        </div>
      </div>
    </>
  );
}

export default App;
