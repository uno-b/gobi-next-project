import React from 'react';
import Image from 'next/image';

import Input from '../components/Input';
import { Button, BackButton } from '../components/Button';

import BGHalf from '../assets/images/contact-us.png';
import LocationLogo from '../assets/logos/location.svg';
import PhoneLogo from '../assets/logos/phone.svg';
import EmailLogo from '../assets/logos/email.svg';

const Contact = () => {
  return (
    <div className='lg:absolute w-full h-full flex flex-col-reverse lg:flex-row justify-between'>
      <div className='relative lg:w-1/2'>
        <div className='lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[487px] my-8 mx-6'>
          <BackButton className='mb-6'>back</BackButton>
          <h1 className='text-5xl font-bold tracking-widest'>CONTACT US</h1>
          <div className='mt-6 mb-12'>
            Enter your number and we will call you back
          </div>

          <Input label='your phone number' icon={PhoneLogo} />

          <Button className=''>SEND</Button>

          <div className='mt-12'>
            <div className='flex mb-6'>
              <div className='flex justify-center items-center w-6 h-6 bg-yellow'>
                <Image
                  src={LocationLogo}
                  alt='Location Logo'
                  width={12.75}
                  height={16.5}
                />
              </div>
              <span className='ml-3.5'>1234 Center Dr #D123, Chicago</span>
            </div>
            <div className='flex mb-6'>
              <div className='flex justify-center items-center w-6 h-6 bg-yellow'>
                <Image
                  src={PhoneLogo}
                  alt='Phone Logo'
                  width={16.5}
                  height={16.5}
                />
              </div>
              <span className='ml-3.5'>+ 1 (234) 567 - 89 - 01</span>
            </div>
            <div className='flex mb-6'>
              <div className='flex justify-center items-center w-6 h-6 bg-yellow'>
                <Image
                  src={EmailLogo}
                  alt='Email Logo'
                  width={16.5}
                  height={12.38}
                />
              </div>
              <span className='ml-3.5'>yolo@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className='relative w-full lg:w-1/2 h-[500px] lg:h-screen'>
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

export default Contact;
