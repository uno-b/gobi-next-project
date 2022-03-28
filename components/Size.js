import React from 'react';

const Size = ({ data, selected, setSelected }) => {
  return (
    <div>
      <span className='font-bold'>SIZE</span>
      <div className='mt-2.5 p-[2px] bg-gray divide-x-2 divide-gray'>
        {data?.values &&
          data.values.map((e, i) => (
            <button
              key={i}
              className={`relative bg-white w-10 h-10 ${
                e === selected && 'outline outline-2 z-50'
              }`}
              onClick={() => setSelected && setSelected(e)}
            >
              {e}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Size;
