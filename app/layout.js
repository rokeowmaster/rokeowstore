import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Foot from '@/components/Foot'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rokeow Store',
  description: 'Shop easy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='m-10'>
        <Nav />
        {children}
        <Foot />
        </main>
      </body>
    </html>
  )
}
