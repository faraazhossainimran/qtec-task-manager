import React from "react";
import { FaEyeSlash } from "react-icons/fa";

function TodoList({ list, Update, Remove }) {
  return (
    <div className="w-[500px]  mx-auto">
      <div className="flex">
        <ul className="bg-slate-100 w-full my-2">
          <li className="flex my-2">
            <span onClick={() => Update(list.id)} className={"w-full"}>
              <p className="text-left p-4">{list.task}</p>
            </span>
            <span
              onClick={() => Remove(list.id)}
              className="pt-4 pr-4 cursor-pointer"
            >
              <p className=""><FaEyeSlash size={22}/></p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
