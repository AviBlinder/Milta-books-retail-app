import { Analytics } from '@vercel/analytics/react';

import { bellefair } from './fonts';

import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Milta Books Retail Shop',
  description: 'A Bricks-and-Mortar books shop located in Rehovot',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bellefair.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
