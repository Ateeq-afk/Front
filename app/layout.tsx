import './globals.css';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';



const Jostr = Jost({ weight: '400', subsets: ['latin'] });

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID; // Ensure this is set in your .env.local file
declare var dataLayer: any[];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TRW1BNQ5YR"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TRW1BNQ5YR');
        `}} />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${Jostr.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
