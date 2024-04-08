import React, { useState } from 'react';

const Header = () => {
  const [measure, setMeasure] = useState('F');

  const handleMeasureChange = (newMeasure) => {
    if (newMeasure !== measure) {
      setMeasure(newMeasure);
    }
  };

  return (
    <div className='flex justify-between items-center mt-4 mb-10 gap-12'>
      <h5>Header</h5>
      <input 
        type="text" 
        placeholder='Search for cities'
        className='border rounded-md py-2 px-5 bg-blue-100 w-full focus:outline-none focus:border-blue-600 focus:border-2 focus:placeholder:text-transparent'
      />
      <div className='flex  bg-blue-100  shadow-md border rounded-full  justify-between items-center '>
        <button 
          className={`${measure === 'F' ? 'text-white' : 'text-gray'} ${measure === 'F' ? 'bg-blue-700' : 'bg-blue-100' } p-1 px-2  rounded-full flex justify-center items-cente`}
          onClick={() => handleMeasureChange('F')}
        >
          <h6>
            ºF
          </h6>
        </button>
        <button
          className={`${measure === 'C' ? 'text-white' : 'text-gray'} ${measure === 'C' ? 'bg-blue-700' : 'bg-blue-100' } p-1 px-2  rounded-full flex justify-center items-center`}
          onClick={() => handleMeasureChange('C')}
        >
          <h6>
            ºC
          </h6>
        </button>
      </div>
    </div>
  );
};

export default Header;
