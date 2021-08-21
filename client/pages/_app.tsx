import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import React, { ReactElement } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { SWRConfig } from 'swr'
const colors = {
  brand: {
    900: '#fec303',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })

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
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  )
}
export default MyApp
