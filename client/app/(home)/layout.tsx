'use client';
// import type { Metadata } from 'next';

import NavigationPanel from '@/components/navigation';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// export const metadata: Metadata = {
//   title: 'Stock Tracker | Home',
//   description: 'Stock tracker IOT project management interface',
// };

import { Providers } from '../providers';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Providers>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <NavigationPanel />
          {/* px-2 sm:px-2 mx-auto md:mx-0 sm:w-full md:max-w-screen-sm */}
          <main className='h-[90vh] min-h-96 overflow-scroll mt-[10vh] md:mt-0 md:fixed bottom-0 right-0 w-screen md:w-[75vw] lg:w-[80vw] p-8'>
            {children}
          </main>
        </LocalizationProvider>
      </Providers>
    </>
  );
}
