import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import MenuButton from './HamburgerButton';
import MenuItems from './MenuItems';

import SearchLogo from '../../assets/logos/search.svg';
import CartLogo from '../../assets/logos/shopping-cart.svg';
import UserLogo from '../../assets/logos/user.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='absolute z-10 top-0 left-0 right-0 flex flex-row justify-between max-w-[80%] mx-auto items-center'>
      <MenuButton
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      <div>
        <ul className='hidden lg:flex flex-row lg:w-[29rem] justify-between font-bold'>
          {MenuItems.map((item) => (
            <li key={item.name} className='cursor-pointer'>
              <Link
                className='font-bold'
                href={`/collections/${item.handle}`}
                passHref
              >
                <div className="inline-block relative before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:w-0 before:right-0 before:h-[2px] before:bg-black-1 before:transition-all hover:before:w-full">
                  {item.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className='flex flex-row w-32 justify-between'>
        <li className='cursor-pointer'>
          <button>
            <Image src={SearchLogo} alt='Search' width={22} height={22} />
          </button>
        </li>
        <li className='cursor-pointer'>
          <Link href='/cart' passHref>
            <Image src={CartLogo} alt='Shopping Cart' width={27} height={24} />
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link href='/account' passHref>
            <Image src={UserLogo} alt='User' width={19} height={22} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
