import React from "react";
import { TaskModel } from "../model/task";

export const Task = ({ data:{title,id} = new TaskModel(),onDeleteTask }) => {
    const handleClickDelete = ()=>{
        if(window.confirm("Are you fucking sure 😄?")){
            onDeleteTask(id)
        }
    }
  return (
    <li
      className="d-flex justify-content-between mx-auto w-50 m-1"
      style={{ borderBottom: "solid" }}
    >
      <span>{title}</span>
      <div>
        <button
        onClick={handleClickDelete}>D</button>
        <button>U</button>
      </div>
    </li>
  );
};
