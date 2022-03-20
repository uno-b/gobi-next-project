import React from 'react';
import Image from 'next/image';

import TicketLogo from '../assets/logos/ticket.svg';

const Ticket = ({ id }) => {
  return (
    <div className='bg-black-primary w-[72px] h-6 flex justify-center items-center'>
      <div className='mr-2 translate-y-[2px]'>
        <Image src={TicketLogo} alt='Ticket Logo' width={16} height={16} />
      </div>
      <span className='text-white text-xs'>{id}</span>
    </div>
  );
};

export default Ticket;
