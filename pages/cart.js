import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import CartItem from '../components/CartItem';
import { Button } from '../components/Button';

import Line from '../assets/logos/line.svg';
import CheckoutLogo from '../assets/logos/checkout.svg';
import CartLogo from '../assets/logos/shopping-cart.svg';

const Cart = () => {
  const [cartItems, setCartItems] = useState(null);

  useState(() => {
    const fetchedCartData = JSON.parse(
      typeof window !== 'undefined' && window.localStorage.getItem('cart')
    );

    setCartItems(fetchedCartData);
  }, [typeof window]);

  return (
    <div className='max-w-[80%] mx-auto mt-24 mb-10'>
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

      <div className='w-[600px] my-6 mx-auto flex'>
        <table className='w-1/2'>
          <tbody>
            <tr>
              <td>Discount</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>TBD</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$56.90</td>
            </tr>
          </tbody>
        </table>
        <p className='w-1/2'>
          You`re <span className='font-bold'>$34.01</span> away from shipping!
          Spend $75 and upgrade to express shipping for only $3.99! Want{' '}
          <span className='font-bold underline'>free shipping</span>
        </p>
      </div>

      <div className='flex mx-auto w-96 justify-between'>
        <Button ghost noArrow leftLogo={CartLogo}>
          GO SHOPPING
        </Button>
        <Button
          leftLogo={CheckoutLogo}
          noArrow
          bgColor='bg-black-1'
          className='text-white'
        >
          CHECKOUT
        </Button>
      </div>
    </div>
  );
};

export default Cart;
