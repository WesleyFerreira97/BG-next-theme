import type { AppProps } from 'next/app'
import ThemeProvider from '../providers/ThemeProvider'
import { GlobalStyle } from '../styles/Global'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
