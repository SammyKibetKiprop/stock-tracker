'use client';
import SalesPerShift from '@/components/shelf/SalesPerShift';
import ShelfDataTable from '@/components/shelf/ShelfDataTable';

const Shelf = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-10'>
      <ShelfDataTable />
      <SalesPerShift />
    </div>
  );
};

export default Shelf;
