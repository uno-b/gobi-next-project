import React from 'react';
import Image from 'next/image';

import Quantity from './Quantity';
import Size from './Size';
import Color from './Color';

import ProductPic from '../assets/images/product-pic.png';
import BinLogo from '../assets/logos/trash-bin.svg';

const CartItem = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex'>
        <div>
          <Image
            src={ProductPic}
            alt='Product Picture'
            width={186}
            height={186}
          />
        </div>

        <div className='ml-4'>
          <h1 className='font-bold text-lg'>Gingam denim jaket</h1>
          <div>
            <h2 className='font-bold mt-4'>DETAILS:</h2>
            <div className='text-gray-3'>
              <p className=''>Cotton/polyester</p>
              <p>Machine washable</p>
              <p>Imported</p>
            </div>
          </div>
          <span className='text-xl font-bold inline-block mt-4'>$49.99</span>
        </div>
      </div>

      <Quantity />
      <Size />
      <Color />

      <button>
        <Image src={BinLogo} alt='Bin Logo' />
      </button>
    </div>
  );
};

export default CartItem;
