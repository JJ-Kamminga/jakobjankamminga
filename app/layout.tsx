import './global.css'
import type { Metadata } from 'next'
import '@fontsource-variable/eb-garamond';
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import { globalStyles } from './components/globalstyles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from './theme';

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

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CssBaseline>
        <GlobalStyles styles={globalStyles} />
        <body>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <main>
                {children}
                <Footer />
                <Analytics />
                <SpeedInsights />
              </main>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </CssBaseline>
    </html>
  )
}
