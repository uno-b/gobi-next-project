import React, { useState } from 'react';
import Image from 'next/image';

import MenuButton from './MenuButton';
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
        <ul className='flex flex-row w-[29rem] justify-between font-bold'>
          <li>
            <button className='font-bold'>WOMEN</button>
          </li>
          <li>
            <button className='font-bold'>MEN</button>
          </li>
          <li>
            <button className='font-bold'>KIDS</button>
          </li>
          <li>
            <button className='font-bold'>GIFTS</button>
          </li>
        </ul>
      </div>
      <ul className='flex flex-row w-32 justify-between'>
        <li>
          <button>
            <Image src={SearchLogo} alt='Search' width={22} height={22} />
          </button>
        </li>
        <li>
          <button>
            <Image src={CartLogo} alt='Shopping Cart' width={27} height={24} />
          </button>
        </li>
        <li>
          <button>
            <Image src={UserLogo} alt='User' width={19} height={22} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
