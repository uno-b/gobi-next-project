import Image from 'next/image';

import { BackButton } from '../components/Button';

import BG from '../assets/images/404.png';

const ErrorPage = () => {
  return (
    <div className='relative h-screen'>
      <Image
        src={BG}
        alt={'Background'}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        className=''
      />
      <div className='absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-5xl mb-7'>THIS PAGE IS LOST</h1>
        <div className='mb-6 w-[400px] text-center'>
          The page you are looking for isn’t availlable right now. Please return
          to Home Page
        </div>
        <BackButton>back</BackButton>
      </div>
    </div>
  );
};

export default ErrorPage;
