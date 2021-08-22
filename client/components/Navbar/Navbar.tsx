import { Text, Flex, Img, List, ListItem } from '@chakra-ui/react'
import React, { ReactElement } from 'react'

const Navbar: React.FC<{}> = ({}): ReactElement | null => {
  return (
    <>
      <Flex w="100%" h="102px">
        <Flex
          w={['10%', '20%', '30%', '40%', '50%']}
          justifyContent="space-around"
          alignItems="center"
          bg="brand.400"
        >
          <Img ml="40px" alt="Логотип компании" src="/images/black_2.png" />
          <Text
            fontWeight="700"
            letterSpacing="-1px"
            textAlign="center"
            as="span"
            fontSize="20px"
            h="60px"
          >
            СОВРЕМЕННЫЕ СИСТЕМЫ ОТОПЛЕНИЯ И ВЕНТИЛЯЦИИ ОБЪЁМНЫХ ПОМЕЩЕНИЙ
          </Text>
        </Flex>
        <Flex w="59%" h="102px" bg="brand.400">
          <List>
            <ListItem>1</ListItem>
            <ListItem>2</ListItem>
            <ListItem>3</ListItem>
          </List>
        </Flex>
      </Flex>
    </>
  )
}
export default Navbar
