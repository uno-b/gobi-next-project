import React from 'react';

const Color = ({ data, color, setColor }) => {
  return (
    <div>
      <span className='font-bold'>COLOR</span>
      <div className='flex mt-2.5'>
        {data?.map((e, i) => (
          <button
            key={i}
            className={`w-[30px] h-[30px] border  rounded-full flex justify-center items-center mr-1 ${
              e === color ? 'border-black-1' : 'border-gray'
            }`}
            onClick={() => setColor && setColor(e)}
          >
            <div
              className={`w-5 h-5 rounded-full`}
              style={{ backgroundColor: e }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Color;
