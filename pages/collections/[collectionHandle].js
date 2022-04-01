import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';

import client from '../../apollo-client';
import Product from '../../components/Product';
import { BackButton } from '../../components/Button';
import { getCollection } from '../../graphql/queries';
import { collectionList } from '../../components/Collection/CollectionList';

import LeftArrow from '../../assets/logos/left-arrow.svg';
import RightArrow from '../../assets/logos/right-arrow.svg';
import FilterLogo from '../../assets/logos/sliders.svg';
import ChevronRight from '../../assets/logos/chevron-right.svg';

const Collection = ({ data, page }) => {
  const router = useRouter();

  const { title, handle } = data.collections.edges[0].node;

  const {
    pageInfo: { hasNextPage, hasPrevPage },
  } = data.collections.edges[0].node.products;
  const products = data.collections.edges[0].node.products.edges;

  return (
    <>
      <Head>
        <title>{`${title} | ${process.env.NEXT_PUBLIC_SITE_NAME}`}</title>
        <meta
          name='description'
          content='Since the Gobi team aims to help our readers to find the best
              value deals for them.'
        />
      </Head>
      <div className='max-w-[80%] mx-auto mt-24'>
        <div className='flex'>
          <button className='flex mb-11'>
            <div>
              <Image src={FilterLogo} alt='Filter Logo' />
            </div>
            <div className='font-bold ml-4'>FILTER</div>
          </button>
          <button className='flex ml-12'>
            <div className='font-bold ml-4'>SORT BY</div>
            <div className='ml-2'>
              <Image
                src={ChevronRight}
                alt='Chevron Down'
                className='rotate-90'
                width={14}
                height={14}
              />
            </div>
          </button>
        </div>
        <div className='flex flex-col-reverse lg:flex-row'>
          <Product data={products[0 + (page - 1) * 6]} />
          <Product data={products[1 + (page - 1) * 6]} />
          <div className='lg:ml-28'>
            <BackButton>back</BackButton>
            <h1 className='text-5xl font-bold my-6 max-w-sm'>
              {title.toUpperCase()}
            </h1>
            <div className='max-w-[485px]'>
              Since the Gobi team aims to help our readers to find the best
              value deals for them.
            </div>

            <div className='my-6'>
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
        </div>

        <div className='flex flex-col lg:flex-row mb-8'>
          <Product data={products[2 + (page - 1) * 6]} />
          <Product data={products[3 + (page - 1) * 6]} />
          <Product data={products[4 + (page - 1) * 6]} />
          <Product data={products[5 + (page - 1) * 6]} />
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { page } = context.query;

  const handleItems = context.params.collectionHandle?.split('?');

  // TODO: 404 page if the collection is not found from the 'CollectionList' file
  if (!collectionList[handleItems[0]]?.searchTitle) {
    return {
      notFound: true,
    };
  }

  const { data } = await client.query({
    query: getCollection,
    variables: {
      query: 'title:' + collectionList[handleItems[0]]?.searchTitle,
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

export default Collection;
