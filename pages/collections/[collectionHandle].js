import React from 'react';
import Image from 'next/image';

import client from '../../apollo-client';
import Product from '../../components/Product';
import { BackButton } from '../../components/Button';
import { getCollection } from '../../graphql/queries';
import { collectionList } from '../../components/Collection/CollectionList';

import LeftArrow from '../../assets/logos/left-arrow.svg';
import RightArrow from '../../assets/logos/right-arrow.svg';
import FilterLogo from '../../assets/logos/sliders.svg';
import ChevronRight from '../../assets/logos/chevron-right.svg';

const Collection = (props) => {
  console.log('data:', props.data);

  const { title } = props.data.collections.edges[0].node;

  const products = props.data.collections.edges[0].node.products.edges;

  return (
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
      <div className='flex'>
        <Product data={products[0]} />
        <Product data={products[1]} />
        <div className='ml-28'>
          <BackButton>back</BackButton>
          <h1 className='text-5xl font-bold my-6 max-w-sm'>
            {title.toUpperCase()}
          </h1>
          <div className='max-w-[485px]'>
            Since the Gobi team aims to help our readers to find the best value
            deals for them.
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
      </div>

      <div className='flex'>
        <Product data={products[2]} />
        <Product data={products[3]} />
        <Product data={products[4]} />
        <Product data={products[5]} />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  // TODO: 404 page if the collection is not found from the 'CollectionList' file
  if (!collectionList[context.params.collectionHandle]?.searchTitle) {
    return {
      notFound: true,
    };
  }

  const { data } = await client.query({
    query: getCollection,
    variables: {
      query:
        'title:' + collectionList[context.params.collectionHandle]?.searchTitle,
      firstProducts: 6,
    },
  });

  return {
    props: {
      data: data,
    },
  };
}

export default Collection;
