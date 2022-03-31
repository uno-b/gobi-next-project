import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen text-black-1 font-helvetica'>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
