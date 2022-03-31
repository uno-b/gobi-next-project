import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import { BackButton, Button } from '../components/Button';
import Input from '../components/Input';
import ToggleBtn from '../components/ToggleBtn';

import UserLogo from '../assets/logos/user.svg';
import DateLogo from '../assets/logos/date.svg';
import FilesLogo from '../assets/logos/files.svg';
import CardLogo from '../assets/logos/card.svg';
import EmailLogo from '../assets/logos/email.svg';
import LocationLogo from '../assets/logos/location.svg';

const Checkout = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <div className='w-[80%] mx-auto mt-40'>
      <BackButton>back</BackButton>
      <h1 className='text-5xl font-bold my-6'>CHECKOUT</h1>

      <div className='flex flex-col lg:flex-row justify-between items-center'>
        {/* Left side */}
        <div className='lg:w-1/2'>
          <div className='flex flex-col lg:flex-row'>
            <Input icon={UserLogo} label='first name' important />
            <Input icon={UserLogo} label='last name' important />
          </div>

          <h2 className='font-bold mb-8'>payment info</h2>

          <div className='flex flex-col lg:flex-row'>
            <Input icon={UserLogo} label='first name' important />
            <Input icon={CardLogo} label='last name' important />
          </div>
          <div className='flex'>
            <Input icon={DateLogo} label='first name' type='Date' important />
            <Input icon={CardLogo} label='last name' important />
          </div>
        </div>

        {/* Right side */}
        <div className='w-full lg:w-1/2'>
          <h2 className='font-bold mb-8'>billing address</h2>

          <div className='flex flex-col lg:flex-row'>
            <Input icon={LocationLogo} label='country' important />
            <Input icon={LocationLogo} label='city' important />
          </div>
          <div className='flex flex-col lg:flex-row'>
            <Input icon={LocationLogo} label='state' important />
            <Input icon={LocationLogo} label='address' important />
          </div>
          <div className='flex flex-col lg:flex-row'>
            <Input icon={FilesLogo} label='zip code' important />
            <Input icon={EmailLogo} label='contact e-mail' important />
          </div>
        </div>
      </div>

      <div className='flex items-center my-12'>
        <p className='mr-auto lg:mr-72'>Save Billing info for later</p>
        <ToggleBtn isOn={isToggleOn} setIsOn={setIsToggleOn} />
      </div>
      <Button className='my-12'>PAY NOW</Button>
    </div>
  );
};

export default Checkout;
