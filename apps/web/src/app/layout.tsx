import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AmirMind AI - The Future of Intelligence',
  description: 'Production-ready AI Operating System. One Mind. Infinite Intelligence.',
  keywords: [
    'AI',
    'ChatGPT',
    'Claude',
    'Gemini',
    'AI Operating System',
    'Workspace',
    'Intelligence',
  ],
  authors: [{ name: 'NIZOMOV AMIRBEK' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: 'AmirMind AI',
    description: 'The Future of Intelligence',
    siteName: 'AmirMind AI',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
