import React from 'react';

const ToggleBtn = ({ isOn, setIsOn }) => {
  return (
    <div className='flex justify-center cursor-pointer'>
      <div
        className={`flex items-center relative w-11 h-6 transition duration-200 ease-linear rounded-full ${
          isOn ? 'bg-green' : 'border border-gray-3'
        }`}
      >
        <label
          htmlFor='toggle'
          className={`
            absolute
            left-2
            ${isOn && 'translate-x-4'}
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
            ${isOn ? 'border-green' : 'border-gray-dark'}
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
