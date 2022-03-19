import React from 'react';
import Image from 'next/image';

import DemoImg from '../assets/images/product-image.png';
import ClockLogo from '../assets/logos/clock.svg';

const Text = () => (
  <>
    <div className='text-lg font-bold mt-2 mb-1'>WOMEN COAT</div>
    <div className='flex items-center mb-2'>
      <Image src={ClockLogo} alt='USD Logo' />
      <div className='ml-2'>3 days left</div>
    </div>
  </>
);

const Sale = ({ color, sale, large, bottom }) => {
  return (
    <div className='mr-4 mb-6'>
      {!bottom && <Text />}
      <div className={`relative bg-red-300 w-72 h-72 ${large && 'h-[588px]'}`}>
        <Image
          src={DemoImg}
          alt='Product Image'
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className={`font-bold text-7xl ${color}`}>{sale}%</div>
        </div>
      </div>
      {bottom && <Text />}
    </div>
  );
};

export default Sale;
