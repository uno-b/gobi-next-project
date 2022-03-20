import React from 'react';
import Image from 'next/image';

import RightArrow from '../assets/logos/right-arrow.svg';
import RightArrowWhite from '../assets/logos/right-arrow-white.svg';
import LeftArrow from '../assets/logos/left-arrow.svg';

export const Button = ({
  children,
  noArrow,
  leftLogo,
  rightLogo,
  whiteArrow,
  className,
  ghost,
}) => {
  return (
    <button
      className={`flex justify-center items-center w-44 h-14 ${
        ghost ? 'bg-transparent border-2 border-black-1' : 'bg-yellow'
      } ${className}`}
    >
      {leftLogo && <Image src={leftLogo} alt='Left logo' />}
      <div className='mr-8 font-bold'>{children}</div>
      {rightLogo ? (
        <Image src={rightLogo} alt='Right logo' />
      ) : !noArrow && whiteArrow ? (
        <Image src={RightArrowWhite} alt='Right arrow' />
      ) : null}
    </button>
  );
};

export const BackButton = ({ children, className }) => (
  <button className={`flex justify-center items-center ${className}`}>
    <Image src={LeftArrow} alt='Left Arrow' />
    <div className='ml-4 mr-8'>{children}</div>
  </button>
);
