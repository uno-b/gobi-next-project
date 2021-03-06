import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useMutation } from '@apollo/client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';

import Input from '../components/Input';
import { Button } from '../components/Button';
import ToggleBtn from '../components/ToggleBtn';
import { validatePassword, joinErrorMessagesArray } from '../helper/functions';
import { signUp } from '../graphql/mutations';

import BGHalf from '../assets/images/bg-half.png';
import UserLogo from '../assets/logos/user.svg';
import EmailLogo from '../assets/logos/email.svg';
import PasswordLogo from '../assets/logos/password.svg';
import Link from 'next/link';

const SignUp = () => {
  const router = useRouter();

  const [signUpFields, setSignUpFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    subscribe: true,
  });
  const [isAgreed, setIsAgreed] = useState();
  const [isValid, setIsValid] = useState(false);

  const [
    signUpFunc,
    { loading: signUpLoading, data: signUpData, error: signUpError },
  ] = useMutation(signUp);

  useEffect(() => {
    if (signUpData) {
      if (signUpData.customerCreate?.customerUserErrors?.length === 0) {
        toast.success('Success');

        router.push('/sign-in');
      } else {
        toast.error(
          joinErrorMessagesArray(signUpData.customerCreate?.customerUserErrors)
        );
      }
    }

    if (signUpError) {
      toast.error(signUpError);
    }
  }, [signUpLoading, signUpData, signUpError]);

  useEffect(() => {
    if (
      signUpFields.firstName !== '' &&
      signUpFields.lastName !== '' &&
      signUpFields.email !== ''
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [signUpFields]);

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!isAgreed) {
      toast.error('Terms and conditions is not agreed');
      return;
    }

    if (validatePassword(signUpFields.password)) {
      // Call sign up function if:
      // 1. The password and confirm password matches
      // 2. The password is valid
      signUpFunc({
        variables: {
          input: {
            firstName: signUpFields.firstName,
            lastName: signUpFields.lastName,
            email: signUpFields.email,
            password: signUpFields.password,
            acceptsMarketing: signUpFields.subscribe,
          },
        },
      });
    } else {
      // Custom error message to enforce a valid password
      toast.error(
        joinErrorMessagesArray([
          { message: 'Minimum eight characters' },
          { message: 'At least one uppercase letter' },
          { message: 'At least one lowercase letter' },
          { message: 'At least one number' },
          { message: 'At least one special character' },
        ])
      );
    }
  };

  return (
    <div className='flex flex-row justify-between'>
      <Head>
        <title>{`Sign-up | ${process.env.NEXT_PUBLIC_SITE_NAME}`}</title>
        <meta name='description' content='Sign-up page for the customer.' />
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
        <div className='lg:w-[487px] lg:absolute lg:top-1/2 lg:-translate-y-1/2 mt-32 mb-20 lg:ml-28 lg:my-0'>
          <h1 className='text-5xl font-bold tracking-widest'>SIGN UP</h1>
          <div className='mt-6 mb-12'>
            Already have an account?{' '}
            <Link href='/sign-in' passHref>
              <span className='font-bold underline cursor-pointer'>
                Sign In
              </span>
            </Link>
          </div>

          <Input
            label='your first name'
            icon={UserLogo}
            value={signUpFields.firstName}
            onChange={(e) =>
              setSignUpFields({ ...signUpFields, firstName: e.target.value })
            }
          />
          <Input
            label='your last name'
            icon={UserLogo}
            value={signUpFields.lastName}
            onChange={(e) =>
              setSignUpFields({ ...signUpFields, lastName: e.target.value })
            }
          />
          <Input
            label='your email'
            icon={EmailLogo}
            value={signUpFields.email}
            onChange={(e) =>
              setSignUpFields({ ...signUpFields, email: e.target.value })
            }
          />
          <Input
            label='your password'
            icon={PasswordLogo}
            value={signUpFields.password}
            onChange={(e) =>
              setSignUpFields({ ...signUpFields, password: e.target.value })
            }
            password
          />

          <Button onClick={handleSignUp}>SIGN UP</Button>

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
