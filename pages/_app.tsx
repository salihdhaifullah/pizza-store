import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>

        <title>Hello Moms</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="A simple example of a Next.js App" />
        <meta name="keywords" content="nextjs, example, app" />
        <meta name="author" content="salih hassan" />
        <meta name="copyright" content="salih hassan" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="language" content="en" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="document-class" content="Published" />

      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
