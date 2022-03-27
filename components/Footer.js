import React from 'react';
import Image from 'next/image';

import Line from '../assets/logos/line.svg';
import Instagram from '../assets/logos/insta.svg';
import Facebook from '../assets/logos/fb.svg';
import Twitter from '../assets/logos/twitter.svg';

const Footer = () => {
  return (
    <div className='mx-auto mb-8 w-[402px] flex flex-col justify-center items-center mt-auto z-50'>
      <div className='flex w-full justify-between'>
        <Image src={Line} width={50} height={2} alt='Line' />
        <button className='transition-all hover:-translate-y-1'>
          <Image src={Instagram} width={22} height={22} alt='Instagram Logo' />
        </button>
        <button className='transition-all hover:-translate-y-1'>
          <Image src={Facebook} width={22} height={22} alt='Facebook Logo' />
        </button>
        <button className='transition-all hover:-translate-y-1'>
          <Image src={Twitter} width={22} height={22} alt='Twitter Logo' />
        </button>
        <Image src={Line} width={50} height={2} alt='Line' />
      </div>
      <div className='mt-6 font-bold'>
        UNUMANDAKH B. &copy; 2022. ALL RIGHTS RESERVED
      </div>
    </div>
  );
};

export default Footer;
