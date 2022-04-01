import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import toast from 'react-hot-toast';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

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
import Link from 'next/link';

const SignIn = () => {
  const router = useRouter();

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
        toast.success('Success');

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
        router.push('/account');
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
  };

  return (
    <div className='w-full h-full flex flex-row justify-between'>
      <Head>
        <title>{`Sign-in | ${process.env.NEXT_PUBLIC_SITE_NAME}`}</title>
        <meta name='description' content='Sign-in page for the customer.' />
      </Head>
      <div className='lg:absolute lg:w-1/2 h-screen hidden lg:block'>
        <Image
          src={BGHalf}
          alt='Background'
          layout='fill'
          objectPosition='center'
          objectFit='cover'
        />
      </div>
      <div className='ml-6 lg:mx-auto'>
        <div className='lg:w-[487px] lg:absolute lg:top-1/2 lg:-translate-y-1/2 mt-32 mb-20 lg:my-0 lg:ml-28'>
          <h1 className='text-5xl font-bold tracking-widest'>SIGN IN</h1>
          <div className='mt-6 mb-12'>
            Don&apos;t have an account?{' '}
            <Link href='/sign-up' passHref>
              <span className='font-bold underline cursor-pointer'>
                Sign Up
              </span>
            </Link>
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
            password
          />

          <Button onClick={handleSignIn}>SIGN IN</Button>

          <div className='mt-12'>
            <div className='mb-6'>Or Sign In with</div>
            <div className='flex w-44 justify-between items-center'>
              <div className='transition-all hover:-translate-y-1'>
                <Image src={FacebookLogo} alt='Facebook Logo' />
              </div>
              <div className='transition-all hover:-translate-y-1'>
                <Image src={GoogleLogo} alt='Google Plus Logo' />
              </div>
              <div className='transition-all hover:-translate-y-1'>
                <Image src={InstagramLogo} alt='Instagram Logo' />
              </div>
              <div className='transition-all hover:-translate-y-1'>
                <Image src={TwitterLogo} alt='Twitter Logo' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
