import React from 'react';
import Image from 'next/image';
import { Button } from '../../Button';

import DemoImg from '../../../assets/images/rectangle-demo.png';

const Orders = () => {
  return (
    <div>
      <div className='mb-12'>
        <h2 className='font-bold text-xl mb-2'>MY ORDERS</h2>
        <div>Displaying all orders</div>
      </div>

      {/* ORDER ITEM */}
      {[...Array(2)].map((e, i) => (
        <div className='mb-8 p-6 bg-gray-light' key={i}>
          <div className='w-full flex justify-between mb-4'>
            <h3 className='font-bold text-lg'>It&apos;s Delivered!</h3>
            <div>
              <h3 className='text-gray-dark font-bold'>ORDER NO:</h3>
              <div>12345678912</div>
            </div>
            <div>
              <h3 className='text-gray-dark font-bold'>SHIPPED DATE:</h3>
              <div>21 / 04 / 2020</div>
            </div>
          </div>

          <div className='flex justify-between'>
            <div className='flex'>
              {[...Array(3)].map((e, i) => {
                return (
                  <div className='mr-4' key={i}>
                    <Image src={DemoImg} alt='Demo' />
                  </div>
                );
              })}
            </div>
            <div>
              <Button ghost className='mb-2'>
                VIEW ORDER
              </Button>
              <Button ghost>TRACK ORDER</Button>
            </div>
          </div>
        </div>
      ))}
      {/* ORDER ITEM */}

      <div></div>
    </div>
  );
};

export default Orders;
