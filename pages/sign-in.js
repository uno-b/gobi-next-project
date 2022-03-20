import React from 'react';
import Image from 'next/image';

import Input from '../components/Input';
import { Button } from '../components/Button';

import BGHalf from '../assets/images/bg-half.png';
import EmailLogo from '../assets/logos/email.svg';
import PasswordLogo from '../assets/logos/password.svg';
import FacebookLogo from '../assets/logos/fb-black.svg';
import GoogleLogo from '../assets/logos/google-black.svg';
import InstagramLogo from '../assets/logos/insta-black.svg';
import TwitterLogo from '../assets/logos/twitter-black.svg';

const SignIn = () => {
  return (
    <div className='w-full h-full flex flex-row justify-between'>
      <div className='absolute w-1/2 h-screen'>
        <Image
          src={BGHalf}
          alt='Background'
          layout='fill'
          objectPosition='center'
          objectFit='cover'
        />
      </div>
      <div className='mx-auto'>
        <div className='w-[487px] absolute top-1/2 -translate-y-1/2 ml-28'>
          <h1 className='text-5xl font-bold tracking-widest'>SIGN IN</h1>
          <div className='mt-6 mb-12'>
            Don&apos;t have an account?{' '}
            <span className='font-bold underline'>Sign Up</span>
          </div>

          <Input label='your email' icon={EmailLogo} />
          <Input label='your password' icon={PasswordLogo} />

          <Button className=''>SIGN IN</Button>

          <div className='mt-12'>
            <div className='mb-6'>Or Sign In with</div>
            <div className='flex w-44 justify-between items-center'>
              <Image src={FacebookLogo} alt='Facebook Logo' />
              <Image src={GoogleLogo} alt='Google Plus Logo' />
              <Image src={InstagramLogo} alt='Instagram Logo' />
              <Image src={TwitterLogo} alt='Twitter Logo' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
