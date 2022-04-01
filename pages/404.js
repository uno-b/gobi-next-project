import Image from 'next/image';
import Head from 'next/head';

import { BackButton } from '../components/Button';

import BG from '../assets/images/404.png';

const ErrorPage = () => {
  return (
    <div>
      <Head>
        <title>{`404 Not Found | ${process.env.NEXT_PUBLIC_SITE_NAME}`}</title>
        <meta
          name='description'
          content="The page you are looking for doesn't exist."
        />
      </Head>
      <div className='w-full h-full'>
        <Image
          src={BG}
          alt={'Background'}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          className=''
        />
        <div className='absolute top-[60%] lg:top-3/4 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex flex-col justify-center items-center px-4'>
          <h1 className='font-bold text-4xl lg:text-5xl mb-7 text-center'>
            THIS PAGE IS LOST
          </h1>
          <div className='mb-6 lg:w-[400px] text-center'>
            The page you are looking for isn’t availlable right now. Please
            return to Home Page
          </div>
          <BackButton>back</BackButton>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
