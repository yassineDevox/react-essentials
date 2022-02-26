import React, { useRef } from "react";

export const AddTask = ({onAddTask}) => {
  const titleRef = useRef("");

  const handleClick = () => {
    if (!titleRef.current.value) alert("Error Empty value 😢");
    else {
        onAddTask(titleRef.current.value)
        titleRef.current.value = ""
    }
  };
  return (
    <div>
      <h1 className="text-center">Add Task </h1>
      <div className="text-center">
        <input ref={titleRef} type="text" placeholder="add new task here " />
        <button onClick={handleClick}>save</button>
      </div>
    </div>
  );
};
