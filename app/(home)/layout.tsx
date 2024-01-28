import type { Metadata } from 'next';

import NavigationPanel from '@/components/navigation';


export const metadata: Metadata = {
  title: 'Stock Tracker | Home',
  description: 'Stock tracker IOT project management interface',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavigationPanel />

      <main className='min-h-[90vh] h-fit overflow-scroll mt-[10vh] md:mt-0 md:fixed bottom-0 right-0 w-screen md:w-[75vw] lg:w-[80vw] p-8'>
        {children}
      </main>
    </>
  );
}
