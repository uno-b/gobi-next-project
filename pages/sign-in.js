import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useMutation } from '@apollo/client';

import Input from '../components/Input';
import { Button } from '../components/Button';
import { signIn } from '../graphql/mutations';
import { setCookie, joinErrorMessagesArray } from '../helper/functions';

import BGHalf from '../assets/images/bg-half.png';
import EmailLogo from '../assets/logos/email.svg';
import PasswordLogo from '../assets/logos/password.svg';
import FacebookLogo from '../assets/logos/fb-black.svg';
import GoogleLogo from '../assets/logos/google-black.svg';
import InstagramLogo from '../assets/logos/insta-black.svg';
import TwitterLogo from '../assets/logos/twitter-black.svg';

const SignIn = () => {
  const [signInFields, setSignInFields] = useState({
    email: '',
    password: '',
    staySignedIn: true,
  });

  const [
    signInFunc,
    { loading: signInLoading, data: signInData, error: signInError },
  ] = useMutation(signIn);

  useEffect(() => {
    if (signInData) {
      if (
        signInData.customerAccessTokenCreate?.customerUserErrors?.length === 0
      ) {
        // If there are no errors
        const token =
          signInData.customerAccessTokenCreate?.customerAccessToken
            ?.accessToken;

        if (signInFields.staySignedIn) {
          // Save the retrieved token to cookies
          setCookie('token', token, 30);
          window.sessionStorage.setItem('token', token);
        } else {
          setCookie('token', null, 0);
          window.sessionStorage.setItem('token', token);
        }

        // Navigate to the account page after a successful sign-in.
        navigate('/account');
      } else {
        toast.error(
          joinErrorMessagesArray(
            signInData.customerAccessTokenCreate?.customerUserErrors
          )
        );
      }
    } else if (signInError) {
      toast.error(signInError);
    }
  }, [signInLoading, signInData, signInError]);

  const handleSignIn = (e) => {
    e.preventDefault();

    // Sign in
    signInFunc({
      variables: {
        input: {
          email: signInFields.email,
          password: signInFields.password,
        },
      },
    });

    console.log('Data:', {
      variables: {
        input: {
          email: signInFields.email,
          password: signInFields.password,
        },
      },
    });
  };

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

          <Input
            label='your email'
            icon={EmailLogo}
            value={signInFields.email}
            onChange={(e) =>
              setSignInFields({ ...signInFields, email: e.target.value })
            }
          />
          <Input
            label='your password'
            icon={PasswordLogo}
            value={signInFields.password}
            onChange={(e) =>
              setSignInFields({ ...signInFields, password: e.target.value })
            }
          />

          <Button onClick={handleSignIn}>SIGN IN</Button>

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
