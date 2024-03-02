'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import { Product } from '@/utils/interfaces';
import { getProduct } from '@/utils/service';
import { Button } from '@mui/material';

const ProductDetail = () => {
  const [product, setProduct] = useState({} as Product);
  const { productId } = useParams();

  useEffect(() => {
    if (!productId) return;

    getProduct(productId as string).then((data: Product) => {
      setProduct(data);
    });
    console.log(productId);
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className='flex flex-col gap-5 items-start justify-start w-full min-w-[15rem]'>
      <h3 className='font-bold tracking-wide text-xl capitalize mb-10'>
        Product Detail
      </h3>

      <div className='p-6 shadow-md grid gap-6 w-full max-w-[35rem]'>
        <h3 className='font-semibold tracking-wide text-xl capitalize mb-4'>
          {product.name}
        </h3>
        <p className='text-gray-500 text-[1.1rem] leading-6'>
          {product.description}
        </p>
        <div className='flex justify-between items-center'>
          <p className='text-[1.1rem] leading-6 font-semibold text-green-600'>
            ${product.price}
          </p>
          <p
            className='text-gray-500 text-[1.1rem] leading-6'
            style={{ fontWeight: 500 }}
          >
            Shelf {product.shelfId}
          </p>
        </div>

        {/* actions = edit, delete */}
        <div className='flex gap-4 justify-end mt-6'>
          <button className='text-white bg-slate-700 px-4 py-1 rounded-sm w-20 hover:bg-slate-600'>
            Edit
          </button>
          <button className='text-white bg-red-500 px-4 py-1 rounded-sm w-20 hover:bg-red-400'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
