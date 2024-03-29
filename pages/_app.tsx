import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import React from "react";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <a href='/'>
        <img src="/wegimage.jpg" width="7%"></img>
      </a>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
