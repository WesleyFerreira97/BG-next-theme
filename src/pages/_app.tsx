import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Footer } from '../components/Footer'
import { MainNavbar } from '../components/MainNavbar'
import ThemeProvider from '../providers/ThemeProvider'
import { GlobalStyle } from '../styles/Global'
import { NextUIProvider } from '@nextui-org/react'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Bela Garota</title>
      </Head>

      <ThemeProvider>
        <NextUIProvider>
          <GlobalStyle />
          {/* <MainNavbar /> */}
          <Component {...pageProps} />
          {/* <Footer /> */}
        </NextUIProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp

