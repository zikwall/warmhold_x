import '@warmhold:assets/css/vendor/bootstrap.min.css'
import '@warmhold:assets/css/style.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
