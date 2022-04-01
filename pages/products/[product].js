import React, { useState } from 'react';
import Image from 'next/image';
import toast from 'react-hot-toast';

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
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const { id, title, description, options, priceRange, images } =
    data.productByHandle;

  const decodedId = atob(id).replace('gid://shopify/Product/', '');

  const handleAddToCart = () => {
    // Check if the necessary data is given
    if (selectedSize && selectedColor) {
      const cartItems = JSON.parse(localStorage.getItem('cart'));

      // Check if the cart is empty
      if (!cartItems) {
        const newItems = [];
        newItems.push({
          data: data.productByHandle,
          selectedQuantity,
          selectedSize,
          selectedColor,
        });

        localStorage.setItem('cart', JSON.stringify(newItems));
      } else {
        cartItems.push({
          data: data.productByHandle,
          selectedQuantity,
          selectedSize,
          selectedColor,
        });

        localStorage.setItem('cart', JSON.stringify(cartItems));
      }
      toast.success('Successfully added to the cart');
    } else if (!selectedSize) {
      toast.error('Please select a size.');
    } else if (!selectedColor) {
      toast.error('Please select a color.');
    }
  };

  return (
    <div className='flex flex-col lg:flex-row max-w-[80%] mx-auto my-36'>
      {/* Left side */}
      <div className='relative w-full lg:w-[588px] h-96 lg:h-[620px] bg-black'>
        <Image
          src={images.edges[imageIndex].node.originalSrc}
          alt={images.edges[imageIndex].node.altText}
          layout='fill'
          objectFit='cover'
        />
        <div className='hidden lg:block absolute bottom-6 left-1/2 -translate-x-1/2'>
          <button
            onClick={() => imageIndex !== 0 && setImageIndex(imageIndex - 1)}
            className='p-4 border-[2px]'
          >
            <Image src={LeftArrow} alt='Left Arrow' />
          </button>
          <button
            onClick={() =>
              imageIndex !== images.edges.length - 1 &&
              setImageIndex(imageIndex + 1)
            }
            className='p-4 border-[2px] border-l-0'
          >
            <Image src={RightArrow} alt='Right Arrow' />
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className='lg:w-[600px] lg:ml-28'>
        <BackButton className='mt-6'>back</BackButton>
        <h1 className='text-xl font-bold my-6'>{title}</h1>
        <Ticket id={decodedId.slice(0, 4) + '...'} />
        <p className='my-8'>{formatDesc(description)}</p>

        <div className='hidden lg:flex -translate-x-[225px] w-[1000px]'>
          {images.edges.map((e, i) => (
            <div
              key={i}
              className='mr-2 cursor-pointer'
              onClick={() => setImageIndex(i)}
            >
              <Image
                src={e.node.originalSrc}
                alt={e.node.altText}
                width={197}
                height={95}
                objectFit='cover'
              />
            </div>
          ))}
        </div>

        <div className='mt-8 flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0'>
          <Quantity
            quantity={selectedQuantity}
            setQuantity={setSelectedQuantity}
          />
          <Size
            data={options[0]}
            selected={selectedSize}
            setSelected={setSelectedSize}
          />
          <Color
            data={['#808080', '#FF0000', '#000000', '#FFFF00']}
            color={selectedColor}
            setColor={setSelectedColor}
          />
        </div>

        <div className='flex items-center my-8'>
          <span className='text-xl font-bold'>
            ₣{priceRange.maxVariantPrice.amount}
          </span>
          <Button
            rightLogo={CartLogo}
            onClick={handleAddToCart}
            className='ml-[72px]'
          >
            ADD TO CART
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
