'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { PiLadder } from 'react-icons/pi';
import { MdOutlineDashboard } from 'react-icons/md';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { TbReportMoney, TbAdjustmentsDollar } from 'react-icons/tb';

const menuLinks = [
  {
    name: 'Dashboard',
    icon: <MdOutlineDashboard size={24} />,
    link: '/',
  },
  {
    name: 'Manage Shelf',
    icon: <PiLadder size={24} />,
    link: '/shelf',
  },
  {
    name: 'Add Shelf',
    icon: <HiOutlineViewGridAdd size={24} />,
    link: '/shelf/add',
  },
  {
    name: 'Manage Product',
    icon: <TbAdjustmentsDollar size={24} />,
    link: '/product',
  },
  {
    name: 'Total Sales',
    icon: <TbReportMoney size={24} />,
    link: '/sales',
  },
];

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <header className='fixed top-0 left-0 w-screen h-[10vh] flex justify-between items-center px-20 py-5 shadow-sm md:shadow-lg'>
        <div className='text-xl font-bold'>Stock Tracker</div>

        {/* a small dropdown to manage accounts */}
        <div className='flex items-center space-x-2'>
          <div className='text-sm font-medium'>John Doe</div>
          <div className='w-10 h-10 rounded-full bg-gray-300'></div>
        </div>
      </header>

      {/* sidebar menu */}
      <div className='fixed bottom-0 left-0 h-[90vh] w-80 bg-white shadow-lg'>
        <div className='flex items-center justify-between'>
          <button className='text-black focus:outline-none'></button>
        </div>
        <nav>
          <ul className='space-y-2 w-full'>
            {menuLinks.map((link, index) => (
              <Link href={link.link} key={index}>
                <li
                  className={`flex items-center justify-start px-5 py-5 ${
                    pathname === link.link
                      ? 'bg-gray-100 text-black'
                      : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {link.icon}
                  <span className='ml-2'>{link.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      {/* main content */}
    </>
  );
}
