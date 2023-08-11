import React from "react";
import { BiTrash, BiEdit, BiCheckCircle } from "react-icons/bi";

const Task = () => {
  return (
    <div className='w-full p-4 bg-secondary flex flex-row justify-between items-center rounded-sm'>
      <div>Task</div>
      <div>Description</div>
      <div>Due Date</div>
      <div className='flex flex-row gap-2'>
        <BiTrash className='text-red-500 cursor-pointer text-2xl ' />
        <BiEdit className='text-white cursor-pointer text-2xl' />
        <BiCheckCircle className='text-green-500 cursor-pointer text-2xl' />
      </div>
    </div>
  );
};

export default Task;
