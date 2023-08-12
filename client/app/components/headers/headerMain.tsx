import React from "react";

const HeaderMain = () => {
  return (
    <div className='w-full sm:w-3/4 items-center justify-between font-mono text-sm lg:flex'>
      <div className='flex flex-row justify-between items-center w-full'>
        <div className='flex flex-col justify-center items-start'>
          <div className='text-3xl font-thin text-yellowish'>Daily Tasks</div>
        </div>
        <div className='cursor-pointer border-2 border-yellowish text-yellowish flex flex-col items-center justify-center px-4 py-2'>
          +Task
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
