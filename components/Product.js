import React from 'react';
import Image from 'next/image';

import DemoImg from '../assets/images/product-image.png';
import USDLogo from '../assets/logos/usd-circle.svg';
import CartLogo from '../assets/logos/product-cart.svg';
import BinLogo from '../assets/logos/trash-bin.svg';

const Product = ({ favorite }) => {
  return (
    <div className='mr-4 mb-6'>
      <div className='text-lg font-bold mb-1.5'>Gingham Denim Jacket</div>
      <div className='flex items-center mb-2'>
        <Image src={USDLogo} alt='USD Logo' />
        <div className='ml-2'>49.99</div>
      </div>
      <div
        className={`relative bg-red-300 w-72 h-72 ${favorite && 'w-56 h-80'}`}
      >
        <Image
          src={DemoImg}
          alt='Product Image'
          layout='fill'
          objectFit='cover'
        />
        <button className='absolute bottom-0 right-0 w-14 h-14 bg-black-primary flex justify-center items-center'>
          <Image src={CartLogo} alt='Cart Logo' />
        </button>
        <button className='absolute top-0 right-0 w-14 h-14 flex justify-center items-center'>
          <Image src={BinLogo} alt='Bin Logo' />
        </button>
      </div>
    </div>
  );
};

export default Product;
