import React from 'react';
import Image from 'next/image';

import { Button } from '../components/Button';
import BG from '../assets/images/bg.png';

const index = () => {
  return (
    <div>
      <div className='w-full h-full'>
        <Image
          src={BG}
          alt='Background Image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/3'>
        <div>
          Yolo is the leading destination for stylish clothes, everyday carry
          essentials & more
        </div>
        <Button ghost className='mx-auto mt-8'>
          START NOW
        </Button>
      </div>
    </div>
  );
};

export default index;
