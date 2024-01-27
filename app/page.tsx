'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <header className='fixed top-0 left-0 w-screen h-[10vh] flex justify-between items-center px-10 py-5 xl:px-20 shadow-sm md:shadow-lg'>
        <div className='text-xl font-bold'>Stock Tracker</div>

        {/* a small dropdown to manage accounts */}
        <div className='flex items-center space-x-2'>
          <div className='text-sm font-medium'>John Doe</div>
          <div className='w-10 h-10 rounded-full bg-gray-300'></div>
        </div>
      </header>

      {/* sidebar menu */}
      <div className='fixed bottom-0 left-0 h-[90vh] py-6 w-80 bg-white shadow-lg'>
        <div className='flex items-center justify-between'>
          <button className='text-black focus:outline-none'>
          </button>
        </div>
        <nav className='py-4'>
          <ul className='space-y-2 w-full'>
            <li className='bg-slate-800 h-auto'>
              <a
                onClick={() => router.push('/')}
                className=' hover:text-gray-300 text-white h-full bg-red-900 p-6'
              >
                Home
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* main content */}
    </>
  );
}
