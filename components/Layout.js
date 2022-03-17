import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='text-black-primary'>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
