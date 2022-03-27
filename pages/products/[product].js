import React, { useState } from 'react';
import Image from 'next/image';

import { BackButton, Button } from '../../components/Button';
import Ticket from '../../components/Ticket';
import Quantity from '../../components/Quantity';
import Size from '../../components/Size';
import Color from '../../components/Color';
import client from '../../apollo-client';
import { getProductByHandle } from '../../graphql/queries';
import { formatDesc } from '../../helper/functions';

import LeftArrow from '../../assets/logos/left-arrow.svg';
import RightArrow from '../../assets/logos/right-arrow.svg';
import TruckLogo from '../../assets/logos/truck.svg';
import CartLogo from '../../assets/logos/shopping-cart.svg';

const Product = ({ data }) => {
  console.log('received data:', data);

  const [imageIndex, setImageIndex] = useState(0);

  const { id, title, description, options, priceRange, images } =
    data.productByHandle;

  const decodedId = atob(id).replace('gid://shopify/Product/', '');

  return (
    <div className='flex max-w-[80%] mx-auto mt-36'>
      {/* Left side */}
      <div className='relative w-[588px] h-[620px] bg-black'>
        <Image
          src={images.edges[imageIndex].node.originalSrc}
          alt={images.edges[imageIndex].node.altText}
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute bottom-6 left-1/2 -translate-x-1/2'>
          <button className='p-4 border-[2px]'>
            <Image src={LeftArrow} alt='Left Arrow' />
          </button>
          <button className='p-4 border-[2px] border-l-0'>
            <Image src={RightArrow} alt='Right Arrow' />
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className='w-[500px] ml-28'>
        <BackButton>back</BackButton>
        <h1 className='text-xl font-bold my-6'>{title}</h1>
        <Ticket id={decodedId.slice(0, 4) + '...'} />
        <p className='my-8'>{formatDesc(description)}</p>

        <div className='flex -translate-x-[205px] w-[1000px]'>
          {images.edges.map((e, i) => (
            <div
              key={i}
              className='mr-2 cursor-pointer'
              onClick={() => setImageIndex(i)}
            >
              <Image
                src={e.node.originalSrc}
                alt={e.node.altText}
                width={166}
                height={95}
                objectFit='cover'
              />
            </div>
          ))}
        </div>

        <div className='mt-8 flex justify-between'>
          <Quantity />
          <Size />
          <Color />
        </div>

        <div className='flex items-center my-8'>
          <span className='text-xl font-bold'>
            ₣{priceRange.maxVariantPrice.amount}
          </span>
          <Button rightLogo={CartLogo} className='ml-[72px]'>
            BUY
          </Button>
        </div>

        <hr className='border-gray' />

        <div className='flex mt-7'>
          <div>
            <Image src={TruckLogo} width={29} height={23.5} alt='Truck Logo' />
          </div>
          <div className='font-bold ml-4'>
            free shipping is available for orders over $100.00
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  // TODO: 404 page if the collection is not found from the 'CollectionList' file
  // if (!collectionList[context.params.collectionHandle]?.searchTitle) {
  //   return {
  //     notFound: true,
  //   };
  // }

  const { data } = await client.query({
    query: getProductByHandle,
    variables: {
      handle: context.params.product,
    },
  });

  if (!data.productByHandle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data,
    },
  };
}

export default Product;
