import { NextUIProvider } from '@nextui-org/react';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import ProgressBar from '../ui/progress-bar';

const inter = Inter({ subsets: ['latin'] });

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <ProgressBar />
          <div className="p-10">{children}</div>
        </NextUIProvider>
      </body>
    </html>
  );
};

export default MainLayout;
