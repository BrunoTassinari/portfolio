import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Bruno Tassinari',
  description: 'My personal portfolio',
};

type RootProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootProps) => (
  <html lang="en" suppressHydrationWarning>
    <body className="overflow-hidden ove">{children}</body>
  </html>
);

export default RootLayout;
