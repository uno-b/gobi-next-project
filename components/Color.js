import React from 'react';

const Color = () => {
  return (
    <div>
      <span className='font-bold'>COLOR</span>
      <div className='flex mt-2.5'>
        {[...Array(4)].map((e, i) => (
          <button
            key={i}
            className='w-[30px] h-[30px] border border-gray mr-1 rounded-full flex justify-center items-center'
          >
            <div className='bg-red-500 w-5 h-5 rounded-full' />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Color;
