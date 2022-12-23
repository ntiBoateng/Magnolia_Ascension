import type { AppProps } from 'next/app'
import { applyPolyfills, defineCustomElements } from '@magnolia-ea/uxf-core/loader';
applyPolyfills().then(() => {
  defineCustomElements();
});

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <div ><Component {...pageProps} /></div>
}
export default MyApp
