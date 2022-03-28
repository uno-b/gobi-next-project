import React from 'react';
import Image from 'next/image';

import MinusLogo from '../assets/logos/minus.svg';
import PlusLogo from '../assets/logos/plus.svg';

const Quantity = ({ quantity, setQuantity }) => {
  return (
    <div>
      <span className='font-bold'>QTY</span>
      <div className='mt-2.5 flex items-center'>
        <button
          onClick={() =>
            setQuantity && setQuantity(quantity > 1 ? quantity - 1 : quantity)
          }
          className='w-[30px] h-[30px] border border-gray rounded-full flex justify-center items-center'
        >
          <Image src={MinusLogo} alt='Minus Logo' />
        </button>
        <span className='mx-2.5'>{quantity}</span>
        <button
          onClick={() => setQuantity && setQuantity(quantity + 1)}
          className='w-[30px] h-[30px] border border-gray rounded-full flex justify-center items-center'
        >
          <Image src={PlusLogo} alt='Plus Logo' />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
