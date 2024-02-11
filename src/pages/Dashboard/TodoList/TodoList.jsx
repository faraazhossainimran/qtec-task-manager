import React from "react";
import { FaEyeSlash } from "react-icons/fa";

function TodoList({ list, Update, Remove }) {
    console.log(list.priority);
  return (
    <div className="w-[500px]  mx-auto">
      <div className="flex">
        <ul className="bg-slate-100 w-full my-2">
          <li className="flex my-2">
            <span onClick={() => Update(list.id)} className={"w-full flex justify-left items-center"}>
              <p className="text-left p-4">{list.task}</p>
              {/* status section */}
              <div className="badge badge-info gap-2">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg> */}
                {list.priority}
              </div>
            </span>

            {/* delete icon */}
            <span
              onClick={() => Remove(list.id)}
              className="pt-4 pr-4 cursor-pointer"
            >
              <p className="">
                <FaEyeSlash size={22} />
              </p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
