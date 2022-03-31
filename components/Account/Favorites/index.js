import React from 'react';

import Product from '../../Product';

const Favorites = () => {
  return (
    <div>
      <div className='mb-12'>
        <h2 className='font-bold text-xl mb-2'>MY FAVORITES</h2>
        <div>Your saved items</div>
      </div>

      <div className='flex flex-col lg:flex-row mb-8'>
        {[...Array(3)].map((e, i) => {
          return (
            <div key={i}>
              <Product favorite />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
