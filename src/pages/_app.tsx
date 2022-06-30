import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/Global'

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
