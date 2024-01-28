import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import NavigationPanel from '@/components/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stock Tracker',
  description: 'Stock tracker IOT project management interface',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} h-fit bg-neutral-100`}>
        <NavigationPanel />

        <main className='min-h-[90vh] h-fit overflow-scroll mt-[10vh] md:mt-0 md:fixed bottom-0 right-0 w-screen md:w-[75vw] lg:w-[80vw] p-8'>
          {children}
        </main>
      </body>
    </html>
  );
}
