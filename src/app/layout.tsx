import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SafeGuard Pest Care – Reliable Pest Control for Homes & Businesses',
  description: 'Professional pest control services in Atlanta. Ants, roaches, rodents, termites, bed bugs, mosquitoes & more. Call (404) 555-0167.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
