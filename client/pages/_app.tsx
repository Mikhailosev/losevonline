import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import AOS from 'aos'
// @ts-expect-error doesnt have types
import withYM from 'next-ym'
import type { AppProps } from 'next/app'
import Router from 'next/dist/client/router'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { compose } from 'recompose'
import { SWRConfig } from 'swr'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Preloader from '../components/Preloader/Preloader'
import '../styles/animations.scss'
import '../styles/globals.scss'
export const colors = {
  brand: {
    50: '#fff9db',
    100: '#ffedad',
    200: '#fee17d',
    300: '#fed54b',
    400: '#fec91a',
    500: '#fec91a',
    600: '#b28800',
    700: '#7f6100',
    800: '#4d3a00',
    900: '#1c1300',
    black: '#000',
    text: '#444',
  },
  text: {
    50: '#f2f2f2',
    100: '#d9d9d9',
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#595959',
    700: '#404040',
    800: '#262626',
    900: '#0d0d0d',
  },
}

const theme = extendTheme({ colors })
const breakpoints = createBreakpoints({
  sm: '590px',
  md: '768px',
  lg: '1125px',
  xl: '1200px',
})

function MyApp({ Component, pageProps }: AppProps): any {
  const [isRendered, setRendered] = useState(true)
  Router.events.on('routeChangeStart', () => {
    console.log('here1')
    return setRendered(false)
  })
  Router.events.on('hashChangeStart', () => {
    return setRendered(false)
  })
  Router.events.on('beforeHistoryChange', () => {
    return setRendered(false)
  })
  Router.events.on('routeChangeComplete', () => {
    console.log('here2')
    return setRendered(true)
  })
  Router.events.on('routeChangeError', () => {
    console.log('here3')
    return setRendered(true)
  })
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) =>
          //eslint-disable-next-line
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <ChakraProvider theme={extendTheme({ ...theme, breakpoints })}>
        {!isRendered && <Preloader />}
        <Head>
          <link rel="shortcut icon" href="/images/losev-favicon.png" type="image/x-icon" />
          <meta charSet="utf-8" />
          <title>Современные системы отопления и вентиляции объёмных помещений - Главная страница сайта</title>
          <link rel="shortcut icon" href="_t/logos/losev-favicon.png" type="image/x-icon" />
          <meta
            name="description"
            content="Системы отопления и вентиляции объёмных помещений. Воздушное и лучистое отопление - Главная страница сайта"
          />
          <meta
            name="keywords"
            content="воздухонагреватели, теплогенераторы, инфракрасные обогреватели, водяные потолочные панели, газовые инфракрасные излучатели, потолочные вентиляторы (дестратификаторы), воздушные завесы"
          />
          <meta name="viewport" content="width=device-width" />
        </Head>
        <Navbar></Navbar>

        <Component {...pageProps} />
        <Footer></Footer>
      </ChakraProvider>
    </SWRConfig>
  )
}
// @ts-expect-error it doesnt have types
export default compose(withYM(process.env.NEXT_PUBLIC_METRIKA, Router))(MyApp)
