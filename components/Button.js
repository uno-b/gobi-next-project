import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

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
  onClick,
  bgColor,
}) => {
  return (
    <button
      className={`group flex justify-center items-center w-44 h-14 ${
        bgColor ? bgColor : 'bg-yellow'
      } ${ghost && 'bg-transparent border-2 border-black-1'} ${className}`}
      onClick={onClick}
    >
      {leftLogo && <Image src={leftLogo} alt='Left logo' />}
      <div className="mr-8 font-bold inline-block relative before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:w-0 before:right-0 before:h-[2px] before:bg-black-1 before:transition-all group-hover:before:w-full">
        {children}
      </div>
      {!noArrow ? (
        <Image
          src={
            rightLogo ? rightLogo : whiteArrow ? RightArrowWhite : RightArrow
          }
          alt='Right logo'
        />
      ) : !noArrow && whiteArrow ? (
        <Image src={RightArrowWhite} alt='Right arrow' />
      ) : null}
    </button>
  );
};

export const BackButton = ({ children, className }) => {
  const router = useRouter();

  return (
    <button
      className={`flex justify-center items-center group ${className}`}
      onClick={() => router.back()}
    >
      <Image src={LeftArrow} alt='Left Arrow' />
      <div className="ml-4 mr-8 inline-block relative before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:w-0 before:right-0 before:h-[2px] before:bg-yellow-1 before:transition-all group-hover:before:w-full">
        {children}
      </div>
    </button>
  );
};
