import React, { useState } from 'react';
import Image from 'next/image';

import Input from '../components/Input';
import { Button } from '../components/Button';
import ToggleBtn from '../components/ToggleBtn';

import BGHalf from '../assets/images/bg-half.png';
import UserLogo from '../assets/logos/user.svg';
import EmailLogo from '../assets/logos/email.svg';
import PasswordLogo from '../assets/logos/password.svg';

const SignUp = () => {
  const [isAgreed, setIsAgreed] = useState();

  return (
    <div className='flex flex-row justify-between'>
      <div className='relative w-1/2 h-screen bg-black'>
        <Image
          src={BGHalf}
          alt='Background'
          layout='fill'
          objectPosition='center'
          objectFit='cover'
        />
      </div>
      <div className='relative w-1/2'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[487px]'>
          <h1 className='text-5xl font-bold tracking-widest'>SIGN UP</h1>
          <div className='mt-6 mb-12'>
            Already have an account?{' '}
            <span className='font-bold underline'>Sign In</span>
          </div>

          <Input label='your full name' icon={UserLogo} />
          <Input label='your email' icon={EmailLogo} />
          <Input label='your password' icon={PasswordLogo} />

          <Button className=''>SIGN UP</Button>

          <div className='flex justify-between items-center mt-12'>
            <div>Terms and Conditions</div>
            <ToggleBtn isOn={isAgreed} setIsOn={setIsAgreed} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
