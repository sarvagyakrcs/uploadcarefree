import { type Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import clsx from 'clsx'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { PROJETC_NAME } from '../../constants'

const font = Lato({
  subsets: ['latin'],
  weight: ["400"],
})

export const metadata: Metadata = {
  title: {
    template: '%s - Docs',
    default: `${PROJETC_NAME} - Never care for images again.`,
  },
  description:
    'Instant image optimization on the fly, with smart caching and seamless transformations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', font.className)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white dark:bg-slate-900">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
