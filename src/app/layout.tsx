import type { Metadata } from 'next'
import './globals.css'
import { Space_Grotesk, Space_Mono } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Marianela Imhoff — Frontend Developer',
  description:
    'Desarrolladora Frontend especializada en Next.js, TypeScript y Tailwind. Construyo interfaces modernas, accesibles y funcionales.',
}

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-space-grotesk',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}