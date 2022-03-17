import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

const Input = ({
  label,
  icon,
  alt,
  type,
  important,
  className,
  startDate,
  setStartDate,
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <div className='mb-2 text-xs text-gray-2'>
        {label} {important && <span className='text-red-400'>*</span>}
      </div>
      <div className='flex items-center'>
        <Image src={icon} alt={alt} />
        {type === 'Date' ? (
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className='ml-4 w-full outline-none'
          />
        ) : (
          <input type='text' className='ml-4 w-full outline-none' />
        )}
      </div>
      <hr className='mt-2 border-gray' />
    </div>
  );
};

Input.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['Password', 'Date']),
};

export default Input;
