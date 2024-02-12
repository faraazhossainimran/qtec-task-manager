import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import Swal from "sweetalert2";
function TodoForm() {
  const [value, setValue] = useState([]);
  const [lists, setLists] = useState([]);
  const [task, setTask] = useState("");
  const [nextId, setNextId] = useState(1);
  const [priority, setPriority] = useState("");
  // This function will be adding task - add function
  function Add() {
    // Look if task and priority are both fiill up by data
    if (
      task.trim() === "" ||
      typeof priority !== "string" ||
      priority.trim() === "" ||
      task.length > 46
    ) {
      Swal.fire({
        title: "Wait!",
        text: "Please fill up all the entry ( Make sure your task's text is not more than 40 letters",
        icon: "error",
      });
      // Exit the function, don't execute add fucntion
      return;
    }
    const newObj = { id: nextId, task: task, priority: priority, done: false };
    localStorage.setItem('todos', JSON.stringify(newObj));
    const storedTodo = JSON.parse(localStorage.getItem('todos'));
    console.log("stored todo");
    setLists((prevList) => prevList.concat(storedTodo));
    setTask(""); // Clear the input field
    setPriority(""); //clear the priority options
    setNextId((prevId) => prevId + 1);
  }
  // complate the todo
  function Update(id) {
    Swal.fire({
      title: "Great work! Your Todo is Completed",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
    const newList = lists.map((list, i) =>
      list.id === id ? { ...list, done: true } : list
    );
    setLists(newList);
    localStorage.setItem('todos', JSON.stringify(newList));
  }
  // delete todo from the list
  function Remove(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "If you Delete your 'Todo' once, you won't get it back!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newList = lists.filter((f) => f.id !== id);
        setLists(newList);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }

  return (
    <div>
      {/* <form > */}
      <div className="h-auto py-12 bg-slate-50">
        <h1 className="text-xl text-center font-semibold">
          Welcome to Qtec Task Manager
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
            // defaultValue={"Set Priority"}
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
            <button onClick={Add} type="submit" className="p-2 rounded-md bg-[#349DF1] text-white font-semibold join-item">
              Add Todo
            </button>
          </div>
        </div>
      </div>
      {/* </form> */}
      <div>
        <div className="text-center">
          <h1 className="mt-6 font-semibold">
            {lists.length > 0 ? (
              <>
                <h1 className="text-2xl">All Todos</h1>
              </>
            ) : (
              <>
                <div className="container mx-auto">
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl text-[#349DF1]">
                      Please add a todo to see here..
                    </h1>
                    <img
                      className="-mt-6 w-[500px]"
                      src="https://i.ibb.co/QXVFcNC/To-do-list-bro.png"
                    />
                  </div>
                </div>
              </>
            )}
          </h1>
        </div>
        <ul>
          {lists.map((list, i) => (
            <TodoList
              key={i}
              list={list}
              Update={Update}
              Remove={Remove}
            ></TodoList>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoForm;
