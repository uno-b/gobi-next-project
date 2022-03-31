import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import client from '../../apollo-client';
import Sale from '../../components/Sale';
import { getCollection } from '../../graphql/queries';

import LeftArrow from '../../assets/logos/left-arrow.svg';
import RightArrow from '../../assets/logos/right-arrow.svg';

const Sales = ({ data, page }) => {
  const router = useRouter();

  console.log('data:', data);

  const {
    pageInfo: { hasNextPage, hasPrevPage },
  } = data.collections.edges[0].node.products;
  const products = data.collections.edges[0].node.products.edges;
  const handle = data.collections.edges[0].node.handle;

  return (
    <div className='max-w-[80%] mx-auto mt-24'>
      <div className='flex flex-col-reverse lg:flex-row'>
        <div>
          <Sale data={products[0 + (page - 1) * 6]} color='text-yellow-2' />
          <Sale data={products[1 + (page - 1) * 6]} color='text-cyan' />
        </div>
        <Sale
          data={products[2 + (page - 1) * 6]}
          color='text-white'
          large
          bottom
        />
        <div className=''>
          <div className='lg:ml-28'>
            <h1 className='text-5xl font-bold my-6 max-w-sm'>SALES TODAY</h1>
            <div className='max-w-[485px]'>
              Here you can find the best deals offered by the Gobi team.
            </div>

            <div className='mt-6'>
              <button
                onClick={() =>
                  router.push({
                    pathname: `${handle}`,
                    query: {
                      page: parseInt(page) > 1 ? parseInt(page) - 1 : 1,
                    },
                  })
                }
                className='p-4 border-[2px]'
              >
                <Image src={LeftArrow} alt='Left Arrow' />
              </button>
              {hasNextPage && (
                <button
                  onClick={() =>
                    router.push({
                      pathname: `${handle}`,
                      query: { page: parseInt(page) + 1 },
                    })
                  }
                  className='p-4 border-[2px] border-l-0'
                >
                  <Image src={RightArrow} alt='Right Arrow' />
                </button>
              )}
            </div>
          </div>

          <div className='flex flex-col lg:flex-row mt-20'>
            <Sale
              data={products[3 + (page - 1) * 6]}
              color='text-yellow-2'
              bottom
            />
            <Sale
              data={products[4 + (page - 1) * 6]}
              color='text-cyan'
              bottom
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { page } = context.query;

  const handleItems = context.params?.collectionHandle?.split('?');

  const { data } = await client.query({
    query: getCollection,
    variables: {
      query: 'title:sale',
      firstProducts: page ? page * 6 : 6,
    },
  });

  return {
    props: {
      data: data,
      page: page ? page : 1,
    },
  };
}

export default Sales;
