import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Footer } from '../components/Footer'
import { MainNavbar } from '../components/MainNavbar'
import ThemeProvider from '../providers/ThemeProvider'
import { GlobalStyle } from '../styles/Global'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>Bela Garota</title>
      </Head>

      <ThemeProvider>
        <GlobalStyle />
        {/* <MainNavbar /> */}
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
