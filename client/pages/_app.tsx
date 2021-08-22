import '../styles/globals.scss'
import '../styles/animations.scss'

import type { AppProps } from 'next/app'
import React, { ReactElement } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { SWRConfig } from 'swr'
import colors from './theme'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const theme = extendTheme({ colors })

const breakpoints = createBreakpoints({
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
})
function MyApp({ Component, pageProps }: AppProps): ReactElement | null {
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
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  )
}
export default MyApp
