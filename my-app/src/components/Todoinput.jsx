import React, { useState } from "react";

function Todoinput({ onadd }) {
  const [input, setinput] = useState("");

  const handlechange = (e) => {
    setinput(e.target.value);
  };
  const handleadd = () => {
    onadd(input);
    setinput("");
  };

  return (
    <div className="todo-input">
      <input
        className="input-task"
        type="text"
        value={input}
        placeholder="Enter a task"
        onChange={handlechange}
      />
      <button className="add-task" onClick={handleadd}>
        Add Task
      </button>
      {/* <button className="edit-btn" disabled>
        Edit Task
      </button> */}
    </div>
  );
}

export default Todoinput;
