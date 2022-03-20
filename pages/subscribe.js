import React from 'react';
import Image from 'next/image';

import Input from '../components/Input';
import { BackButton, Button } from '../components/Button';

import BGHalf from '../assets/images/subscribe.png';
import EmailLogo from '../assets/logos/email.svg';

const Subscribe = () => {
  return (
    <div className='flex flex-row justify-between'>
      <div className='absolute w-[487px] ml-32 top-1/2 -translate-y-1/2'>
        <BackButton noArrow>back</BackButton>
        <h1 className='text-5xl font-bold tracking-widest mt-6'>SUBSCRIBE</h1>
        <div className='mt-6 mb-12'>Get the latest news from our site</div>

        <Input label='your email' icon={EmailLogo} />

        <Button className=''>SUBSCRIBE</Button>
      </div>
      <div className='absolute left-1/2 w-1/2 h-screen'>
        <Image
          src={BGHalf}
          alt='Background'
          layout='fill'
          objectPosition='center'
          objectFit='cover'
          className=''
        />
      </div>
    </div>
  );
};

export default Subscribe;
