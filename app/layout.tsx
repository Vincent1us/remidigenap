import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Personal Profile | Software Engineering Student',
  description: 'Modern personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#000000', color: '#ffffff', margin: 0, padding: 0 }}>
        <Navbar />
        {/* PAKSA padding top dengan style inline */}
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
      </body>
    </html>
  )
}