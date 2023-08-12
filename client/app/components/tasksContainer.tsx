import React from "react";
import Task from "./task";

const TasksContainer = () => {
  return (
    <div className='flex flex-col items-start justify-start w-full sm:w-3/4 my-8 gap-6'>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
};

export default TasksContainer;
