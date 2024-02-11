import React from "react";
import { FaEyeSlash } from "react-icons/fa";
import { MdOutlineDownloadDone } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
function TodoList({ list, Update, Remove }) {
  console.log(list.priority);
  return (
    <div className="w-[500px] mx-auto ">
      <div className="flex">
        <ul className={list.done? "bg-slate-50 w-full my-2 rounded-md border-green-300 border-2" : "bg-slate-100 w-full my-2 rounded-md"}>
          <li className="flex my-2">
            <span
            //   onClick={() => Update(list.id)}
              className={"w-full flex justify-left items-center"}
            >
              <p className="text-left p-4">{list.task}</p>
              {/* status section */}
              <div
                className={
                  (list.priority === "Low"
                    ? "bg-green-200 p-2 rounded-md"
                    : "") ||
                  (list.priority === "Medium"
                    ? "bg-yellow-200 p-2 rounded-md"
                    : "") ||
                  (list.priority === "High" ? "bg-red-400 p-2 rounded-md" : "")
                }
              >
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
                <p className="font-semibold flex">{list.priority === "High" ? (<><IoRocketOutline size={16} className="mr-2 mt-1"/> {list.priority}</>) : (list.priority)} </p>
              </div>
            </span>
            {/* update todo - icon*/}
            {list.done ? (
              ""
            ) : (
              <span className="pt-3 pr-4 cursor-pointer">
                <p onClick={() => Update(list.id)}>
                  <MdOutlineDownloadDone size={28} color="#2C5E1A"/>
                </p>
              </span>
            )}
            {/* delete todo - icon */}
            <span
              onClick={() => Remove(list.id)}
              className="pt-4 pr-4 cursor-pointer"
            >
              <p className="">
                <FaEyeSlash size={22} color="#FF2E2E"/>
              </p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
