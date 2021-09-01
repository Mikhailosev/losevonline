import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import type { AppProps } from 'next/app'
import Router from 'next/dist/client/router'
import React, { ReactElement, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { SWRConfig } from 'swr'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Preloader from '../components/Preloader/Preloader'
import '../styles/animations.scss'
import '../styles/globals.scss'
import colors from './theme'

const theme = extendTheme({ colors })
const breakpoints = createBreakpoints({
  sm: '590px',
  md: '768px',
  lg: '1125px',
  xl: '1200px',
})

function MyApp({ Component, pageProps }: AppProps): ReactElement | null {
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
        <Navbar></Navbar>
        {/* <Head></Head> */}

        <Component {...pageProps} />
        <Footer></Footer>
      </ChakraProvider>
    </SWRConfig>
  )
}
export default MyApp
