import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import { BackButton } from '../components/Button';

import BGHalf from '../assets/images/about-us.png';

const About = () => {
  return (
    <div className='lg:absolute w-full h-full flex flex-col lg:flex-row justify-between'>
      <Head>
        <title>{`About | ${process.env.NEXT_PUBLIC_SITE_NAME}`}</title>
        <meta
          name='description'
          content='Shopping for clothes online, whether you buy them from a big box
              store or a custom clothier, can get you great style at bargain
              prices.'
        />
      </Head>
      <div className='relative w-full h-[500px] lg:h-screen lg:w-1/2 mb-8'>
        <Image
          src={BGHalf}
          alt='Background'
          layout='fill'
          objectPosition='center'
          objectFit='cover'
        />
      </div>
      <div className='relative lg:w-1/2 mb-10'>
        <div className='lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[487px] mx-6'>
          <BackButton className='mb-6'>back</BackButton>
          <h1 className='text-5xl font-bold tracking-widest'>YOLO SHOP</h1>

          <div className='mt-7'>
            <p>
              Shopping for clothes online, whether you buy them from a big box
              store or a custom clothier, can get you great style at bargain
              prices.
            </p>
            <p className='mt-4'>
              Unfortunately it also comes with the worry that because
              you&apos;re buying a clothing item sight-unseen, it just
              won&apos;t fit and you&apos;ve wasted your money. Here&apos;s how
              to make sure that never, happens. I don&apos;t know too many
              people who love shopping for clothes. I don&apos;t mind it, but
              the ability to shop for clothes online makes it easy to improve
              your personal style and dress better, and take the stress and
              shame out of clothes buying. It&apos;s natural more and more
              people would want to do it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
