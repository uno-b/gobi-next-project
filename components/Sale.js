import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import USDLogo from '../assets/logos/usd-circle.svg';

const Text = ({ title, price }) => (
  <>
    <div className='text-lg font-bold mt-2 mb-1'>
      {title.length > 22 ? title.slice(0, 22) + '...' : title}
    </div>
    <div className='flex items-center mb-2'>
      <Image src={USDLogo} alt='USD Logo' />
      <div className='ml-2'>{price}</div>
    </div>
  </>
);

const Sale = ({ data, color, large, bottom }) => {
  console.log('sale data:', data);

  const { id, handle, title, images, priceRange, compareAtPriceRange } =
    data.node;

  const percentage =
    100 -
    (priceRange.maxVariantPrice.amount * 100) /
      compareAtPriceRange.maxVariantPrice.amount;

  return (
    <Link href={`/products/${handle}`} passHref key={id}>
      <div className='mr-4 mb-6 cursor-pointer'>
        {!bottom && (
          <Text title={title} price={`₣${priceRange.maxVariantPrice.amount}`} />
        )}
        <div
          className={`relative bg-red-300 w-72 h-72 ${large && 'lg:h-[588px]'}`}
        >
          <Image
            src={images.edges[0].node.src}
            alt={images.edges[0].node.altText}
            layout='fill'
            objectFit='cover'
          />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className={`font-bold text-7xl ${color}`}>-{percentage}%</div>
          </div>
        </div>
        {bottom && (
          <Text title={title} price={`₣${priceRange.maxVariantPrice.amount}`} />
        )}
      </div>
    </Link>
  );
};

export default Sale;
