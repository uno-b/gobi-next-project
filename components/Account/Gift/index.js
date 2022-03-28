import React from 'react';
import Image from 'next/image';

import VoucherLogo from '../../../assets/logos/voucher.svg';

import { Button } from '../../Button';

const Gift = () => {
  return (
    <div>
      <div className='mb-12'>
        <h2 className='font-bold text-xl mb-2'>GIFT CARDS & VOUCHERS</h2>
        <div>Your amount is ready to spend at the checkout</div>
      </div>

      <div className='border border-gray flex flex-col items-center py-8 px-20'>
        <div className='mb-8'>
          <Image src={VoucherLogo} alt='Voucher Logo' />
        </div>
        <h3 className='font-bold text-2xl mb-4'>You have no vouchers yet!</h3>
        <div className='text-center mb-8'>
          You currently have no vouchers linked to your account. Get started by
          redeeming or buying one now.
        </div>
        <Button className='w-72 mb-2'>ADD GIFT CARD / VOUCHER</Button>
        <Button bgColor='bg-black-1' className='text-white w-72' whiteArrow>
          BUY GIFT CARD / VOUCHER
        </Button>
      </div>
    </div>
  );
};

export default Gift;
