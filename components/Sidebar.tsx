'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className='flex items-center justify-between p-4'>
        <div className='text-xl font-bold'>Stock Tracker</div>
        <button
          className='text-white focus:outline-none'
          onClick={toggleSidebar}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      <nav className='p-4'>
        <ul className='space-y-2'>
          <li>
            <a
              onClick={() => router.push('/')}
              className='text-white hover:text-gray-300'
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => router.push('/stocks')}
              className='text-white hover:text-gray-300'
            >
              Stocks
            </a>
          </li>
          <li>
            <a
              onClick={() => router.push('/portfolio')}
              className='text-white hover:text-gray-300'
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              onClick={() => router.push('/news')}
              className='text-white hover:text-gray-300'
            >
              News
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
