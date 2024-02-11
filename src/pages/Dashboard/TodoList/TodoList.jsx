import React from "react";
import PropTypes from "prop-types";

function TodoList({list, Update, Remove}) {
  return (
    <div>
      <li>
        <span onClick={() => Update(list.id)} className={list.done ? "done" : ""}>
          {list.task}
        </span>
        <span onClick={() => Remove(list.id)} className="ml-12 btn">
          X
        </span>
      </li>
    </div>
  );
}

export default TodoList;
