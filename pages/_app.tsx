import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import Header from '../components/Header'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>

      <Head>
        <title>Doge</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A simple example of a Next.js App" />
        <meta name="keywords" content="doge, elon musk twit, doge, elon musk, twitter, doge love twitter" />
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

      <ApolloProvider client={client}>
        <SessionProvider session={session}>
          <div className="h-screen overflow-x-scroll overflow-y-scroll bg-slate-200">
            <Header />
            <Component {...pageProps} />
          </div>
        </SessionProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
