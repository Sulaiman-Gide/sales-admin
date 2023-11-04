import React from 'react';
import { data } from '../data/data.js';
import { MdProductionQuantityLimits } from 'react-icons/md';

const RecentOrders = () => {
  return (
    <div className='w-full col-span-2 relative m-auto mt-5 sm:mt-0 px-1 rounded-md overflow-x-hidden border bg-white dark:bg-gray-900 dark:border-gray-700'>
      <h1 className='px-3 py-3'>Recently Purchased Products</h1>
      <ul className='overflow-y-auto md:h-[63vh] lg:h-[63vh] h-[45vh] px-3'>
        {data.map((order, id) => (
          <li
            key={id}
            className='flex justify-between items-center dark:border-none bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 rounded-md my-3 px-3 py-2 cursor-pointer'
          >
            <div className='bg-purple-100 dark:bg-gray-500 dark:hover:bg-gray-800 rounded-md p-3'>
              <MdProductionQuantityLimits className='text-purple-800 dark:text-purple-100' />
            </div>
            <div className='pl-4 text-center'>
              <p className='text-gray-800 dark:text-slate-50 font-bold'>Product Name</p>
              <p className='text-gray-400 text-sm'>Amount</p>
            </div>
            <p className='text-sm'>Price</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
