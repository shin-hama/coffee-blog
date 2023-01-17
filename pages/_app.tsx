import * as React from 'react'
import type { AppProps } from 'next/app'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import GoogleAnalytics from '../src/components/GoogleAnalytics'
import theme from '../src/lib/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
