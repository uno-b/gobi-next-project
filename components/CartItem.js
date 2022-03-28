import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Quantity from './Quantity';
import Size from './Size';
import Color from './Color';
import { formatTitle } from '../helper/functions';

import ProductPic from '../assets/images/product-pic.png';
import BinLogo from '../assets/logos/trash-bin.svg';

const CartItem = ({ cartItem }) => {
  const { title, images, priceRange } = cartItem.data;

  useEffect(() => {
    console.log('data:', cartItem);
  }, [cartItem]);

  return (
    <div className='flex items-center justify-between'>
      <div className='flex'>
        <div>
          <Image
            src={images.edges[0].node.originalSrc}
            alt={images.edges[0].node.altText}
            width={186}
            height={186}
            objectFit='cover'
          />
        </div>

        <div className='ml-4'>
          <h1 className='font-bold text-lg'>{title}</h1>
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

      <button>
        <Image src={BinLogo} alt='Bin Logo' />
      </button>
    </div>
  );
};

export default CartItem;
