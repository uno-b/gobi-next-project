import React from 'react';

const MenuButton = ({ onClick, isMenuOpen }) => {
  return (
    <button onClick={onClick}>
      <div className='bg-black-primary'>
        <div className='w-14 h-14 flex justify-center items-center'>
          <span
            aria-hidden='true'
            className={`block bg-white absolute h-0.5 w-5 transform transition duration-200 ease-in-out ${
              isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
            }`}
          ></span>
          <span
            aria-hidden='true'
            className={`block bg-white absolute  h-0.5 w-5 transform transition duration-200 ease-in-out ${
              isMenuOpen && 'opacity-0'
            }`}
          ></span>
          <span
            aria-hidden='true'
            className={`block bg-white absolute  h-0.5 w-5 transform  transition duration-200 ease-in-out ${
              isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
            }`}
          ></span>
        </div>
      </div>
    </button>
  );
};

export default MenuButton;
