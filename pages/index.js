import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button } from '../components/Button';
import BG from '../assets/images/bg.png';

const Homepage = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{`Homepage | ${process.env.NEXT_PUBLIC_SITE_NAME}`}</title>
        <meta
          name='description'
          content='Yolo is the leading destination for stylish clothes, everyday carry
          essentials & more.'
        />
      </Head>
      <div className='w-full h-full'>
        <Image
          src={BG}
          alt='Background Image'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='absolute top-[65%] lg:top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[350px] lg:w-[550px] text-center'>
        <div>
          Yolo is the leading destination for stylish clothes, everyday carry
          essentials & more
        </div>
        <Button
          ghost
          className='mx-auto mt-8'
          onClick={() => router.push('/sign-in')}
        >
          START NOW
        </Button>
      </div>
    </div>
  );
};

export default Homepage;
