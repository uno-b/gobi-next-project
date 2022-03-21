import React, { useState } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';

import Input from '../components/Input';
import { BackButton, Button } from '../components/Button';
import { validateEmail } from '../helper/functions';

import BGHalf from '../assets/images/subscribe.png';
import EmailLogo from '../assets/logos/email.svg';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error('please enter a valid email address.');
    } else {
      //moved subscribeEvent from here to row that is called on successful subscribe
      const xmlHttp = new XMLHttpRequest();
      xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4) {
          if (xmlHttp.status == 200) {
            let parser = JSON.parse(xmlHttp.responseText);

            // If successful
            if (!parser.error) {
              toast.success('Successfully subscribed');
              setEmail('');
            } else {
              // Already subscribed
              if (parser.message?.email) {
                toast.error(parser.message.email[0]);
              }
              // Error occurred
              else {
                toast.error('An error occurred');
              }
            }
          } else {
            toast.error('An error occurred');
          }
        }
      };

      xmlHttp.open(
        'get',
        'https://europe-west1-gobicashmere-sizechart.cloudfunctions.net/subscribeToStore?subscribingEmail=' +
          email +
          '&region=us',
        true
      ); // true for asynchronous
      xmlHttp.setRequestHeader(
        'Content-Type',
        'application/x-www-form-urlencoded'
      );
      xmlHttp.send();
    }
  };

  return (
    <div className='flex flex-row justify-between'>
      <div className='absolute w-[487px] ml-32 top-1/2 -translate-y-1/2'>
        <BackButton noArrow>back</BackButton>
        <h1 className='text-5xl font-bold tracking-widest mt-6'>SUBSCRIBE</h1>
        <div className='mt-6 mb-12'>Get the latest news from our site</div>

        <Input
          label='your email'
          icon={EmailLogo}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button onClick={onSubmit}>SUBSCRIBE</Button>
      </div>
      <div className='absolute left-1/2 w-1/2 h-screen'>
        <Image
          src={BGHalf}
          alt='Background'
          layout='fill'
          objectPosition='center'
          objectFit='cover'
          className=''
        />
      </div>
    </div>
  );
};

export default Subscribe;
