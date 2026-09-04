import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coffee House — Website Template',
  description: 'A demo coffee shop landing page — bilingual EN/AR, coffee, food, and good vibes.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
