'use client'
import Header from 'components/Layout/Header'
import { ThemeProvider } from 'next-themes'

// import { ThemeProvider } from '@material-tailwind/react'
import type { AppProps } from 'next/app'
import 'styles/globals.css'
import 'styles/title.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute='class'
      enableSystem={false}
      disableTransitionOnChange
    >
      {/* <ThemeProvider> */}
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
