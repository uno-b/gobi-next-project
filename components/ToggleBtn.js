import React from 'react';

const ToggleBtn = ({ isOn, setIsOn }) => {
  return (
    <div className='flex justify-center cursor-pointer'>
      <div
        className={`flex items-center relative w-11 h-6 transition duration-200 ease-linear rounded-full ${
          isOn ? 'bg-green' : 'bg-gray-400'
        }`}
      >
        <label
          htmlFor='toggle'
          className={`
            absolute
            ${isOn ? 'right-0' : 'left-0'}
            w-2.5
            h-5
            transition
            duration-100
            ease-linear
            transform
            bg-white
            border-2
            rounded
            cursor-pointer
            ${isOn ? 'border-green mr-2.5' : 'border-gray-400 ml-2.5'}
          `}
        ></label>
        <input
          type='checkbox'
          id='toggle'
          name='toggle'
          className='w-full h-full appearance-none focus:outline-none cursor-pointer'
          onClick={() => setIsOn(!isOn)}
        />
      </div>
    </div>
  );
};

export default ToggleBtn;
