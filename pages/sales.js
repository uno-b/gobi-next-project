import React from 'react';
import Image from 'next/image';

import Product from '../components/Product';

import LeftArrow from '../assets/logos/left-arrow.svg';
import RightArrow from '../assets/logos/right-arrow.svg';
import FilterLogo from '../assets/logos/sliders.svg';
import ChevronRight from '../assets/logos/chevron-right.svg';

const Sales = () => {
  return (
    <div className='max-w-[80%] mx-auto mt-24'>
      <div className='flex'>
        <button className='flex mb-11'>
          <div>
            <Image src={FilterLogo} alt='Filter Logo' />
          </div>
          <div className='font-bold ml-4'>FILTER</div>
        </button>
        <button className='flex ml-12'>
          <div className='font-bold ml-4'>SORT BY</div>
          <div className='ml-2'>
            <Image
              src={ChevronRight}
              alt='Chevron Down'
              className='rotate-90'
              width={14}
              height={14}
            />
          </div>
        </button>
      </div>
      <div className='flex'>
        <Product />
        <Product />
        <div className='ml-28'>
          <h1 className='text-5xl font-bold my-6 max-w-sm'>
            HOODIES FOR WOMEN
          </h1>
          <div className='max-w-[485px]'>
            Since the Yolo shop s team aims to help our readers to find the best
            value deals for them.
          </div>

          <div className='mt-6'>
            <button className='p-4 border-[2px]'>
              <Image src={LeftArrow} alt='Left Arrow' />
            </button>
            <button className='p-4 border-[2px] border-l-0'>
              <Image src={RightArrow} alt='Right Arrow' />
            </button>
          </div>
        </div>
      </div>

      <div className='flex'>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Sales;
