import '../assets/styles/global/reset.scss'
import '../assets/styles/global/global.scss'
import type { AppProps } from 'next/app'
import Layouts from '../components/layouts/Layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )
}

export default MyApp
