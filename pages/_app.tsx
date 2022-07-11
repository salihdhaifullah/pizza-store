import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query'
import { StyledEngineProvider } from '@mui/material'

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <>

      <Head>
        <title>Doge</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider injectFirst>
            <Component {...pageProps} />
        </StyledEngineProvider>

      </QueryClientProvider>
    </>
  )
}

export default MyApp