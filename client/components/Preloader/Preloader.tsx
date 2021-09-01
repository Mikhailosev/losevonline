import { Flex, Img } from '@chakra-ui/react'
import React, { ReactElement } from 'react'

const Preloader: React.FC<{}> = (): ReactElement | null => {
  return (
    <Flex
      position="fixed"
      zIndex="4"
      backgroundColor="brand.500"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100vw"
      flexDir="column"
      top="0"
    >
      <Img w="120px" alt="Логотип компании" className="logoAnimated" src="/images/preloader.gif" />
    </Flex>
  )
}

export default Preloader
