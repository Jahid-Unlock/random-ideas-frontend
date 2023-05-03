import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Share Your Crazy Idea!',
  description: 'Are you someone who always has great ideas but nowhere to share them ? or maytbe you are just looking for inspiration for your next project or venture ? Look further than my app, where you can share and discover new ideas from a global community of creators and innovators!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100`}>{children}</body>
    </html>
  )
}
