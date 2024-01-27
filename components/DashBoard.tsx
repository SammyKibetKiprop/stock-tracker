import React from 'react'

const DashBoard = () => {
  return (
    <div className='grid gap-8 grid-cols-2 w-fit'>
      <div className='h-52 w-80 shadow-lg rounded-md bg-white p-4'>
        <h3 className='font-semibold text-xl tracking-wide'>
          Category
        </h3>
      </div>
      <div className='h-52 w-80 shadow-lg rounded-md bg-white p-4'>
        <h3 className='font-semibold text-xl tracking-wide'>Sales</h3>
      </div>
      <div className='h-52 w-80 shadow-lg rounded-md bg-white p-4'>
        <h3 className='font-semibold text-xl tracking-wide'>
          Product Type
        </h3>
      </div>
    </div>
  );
}

export default DashBoard