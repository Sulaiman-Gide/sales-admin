import { Roboto } from 'next/font/google'
import '@/styles/globals.css';
import Providers from "../components/providers";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
 
export default function App({ Component, pageProps }) {
  return (
    <Providers className={roboto.className}>
      <Component {...pageProps} />
    </Providers>
  )
}
