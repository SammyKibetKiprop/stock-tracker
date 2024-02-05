import { Grid, InputLabel, TextField } from '@mui/material';
import React from 'react';

const AddShelf = () => {
  return (
    <div className='w-[85vw] px-2 sm:px-2 mx-auto md:mx-0 sm:w-full md:max-w-screen-sm'>
      <form className='grid gap-4 grid-cols-2 '>
        <div className='col-span-2 flex gap-10 justify-start items-center'>
          <InputLabel
            htmlFor='name'
            className=' font-semibold text-gray-700 text-md w-1/6 text-right'
          >
            Shelf Name
          </InputLabel>
          <TextField
            id='name'
            variant='outlined'
            size='small'
            className='flex-1'
          />
        </div>

        <div className='col-span-2 flex gap-10 justify-start items-center'>
          <InputLabel
            htmlFor='id'
            className=' font-semibold text-gray-700 text-md w-1/6 text-right'
          >
            Shelf ID
          </InputLabel>
          <TextField
            id='id'
            variant='outlined'
            size='small'
            className='flex-1'
          />
        </div>

        <div className='col-span-2 flex gap-10 justify-start items-center'>
          <InputLabel
            htmlFor='category'
            className=' font-semibold text-gray-700 text-md w-1/6 text-right'
          >
            Category
          </InputLabel>
          <TextField
            id='category'
            variant='outlined'
            size='small'
            className='flex-1'
          />
        </div>

        <div className='col-span-2 flex gap-10 justify-start items-start'>
          <InputLabel
            htmlFor='prod-type'
            className=' font-semibold text-gray-700 text-md w-1/6 text-right'
          >
            Product Type
          </InputLabel>
          <TextField
            id='prod-type'
            variant='outlined'
            size='small'
            className='flex-1'
          />
        </div>

        <div className='col-span-2 flex gap-10 justify-start items-start'>
          <InputLabel
            htmlFor='prod'
            className=' font-semibold text-gray-700 text-md w-1/6 text-right'
          >
            Product
          </InputLabel>
          <TextField
            id='prod'
            variant='outlined'
            size='small'
            className='flex-1'
          />
        </div>

        <div className='col-span-2 flex gap-10 justify-start items-start'>
          <InputLabel
            htmlFor='prod-id'
            className=' font-semibold text-gray-700 text-md w-1/6 text-right'
          >
            Product ID
          </InputLabel>
          <TextField
            id='prod-id'
            variant='outlined'
            size='small'
            className='flex-1'
          />
        </div>

        <div className='col-span-2 row-span-3 flex gap-10 justify-start items-start'>
          <InputLabel
            htmlFor='prod-desc'
            className=' font-semibold text-gray-700 text-md w-1/6 text-right'
          >
            Description
          </InputLabel>
          <TextField
            id='prod-desc'
            variant='outlined'
            size='small'
            multiline
            rows={5}
            className='flex-1'
          />
        </div>

        <div className='col-span-2 flex gap-10 justify-start items-start'>
          <InputLabel
            htmlFor='price'
            className=' font-semibold text-gray-700 text-md w-1/6 text-right'
          >
            Price
          </InputLabel>
          <TextField
            id='price'
            variant='outlined'
            size='small'
            className='flex-1'
          />
        </div>
      </form>
    </div>
  );
};

export default AddShelf;
