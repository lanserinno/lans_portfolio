import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lans Villena | Backend Developer',
  description: 'Backend-focused Computer Science student building secure, scalable web applications using Node.js, Laravel, and PostgreSQL.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
