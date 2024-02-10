import React from "react";

function TodoForm() {
    
  const handleTodoForm = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text-xl text-center mt-4">Todoform</h1>
      <form onSubmit={handleTodoForm}>
        <div className="h-[500px] bg-red-100">
          <div className="join flex justify-center py-12">
            <div>
              <div>
                <input
                  className="input input-bordered join-item"
                  placeholder="Write your todo here"
                />
              </div>
            </div>
            <select className="select select-bordered join-item">
              <option disabled selected>
                Set Priority
              </option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">new</span>
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
