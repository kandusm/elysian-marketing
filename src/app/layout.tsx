import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@fontsource/cinzel/400.css'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Elysian Money — Household Financial Intelligence',
  description: 'A real double-entry ledger, privacy-aware household visibility, and an AI CFO that knows your actual numbers. Built for families who take their finances seriously.',
  openGraph: {
    title: 'Elysian Money',
    description: 'Household financial intelligence. Built on a real ledger.',
    url: 'https://elysian.money',
    images: [{ url: '/images/elysian-mark.svg' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
