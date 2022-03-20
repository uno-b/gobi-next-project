import React from 'react';
import Image from 'next/image';

import { BackButton, Button } from '../../components/Button';
import Ticket from '../../components/Ticket';
import Quantity from '../../components/Quantity';
import Size from '../../components/Size';
import Color from '../../components/Color';

import ProductPic from '../../assets/images/product-pic.png';
import LeftArrow from '../../assets/logos/left-arrow.svg';
import RightArrow from '../../assets/logos/right-arrow.svg';
import TruckLogo from '../../assets/logos/truck.svg';
import CartLogo from '../../assets/logos/shopping-cart.svg';

const Product = () => {
  return (
    <div className='flex max-w-[80%] mx-auto mt-36'>
      {/* Left side */}
      <div className='relative w-[588px] h-[620px] bg-black'>
        <Image
          src={ProductPic}
          alt='Product image'
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute bottom-6 left-1/2 -translate-x-1/2'>
          <button className='p-4 border-[2px]'>
            <Image src={LeftArrow} alt='Left Arrow' />
          </button>
          <button className='p-4 border-[2px] border-l-0'>
            <Image src={RightArrow} alt='Right Arrow' />
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className='w-[500px] ml-28'>
        <BackButton>back</BackButton>
        <h1 className='text-xl font-bold my-6'>GINGAM DENIM JAKET</h1>
        <Ticket id='12345' />
        <p className='my-8'>
          Take your love for mini skirts into fall with this fancy glen plaid
          number. This woven skirt features ruffle trim, a self-tie front
          design, and concealed back zip closure.
        </p>

        <div className='flex -translate-x-[205px] w-[1000px]'>
          {[...Array(4)].map((e, i) => (
            <div key={i} className='mr-2'>
              <Image
                src={ProductPic}
                alt={`Product pic ${i}`}
                width={166}
                height={95}
                objectFit='cover'
              />
            </div>
          ))}
        </div>

        <div className='mt-8 flex justify-between'>
          <Quantity />
          <Size />
          <Color />
        </div>

        <div className='flex items-center my-8'>
          <span className='text-xl font-bold'>$49.99</span>
          <Button rightLogo={CartLogo} className='ml-[72px]'>
            BUY
          </Button>
        </div>

        <hr className='border-gray' />

        <div className='flex mt-7'>
          <div>
            <Image src={TruckLogo} width={29} height={23.5} alt='Truck Logo' />
          </div>
          <div className='font-bold ml-4'>
            free shipping is available for orders over $100.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
