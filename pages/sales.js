import React from 'react';
import Image from 'next/image';

import Sale from '../components/Sale';

import LeftArrow from '../assets/logos/left-arrow.svg';
import RightArrow from '../assets/logos/right-arrow.svg';
import FilterLogo from '../assets/logos/sliders.svg';
import ChevronRight from '../assets/logos/chevron-right.svg';

const Sales = () => {
  return (
    <div className='max-w-[80%] mx-auto mt-24'>
      <div className='flex'>
        <div>
          <Sale sale={-25} color='text-yellow-2' />
          <Sale sale={-40} color='text-cyan' />
        </div>
        <Sale sale={-15} color='text-white' large bottom />
        <div className=''>
          <div className='ml-28'>
            <h1 className='text-5xl font-bold my-6 max-w-sm'>SALES TODAY</h1>
            <div className='max-w-[485px]'>
              This past week was Yolo Shop, where the giant site discounts over
              100,000 items heavily for 30 hours.
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

          <div className='flex mt-20'>
            <Sale sale={-5} color='text-yellow-2' bottom />
            <Sale sale={-7} color='text-cyan' bottom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
