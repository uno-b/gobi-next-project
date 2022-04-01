import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';

import CartItem from '../components/CartItem';
import { Button } from '../components/Button';

import Line from '../assets/logos/line.svg';
import CheckoutLogo from '../assets/logos/checkout.svg';
import CartLogo from '../assets/logos/shopping-cart.svg';

const Cart = () => {
  const router = useRouter();

  const [cartItems, setCartItems] = useState(null);

  useState(() => {
    const fetchedCartData = JSON.parse(
      typeof window !== 'undefined' && window.localStorage.getItem('cart')
    );

    setCartItems(fetchedCartData);
  }, [typeof window]);

  return (
    <div className='max-w-[80%] mx-auto mt-24 mb-10'>
      <Head>
        <title>{`Cart | ${process.env.NEXT_PUBLIC_SITE_NAME}`}</title>
        <meta name='description' content='Here you can manage your cart.' />
      </Head>
      {/* List of items */}
      <div>
        {cartItems ? (
          cartItems.map((e, i) => (
            <div key={i}>
              <CartItem cartItem={e} />
              <hr className='border border-gray my-8' />
            </div>
          ))
        ) : (
          <div>No items available.</div>
        )}
      </div>

      {/* Order Summary */}
      <div className='w-80 mx-auto'>
        <div className='flex w-full justify-between'>
          <Image src={Line} width={50} height={2} alt='Line' />
          <span className='font-bold text-xl'>ORDER SUMMARY</span>
          <Image src={Line} width={50} height={2} alt='Line' />
        </div>
      </div>

      <div className='w-full lg:w-[600px] my-6 mx-auto flex flex-col lg:flex-row'>
        <table className='lg:w-1/2'>
          <tbody>
            <tr>
              <td>Discount</td>
              <td className='text-right lg:text-left'>$0.00</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td className='text-right lg:text-left'>TBD</td>
            </tr>
            <tr>
              <td>Total</td>
              <td className='text-right lg:text-left'>$56.90</td>
            </tr>
          </tbody>
        </table>
        <p className='lg:w-1/2 mt-6 lg:mt-0'>
          You`re <span className='font-bold'>$34.01</span> away from shipping!
          Spend $75 and upgrade to express shipping for only $3.99! Want{' '}
          <span className='font-bold underline'>free shipping</span>
        </p>
      </div>

      <div className='flex flex-col lg:flex-row mx-auto w-full lg:w-96 justify-center items-center lg:justify-between'>
        <Button
          ghost
          noArrow
          leftLogo={CartLogo}
          onClick={() => router.push('/')}
        >
          GO SHOPPING
        </Button>
        <Button
          leftLogo={CheckoutLogo}
          noArrow
          bgColor='bg-black-1'
          onClick={() => router.push('/checkout')}
          className='text-white mt-4 lg:mt-0'
        >
          CHECKOUT
        </Button>
      </div>
    </div>
  );
};

export default Cart;
