import React, { useState } from 'react';
import Image from 'next/image';
import 'react-datepicker/dist/react-datepicker.css';

import Input from '../../Input';
import { Button } from '../../Button';

import UserLogo from '../../../assets/logos/user.svg';
import EmailLogo from '../../../assets/logos/email.svg';
import DateLogo from '../../../assets/logos/date.svg';
import BinLogo from '../../../assets/logos/trash-bin.svg';
import Mastercard from '../../../assets/images/mastercard.png';

const Settings = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <div className='mb-12'>
        <h2 className='font-bold text-xl mb-2'>ACCOUNT SETTINGS</h2>
        <div>
          Feel free to edit any of your details below so your ASOS account is
          totally up to date.
        </div>
      </div>

      <div className='flex w-full'>
        <Input
          label='first name'
          icon={UserLogo}
          alt='User Logo'
          important
          className='w-full'
        />
        <Input
          label='last name'
          icon={UserLogo}
          alt='User Logo'
          important
          className='w-full ml-4'
        />
      </div>
      <div className='flex w-full'>
        <Input
          label='your email'
          icon={EmailLogo}
          alt='Email Logo'
          important
          className='w-full'
        />
        <Input
          label='date of birth'
          icon={DateLogo}
          alt='Date Logo'
          type='Date'
          important
          startDate={startDate}
          setStartDate={setStartDate}
          className='w-full ml-4'
        />
      </div>

      <div className='flex justify-between items-center mt-12'>
        <div className='flex items-center w-72'>
          <Image src={Mastercard} alt='Mastercard' width={42} height={42} />
          <div className='ml-6'>
            <div>Mastercard (5985)</div>
            <div>Exp: 11/20</div>
            <div>Yulia Shahoferova</div>
          </div>
          <button className='ml-auto'>
            <Image src={BinLogo} alt='Bin Logo' />
          </button>
        </div>
        <Button ghost className='w-72'>
          NEW PAYMENT METHOD
        </Button>
      </div>
    </div>
  );
};

export default Settings;
