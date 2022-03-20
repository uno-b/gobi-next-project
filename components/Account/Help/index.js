import React, { useState } from 'react';
import Image from 'next/image';

import { FAQ } from './FAQ';

import QuestionLogo from '../../../assets/logos/question-circle.svg';
import ChevronRightLogo from '../../../assets/logos/chevron-right.svg';
import Polygon from '../../../assets/logos/polygon.svg';
import AdminPicture from '../../../assets/images/admin.png';

const Help = () => {
  /* 
  Get the length of the questions and dynamically 
  assign an array of that length to state.
  */
  const initialArr = [...Array(FAQ.length)].fill(false); // e.g.: [false, false, false]
  const [droppedDownArr, setDroppedDownArr] = useState(initialArr);

  const handleClick = (i) => {
    let items = [...droppedDownArr];
    let item = !items[i];
    items[i] = item;
    setDroppedDownArr(items);
  };

  return (
    <div>
      <div className='mb-12'>
        <h2 className='font-bold text-xl mb-2'>NEED HELP?</h2>
        <div>Here are the popular FAQ down below</div>
      </div>

      <div className='mb-8'>
        {FAQ.map((item, i) => {
          return (
            <div key={i}>
              <div className='py-6'>
                <button className='w-full flex' onClick={() => handleClick(i)}>
                  <div>
                    <Image src={QuestionLogo} alt='Question Logo' />
                  </div>
                  <div className='ml-4'>{item.question}</div>
                  <div className='ml-auto'>
                    <Image
                      src={ChevronRightLogo}
                      alt='Chevron'
                      width={13}
                      height={14}
                      className={
                        droppedDownArr[i] === true ? `-rotate-90` : 'rotate-90'
                      }
                    />
                  </div>
                </button>

                {droppedDownArr[i] === true && (
                  <div className='flex mt-10'>
                    <div className='bg-gray-light p-4 rounded-md w-11/12'>
                      {item.answer}
                    </div>
                    <div className='relative -translate-x-1 translate-y-5'>
                      <Image
                        src={Polygon}
                        alt='Polygon'
                        width={14}
                        height={20}
                      />
                    </div>
                    <div className='relative translate-y-3 ml-3'>
                      <Image src={AdminPicture} alt='Admin' />
                    </div>
                  </div>
                )}
              </div>
              {droppedDownArr[i] === false && <hr className='border-gray' />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Help;
