import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { formatTitle } from '../helper/functions';

import DemoIMG from '../assets/images/product-image.png';
import USDLogo from '../assets/logos/usd-circle.svg';
import CartLogo from '../assets/logos/product-cart.svg';
import BinLogo from '../assets/logos/trash-bin.svg';

const Product = ({ data, favorite }) => {
  let id, handle, title, images, priceRange;

  if (data) {
    id = data.node.id;
    title = data.node.title;
    images = data.node.images;
    priceRange = data.node.priceRange;
  } else {
    id = 1;
    handle = 'demo';
    title = 'Puff-sleeve sweater';
    images = {
      edges: [
        {
          node: {
            src: DemoIMG,
          },
        },
      ],
    };
    priceRange = {
      maxVariantPrice: {
        amount: 49.99,
      },
    };
  }

  return (
    <Link href={`/products/${handle}`} key={id} passHref>
      <div className='mr-4 mb-6 cursor-pointer'>
        <div className='text-lg font-bold mb-1.5'>{formatTitle(title)}</div>
        <div className='flex items-center mb-2'>
          <Image src={USDLogo} alt='USD Logo' />
          <div className='ml-2'>₣{priceRange.maxVariantPrice.amount}</div>
        </div>
        <div
          className={`relative bg-red-300 w-72 h-72 ${favorite && 'w-56 h-80'}`}
        >
          <Image
            src={images.edges[0].node.src}
            alt={images.edges[0].node.altText}
            layout='fill'
            objectFit='cover'
          />
          <button className='absolute bottom-0 right-0 w-14 h-14 bg-black-1 flex justify-center items-center'>
            <Image src={CartLogo} alt='Cart Logo' />
          </button>
          {favorite && (
            <button className='absolute top-0 right-0 w-14 h-14 flex justify-center items-center'>
              <Image src={BinLogo} alt='Bin Logo' />
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Product;
