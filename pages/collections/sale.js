import React from 'react';
import Image from 'next/image';

import client from '../../apollo-client';
import Sale from '../../components/Sale';
import { getCollection } from '../../graphql/queries';

import LeftArrow from '../../assets/logos/left-arrow.svg';
import RightArrow from '../../assets/logos/right-arrow.svg';

const Sales = (props) => {
  console.log('data:', props.data);

  const products = props.data.collections.edges[0].node.products.edges;

  return (
    <div className='max-w-[80%] mx-auto mt-24'>
      <div className='flex'>
        <div>
          <Sale data={products[0]} color='text-yellow-2' />
          <Sale data={products[1]} color='text-cyan' />
        </div>
        <Sale data={products[2]} color='text-white' large bottom />
        <div className=''>
          <div className='ml-28'>
            <h1 className='text-5xl font-bold my-6 max-w-sm'>SALES TODAY</h1>
            <div className='max-w-[485px]'>
              Here you can find the best deals offered by the Gobi team.
            </div>

            <div className='mt-6'>
              <button className='p-4 border-[2px]'>
                <Image src={LeftArrow} alt='Left Arrow' />
              </button>
              <button className='p-4 border-[2px] border-l-0'>
                <Image src={RightArrow} alt='Right Arrow' />
              </button>
            </div>
          </div>

          <div className='flex mt-20'>
            <Sale data={products[3]} color='text-yellow-2' bottom />
            <Sale data={products[4]} color='text-cyan' bottom />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: getCollection,
    variables: {
      query: 'title:sale',
      firstProducts: 5,
    },
  });

  return {
    props: {
      data: data,
    },
  };
}

export default Sales;
