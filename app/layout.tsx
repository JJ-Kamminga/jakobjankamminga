import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '@fontsource-variable/eb-garamond';
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { CssBaseline, GlobalStyles } from '@mui/material'
import { globalStyles } from './components/globalstyles'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Jakob Jan Kamminga',
    template: 'none',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'Jakob Jan Kamminga',
    description: 'Jakob Jan Kamminga\'s portfolio and blog.',
    url: baseUrl,
    siteName: 'Jakob Jan Kamminga',
    locale: 'en_UK',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        // GeistSans.variable,
        GeistMono.variable
      )}
    >
      <CssBaseline>
        <GlobalStyles styles={globalStyles} />
        <body>
          <main>
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </body>
      </CssBaseline>
    </html>
  )
}
