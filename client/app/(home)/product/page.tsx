'use client';

import ProductsTable from '@/components/product/ProductsTable';
import { Product } from '@/utils/interfaces';
import { getAllProducts } from '@/utils/service';
import { useEffect, useState } from 'react';

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then((data: Product[]) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className='grid gap-5 items-start justify-start'>
      <h3 className='font-bold tracking-wide text-xl capitalize mb-10'>
        Products
      </h3>

      <ProductsTable products={products} />
    </div>
  );
};

export default Product;
