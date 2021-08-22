import { Flex, Img } from '@chakra-ui/react'
import React, { ReactElement } from 'react'

const Preloader: React.FC<{}> = ({}): ReactElement | null => {
  return (
    <Flex
      backgroundColor="brand.500"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      w="100vw"
      flexDir="column"
    >
      <Img
        alt="Логотип компании"
        className="logoAnimated"
        src="/images/black_2.png"
      />
    </Flex>
  )
}

export default Preloader
