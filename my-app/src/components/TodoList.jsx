import React from "react";

function TodoList({
  task,
  ondelete,
  onEdit,
  updateTask,
  editedtext,
  seteditedtext,
  Editingid,
}) {
  return (
    <div className="todo-list">
      {(task?.length ?? 0) === 0 ? (
        <p>no task yet</p>
      ) : (
        task.map((task) => (
          <div className="item-key" key={task.id}>
            <div className="checkbox-w">
              <input className="checkbox" type="checkbox" />
              {Editingid === task.id ? (
                <input
                  type="text"
                  value={editedtext}
                  onChange={(e) => seteditedtext(e.target.value)}
                  className="edit-input"
                ></input>
              ) : (
                <span className="span">{task.Text}</span>
              )}
              {Editingid === task.id ? (
                <button onClick={updateTask} className="update-btn">
                  update
                </button>
              ) : (
                <button onClick={() => onEdit(task.id)} className="edit-btn">
                  edit
                </button>
              )}

              <button onClick={() => ondelete(task.id)} className="delete-btn">
                delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TodoList;
