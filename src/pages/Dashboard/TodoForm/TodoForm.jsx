import React, { useState } from "react";

function TodoForm() {
  const [value, setValue] = useState([])
  const [list, setList] = useState([
    {id: 1, task: "playyyy", done: false}
  ])
const [task, setTask] = useState('')

  return (
    <div>
     Total todo:  {list.length}
      <h1 className="text-xl text-center mt-4">Todoform</h1>
      {/* <form > */}
        <div className="h-[150px] bg-red-100">
          <div className="join flex justify-center py-12">
            <div>
              <input
                type="text"
                onChange={e => setTask(e.target.value)}
                className="input input-bordered join-item"
                placeholder="Write your todo here"
              />
            </div>
            <div className="indicator">
              <button onClick={Add} type="submit" className="btn join-item">
                Add Todo
              </button>
            </div>
          </div>
        </div>
      {/* </form> */}
      <div>
        <ul>
          {list.map((l, i)=> (
            <li><span>{l.task}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
  // add function
  function Add(){
    const newObj = {id: 2, task: task, done: false}
    setList(prevList => prevList.concat(newObj))
  }
}

export default TodoForm;



 {/* <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="select select-bordered join-item">
              <option disabled value="Set Priority" selected>
                Set Priority
              </option>
              <option value={"Low"}>Low</option>
              <option value={"Medium"}>Medium</option>
              <option value={"High"}>High</option>
            </select> */}