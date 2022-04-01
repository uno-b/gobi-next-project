import React, { useEffect } from 'react';
import Image from 'next/image';

import Quantity from './Quantity';
import Size from './Size';
import Color from './Color';

import BinLogo from '../assets/logos/trash-bin.svg';

const CartItem = ({ cartItem }) => {
  const { title, images, priceRange } = cartItem.data;

  return (
    <div className='flex flex-col lg:flex-row justify-between lg:items-center space-y-10'>
      <div className='flex flex-col lg:flex-row'>
        <div className='relative w-full lg:w-48 h-48'>
          <Image
            src={images.edges[0].node.originalSrc}
            alt={images.edges[0].node.altText}
            width={186}
            height={186}
            objectFit='cover'
            layout='fill'
          />
        </div>

        <div className='lg:ml-4 mt-4 lg:mt-0'>
          <h1 className='font-bold text-lg text-center lg:text-left w-80'>
            {title}
          </h1>
          <div>
            <h2 className='font-bold mt-4'>DETAILS:</h2>
            <div className='text-gray-3'>
              <p className=''>Cotton/polyester</p>
              <p>Machine washable</p>
              <p>Imported</p>
            </div>
          </div>
          <span className='text-xl font-bold inline-block mt-4'>
            ₣{priceRange.maxVariantPrice.amount}
          </span>
        </div>
      </div>

      <Quantity quantity={cartItem.selectedQuantity} />
      <Size data={cartItem.data.options[0]} selected={cartItem.selectedSize} />
      <Color
        data={['#808080', '#FF0000', '#000000', '#FFFF00']}
        color={cartItem.selectedColor}
      />

      <button className='hidden lg:inline-block'>
        <Image src={BinLogo} alt='Bin Logo' />
      </button>
    </div>
  );
};

export default CartItem;
