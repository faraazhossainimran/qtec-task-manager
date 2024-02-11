import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
function TodoForm() {
  const [value, setValue] = useState([]);
  const [lists, setLists] = useState([{ id: 1, task: "playyyy", done: false }]);
  const [task, setTask] = useState("");
  const [nextId, setNextId] = useState(2);
  const [priority, setPriority] = useState([])
  // add function
  function Add() {
    const newObj = { id: nextId, task: task, done: false };
    setLists((prevList) => prevList.concat(newObj));
    console.log("before settask", task);
    setTask(""); // Clear the input field
    setNextId((prevId) => prevId + 1);
    console.log("after settask", task);
  }

  function Update(id) {
    const newList = lists.map((list, i) =>
      list.id === id ? { ...list, done: true } : l
    );
    setLists(newList);
  }

  function Remove(id) {
    const newList = lists.filter((f) => f.id !== id);
    setLists(newList);
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
              onChange={(e) => setTask(e.target.value)}
              className="input input-bordered join-item"
              placeholder="Write your todo here"
            />
          </div>
          {/* select */}
          <select
            task={priority}
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
            <TodoList list={list} Update={Update} Remove={Remove}></TodoList>
            // <li key={l.id}>
            //   <span onClick={() => Update(l.id)} className={l.done ? "done" : ""}>{l.task}</span>
            //   <span onClick={() => Remove(l.id)} className="ml-12 btn">X</span>
            // </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoForm;
