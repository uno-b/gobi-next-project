import Image from 'next/image';

import HeartBoxLogo from '../../assets/logos/box-heart.svg';
import HeartLogo from '../../assets/logos/heart.svg';
import GiftLogo from '../../assets/logos/gift.svg';
import CogLogo from '../../assets/logos/cog.svg';
import QuestionLogo from '../../assets/logos/question-circle.svg';

export const TAB_STATES = {
  ORDERS: 'ORDERS',
  FAVORITES: 'FAVORITES',
  GIFT: 'GIFT',
  SETTINGS: 'SETTINGS',
  HELP: 'HELP',
};

export const MenuItems = [
  {
    id: 1,
    logo: <Image src={HeartBoxLogo} alt='Heart Box Logo' />,
    name: 'My Orders',
    tabState: TAB_STATES.ORDERS,
  },
  {
    id: 2,
    logo: <Image src={HeartLogo} alt='Heart Logo' />,
    name: 'My Favorites',
    tabState: TAB_STATES.FAVORITES,
  },
  {
    id: 3,
    logo: <Image src={GiftLogo} alt='Gift Logo' />,
    name: 'Gift Cards & Vouchers',
    tabState: TAB_STATES.GIFT,
  },
  {
    id: 4,
    logo: <Image src={CogLogo} alt='Cog Logo' />,
    name: 'Account Settings',
    tabState: TAB_STATES.SETTINGS,
  },
  {
    id: 5,
    logo: <Image src={QuestionLogo} alt='Question Logo' />,
    name: 'Need Help?',
    tabState: TAB_STATES.HELP,
  },
];
