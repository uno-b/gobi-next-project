import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useLazyQuery } from '@apollo/client';

import Orders from '../components/Account/Orders';
import Favorites from '../components/Account/Favorites';
import Gift from '../components/Account/Gift';
import Settings from '../components/Account/Settings';
import Help from '../components/Account/Help';

import { BackButton } from '../components/Button';
import { MenuItems, TAB_STATES } from '../components/Account/MenuItems';
import { getCustomerData } from '../graphql/queries';
import { getCookie, setCookie } from '../helper/functions';

import ChevronRight from '../assets/logos/chevron-right.svg';
import DemoProPic from '../assets/images/demo-pro-pic.png';

const Account = () => {
  const router = useRouter();

  const [token, setToken] = useState(null);
  const [tabState, setTabState] = useState(TAB_STATES.ORDERS);
  const [customerData, setCustomerData] = useState(null);
  const [timeoutObj, setTimeoutObj] = useState(null);

  const [getCustomerFunc, { loading, data, error }] =
    useLazyQuery(getCustomerData);

  // Runs at the beginning
  useEffect(() => {
    // Set a timeout for redirecting to the sign-in page
    setTimeoutObj(
      setTimeout(() => {
        router.push('/sign-in');
      }, 1000)
    );

    // Get the token at the beginning
    const token = getCookie('token');
    setToken(token);

    getCustomerFunc({
      variables: {
        customerAccessToken: token,
      },
    });
  }, [router, getCustomerFunc]);

  // Set the customer data
  useEffect(() => {
    if (data?.customer) {
      setCustomerData(data);
      clearTimeout(timeoutObj);
    }
  }, [data, timeoutObj]);

  const handleLogOut = () => {
    // Remove the stored tokens
    setCookie('token', null, 0);
    window.sessionStorage.removeItem('token');

    router.push('/');
  };

  return token ? (
    <div className='flex flex-col lg:flex-row lg:w-[80%] mx-4 lg:mx-auto mt-40'>
      <div>
        <BackButton className='mb-6'>back</BackButton>

        <h1 className='font-bold text-5xl mb-6'>MY ACCOUNT</h1>

        <div className='flex mb-10'>
          <Image src={DemoProPic} alt='Profile Picture' />
          <div className='font-bold ml-6'>
            <div>Hi,</div>
            <div>{`${customerData?.customer?.firstName} ${customerData?.customer?.lastName}`}</div>
          </div>
        </div>

        <ul>
          {MenuItems.map((item) => (
            <li key={item.id}>
              <button
                className='flex items-center w-full lg:w-96 h-20 group'
                onClick={() => setTabState(item.tabState)}
              >
                <div
                  className={`flex items-center w-6 h-0 bg-yellow transition-all group-hover:h-full`}
                >
                  <div className='mx-auto'>{item.logo}</div>
                </div>
                <div
                  className={`ml-4 ${
                    item.tabState === tabState
                      ? 'line-through font-bold'
                      : 'underline'
                  }`}
                >
                  {item.name}
                </div>
                <div className='ml-auto'>
                  <Image src={ChevronRight} alt='Chevron Right' />
                </div>
              </button>
              <hr className='w-full' />
            </li>
          ))}
          <li>
            <button
              className='flex items-center w-full lg:w-96 h-20 group'
              onClick={handleLogOut}
            >
              <div
                className={`flex items-center w-6 h-0 bg-yellow transition-all group-hover:h-full rotate-180`}
              >
                <div className='mx-auto'>
                  <Image src={ChevronRight} alt='Chevron' />
                </div>
              </div>
              <div className='ml-4 underline'>Log out</div>
              <div className='ml-auto'>
                <Image src={ChevronRight} alt='Chevron Right' />
              </div>
            </button>
            <hr className='w-full' />
          </li>
        </ul>
      </div>
      <div className='w-full lg:ml-32 mt-14'>
        {tabState === TAB_STATES.ORDERS && <Orders />}
        {tabState === TAB_STATES.FAVORITES && <Favorites />}
        {tabState === TAB_STATES.GIFT && <Gift />}
        {tabState === TAB_STATES.SETTINGS && (
          <Settings
            customerData={customerData}
            setCustomerData={setCustomerData}
          />
        )}
        {tabState === TAB_STATES.HELP && <Help />}
      </div>
    </div>
  ) : (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      No user data found
    </div>
  );
};

export default Account;
