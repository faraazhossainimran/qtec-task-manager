import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import Swal from "sweetalert2";
function TodoForm() {
  const [value, setValue] = useState([]);
  const [lists, setLists] = useState([{ id: 1, task: "playyyy", done: false }]);
  const [task, setTask] = useState("");
  const [nextId, setNextId] = useState(2);
  const [priority, setPriority] = useState([])
  // This function will be adding task - add function
  function Add() {
    // Look if task and priority are both fiill up by data
  if (task.trim() === "" || typeof priority !== "string" || priority.trim() === "") {
    Swal.fire({
      title: "Wait!",
      text: "Please fill up all the entry",
      icon: "error"
    });
    // Exit the function, don't execute add fucntion
    return; 
  }
    const newObj = { id: nextId, task: task, priority: priority, done: false };
    setLists((prevList) => prevList.concat(newObj));
    setTask(""); // Clear the input field
    setPriority(""); //clear the priority options
    setNextId((prevId) => prevId + 1);
  }
// complate the todo
  function Update(id) {
    console.log('clicked');
    const newList = lists.map((list, i) =>
      list.id === id ? { ...list, done: true } : l
    );
    console.log('clicked');
    setLists(newList);
  }
// delete todo from the list
  function Remove(id) {
    Swal.fire({
      title: "Do you want to Delete this Todo?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const newList = lists.filter((f) => f.id !== id);
        setLists(newList);
        Swal.fire("Delete!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Todo is not deleted yet", "", "info");
      }
    });

  }

  return (
    <div>
      {/* <form > */}
      <div className="h-auto py-12 bg-slate-50">
        <h1 className="text-xl text-center font-semibold">
          Welcome, Imran Hossain
        </h1>
        <p className="text-center text-xl my-2">
          Your Total todo: {lists.length}
        </p>
        <div className="join flex justify-center py-4">
          <div>
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="input input-bordered join-item"
              placeholder="Write your todo here"
            />
          </div>
          {/* select */}
          <select
          defaultValue={"Set Priority"}
            // task={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="select select-bordered join-item"
          >
            <option disabled value="Set Priority" selected>
              Set Priority
            </option>
            <option value={"Low"}>Low</option>
            <option value={"Medium"}>Medium</option>
            <option value={"High"}>High</option>
          </select>
          {/* btn */}
          <div className="indicator">
            <button onClick={Add} type="submit" className="btn join-item">
              Add Todo
            </button>
          </div>
        </div>
      </div>
      {/* </form> */}
      <div>
      <div className="text-center">
        <h1 className="my-4">All Todos</h1>
      </div>
        <ul>
          {lists.map((list, i) => (
            <TodoList key={i} list={list} Update={Update} Remove={Remove}></TodoList>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoForm;
