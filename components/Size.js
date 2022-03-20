import React from 'react';

const Size = () => {
  return (
    <div>
      <span className='font-bold'>SIZE</span>
      <div className='mt-2.5 p-[2px] bg-gray divide-x-2 divide-gray'>
        {[...Array(5)].map((e, i) => (
          <button
            key={i}
            className={`relative bg-white w-10 h-10 ${
              i === 1 && 'bg-gray text-[#cccccc]'
            } ${i === 3 && 'outline outline-2 z-50'}`}
          >
            XS
          </button>
        ))}
      </div>
    </div>
  );
};

export default Size;
