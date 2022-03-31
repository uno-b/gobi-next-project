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
  value,
  onChange,
  password,
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <div className='mb-2 text-xs text-gray-2'>
        {label} {important && <span className='text-red-400'>*</span>}
      </div>
      <div className='flex items-center'>
        <Image src={icon} alt={alt} className='text-black-0' />
        {type === 'Date' ? (
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className='ml-4 w-full outline-none'
          />
        ) : (
          <input
            type={password ? 'password' : 'text'}
            className='ml-4 w-full outline-none'
            value={value}
            onChange={onChange}
          />
        )}
      </div>
      <hr className='mt-2 border-gray' />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['Password', 'Date']),
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
