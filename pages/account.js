import React, { useState } from 'react';
import Image from 'next/image';

import { BackButton } from '../components/Button';
import { MenuItems, TAB_STATES } from '../components/Account/MenuItems';
import ChevronRight from '../assets/logos/chevron-right.svg';
import DemoProPic from '../assets/images/demo-pro-pic.png';

const Account = () => {
  const [tabState, setTabState] = useState(TAB_STATES.ORDERS);

  return (
    <div className='flex w-[80%] mx-auto mt-40'>
      <div>
        <BackButton className='mb-6'>back</BackButton>

        <h1 className='font-bold text-5xl mb-6'>MY ACCOUNT</h1>

        <div className='flex mb-10'>
          <Image src={DemoProPic} alt='Profile Picture' />
          <div className='font-bold ml-6'>
            <div>Hi,</div>
            <div>Unknown person</div>
          </div>
        </div>

        <ul>
          {MenuItems.map((item) => (
            <li key={item.id}>
              <button
                className='flex items-center w-96 h-20'
                onClick={() => setTabState(item.tabState)}
              >
                <div className='flex items-center w-6 h-full'>{item.logo}</div>
                <div className='ml-4 underline'>{item.name}</div>
                <div className='ml-auto'>
                  <Image src={ChevronRight} alt='Chevron Right' />
                </div>
              </button>
              <hr className='w-full' />
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full ml-32 mt-14'>
        {MenuItems.map((item) => {
          return tabState === item.tabState && item.component;
        })}
      </div>
    </div>
  );
};

export default Account;
