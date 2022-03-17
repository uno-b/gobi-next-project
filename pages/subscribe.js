import React from 'react';
import Image from 'next/image';

import Input from '../components/Input';
import { Button } from '../components/Button';

import BGHalf from '../assets/images/subscribe.png';
import EmailLogo from '../assets/logos/email.svg';

const Subscribe = () => {
  return (
    <div className='w-full h-full flex flex-row justify-between'>
      <div className='relative w-1/2'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[487px]'>
          <Button noArrow>back</Button>
          <h1 className='text-5xl font-bold tracking-widest'>SUBSCRIBE</h1>
          <div className='mt-6 mb-12'>Get the latest news from our site</div>

          <Input label='your email' icon={EmailLogo} />

          <Button className=''>SUBSCRIBE</Button>
        </div>
      </div>
      <div className='relative w-1/2 h-screen'>
        <Image
          src={BGHalf}
          alt='Background'
          layout='fill'
          objectPosition='center'
          objectFit='cover'
        />
      </div>
    </div>
  );
};

export default Subscribe;
