import './globals.css'
import type { Metadata } from 'next'
import { Jost} from 'next/font/google';

export const metadata: Metadata = {
  title: 'Backpackers United',
  description: 'One of the best trek / tour operators in South India',
}
const Jostr = Jost({ weight: '400', subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${Jostr.className}  `}>{children}</body>
    </html>
  )
}