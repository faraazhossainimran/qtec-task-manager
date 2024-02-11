import React, { useState } from "react";

function TodoForm(props) {
  const [value, setValue] = useState("");
//   const [priority, setPriority] = useState("")
  const handleSubmit = (e) => {
    // prevent default action
      e.preventDefault();
      if (value) {
        // add todo
        props.addTodo(value);
        // clear form after submission
        setValue('');
      }
    };
  return (
    <div>
      <h1 className="text-xl text-center mt-4">Todoform</h1>
      <form onSubmit={handleSubmit}>
        <div className="h-[500px] bg-red-100">
          <div className="join flex justify-center py-12">
            <div>
              <input
              value={value}
                onChange={(e) => setValue(e.target.value)}
                className="input input-bordered join-item"
                placeholder="Write your todo here"
              />
            </div>
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
            <div className="indicator">
              <button type="submit" className="btn join-item">
                Add Todo
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
