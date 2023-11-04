import React, { useState, useEffect } from 'react';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ThemeSwitcher from "./ThemeSwitcher";
import { data } from '../data/data.js';

import { BiCategory } from 'react-icons/bi';
import { RxDashboard } from 'react-icons/rx';
import { TbShoppingBagSearch, TbShoppingBagPlus } from 'react-icons/tb';
import { IoStatsChartOutline } from 'react-icons/io5';
import { LiaUsersCogSolid } from 'react-icons/lia';
import { MdOutlineLogout } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';

const Transactions = () => {

  return (
    <div>
      <div className='sm:mt-0 mt-4 py-2 px-1 sm:p-4'>
        <div className='w-full m-auto py-4 px-2 sm:p-4 border dark:border-gray-800 rounded-md bg-white dark:bg-transparent overflow-y-auto'>
          <div className='my-3 p-4 grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 items-center justify-between cursor-pointer'>
            <span className='text-sm sm:text-base'>Product Name</span>
            <span className='sm:text-left text-right text-sm sm:text-base'>Department</span>
            <span className='hidden md:grid text-sm sm:text-base'>Date</span>
            <span className='sm:text-left text-right text-sm sm:text-base'>Amount</span>
            <span className='hidden sm:grid text-sm sm:text-base'>Payment Method</span>
          </div>
          <ul className='w-full overflow-y-auto h-[69vh] pr-3 sm:px-3'>
            {data.map((order, id) => (
                <li key={id} className='bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 items-center justify-between cursor-pointer'>
                    <div className='flex items-center justify-center md:justify-start'>
                        <div className='bg-purple-100 dark:bg-gray-700 dark:hover:bg-gray-800 p-3 rounded-md'>
                            <MdProductionQuantityLimits className='text-purple-800 dark:text-slate-50' />
                        </div>
                        <p className='pl-4'>Bags</p>
                    </div>
                    <p className='text-gray-600 dark:text-slate-100 text-center md:text-left'>Store</p>
                    <p className='hidden md:flex text-center md:text-left'>12/30/2067</p>
                    <p className='hidden md:flex text-center md:text-left'>{order.date}</p>
                    <div className='sm:flex hidden justify-center md:justify-between items-center'>
                        <p>{order.method}</p>
                        <BsThreeDotsVertical />
                    </div>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
