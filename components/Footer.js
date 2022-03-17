import React from 'react';
import Image from 'next/image';

import Line from '../assets/logos/line.svg';
import Instagram from '../assets/logos/insta.svg';
import Facebook from '../assets/logos/fb.svg';
import Twitter from '../assets/logos/twitter.svg';

const Footer = () => {
  return (
    <div className='mx-auto absolute bottom-8 left-0 right-0 w-[312px] flex flex-col justify-center items-center'>
      <div className='flex w-full justify-between'>
        <Image src={Line} width={50} height={2} alt='Line' />
        <button>
          <Image src={Instagram} width={22} height={22} alt='Instagram Logo' />
        </button>
        <button>
          <Image src={Facebook} width={22} height={22} alt='Facebook Logo' />
        </button>
        <button>
          <Image src={Twitter} width={22} height={22} alt='Twitter Logo' />
        </button>
        <Image src={Line} width={50} height={2} alt='Line' />
      </div>
      <div className='mt-6 tracking-wide font-bold'>
        YOLO &copy; 2020. ALL RIGHTS RESERVED
      </div>
    </div>
  );
};

export default Footer;
