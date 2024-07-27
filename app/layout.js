import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Employee Management',
  description: 'Employee Management app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link
          rel='icon'
          href='/icon?<generated>'
          type='image/<generated>'
          sizes='<generated>'
        />
        <link
          rel='apple-touch-icon'
          href='/apple-icon?<generated>'
          type='image/<generated>'
          sizes='<generated>'
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
