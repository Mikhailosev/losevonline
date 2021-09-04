import { Box, Flex, Heading, Img, Link, Text } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import useSWR from 'swr'
import Preloader from '../components/Preloader/Preloader'
const Eng: React.FC<{}> = ({}): ReactElement | null => {
  const { data, error } = useSWR('/api/contacts')
  if (data && !error) {
    return (
      <Box as="main" padding={['5%', '5%', '5%', '5%', '1.5% 20%']} className="main">
        <Flex flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'nowrap']}>
          <Box color="#aaa" mb="40px" mr="80px" h="100%" pl="40px" mt="80px" borderLeft="3px solid #eaeaea" minW="25%">
            Life is too short, so we must try to get pleasure from our business and from people with whom we work.
          </Box>
          <Flex flexWrap="wrap">
            <Heading mb="40px">ABOUT LOSEV LTD</Heading>
            <Flex flexWrap="wrap" mb="40px" w="100%" justifyContent="space-around">
              <Img m="20px" src="/images/first.jpg" />
              <Img m="20px" src="/images/second.jpg" />
            </Flex>
            <Text mb="40px">
              Losev Company Limited specializes in supplying European enginery for Russian HVAC market. Our present range is directed mostly
              for industrial and commercial buildings: production departments, works, logistic centers and small warehouses, supermarkets,
              gymnasiums, movie theatres, religious apartments, hotels, business centers, etc.
            </Text>
            <Flex flexWrap="wrap" mb="40px" w="100%" justifyContent="space-around">
              <Img m="20px" src="/images/third.jpg" />
              <Img m="20px" src="/images/fourth.jpg" />
            </Flex>
            <Text mb="40px">
              We believe in long-term, mutually beneficial relations with our partners (clients and suppliers). We think only such work can
              bring success in competitive struggle for both sides of any cooperation. We try to be professional in our field. Anyway
              honesty is not just a loud word for us in any situation.
            </Text>
            <Box rounded="5px" background="brand.200" padding="40px">
              <Heading mb="40px">If you think we can cooperate, please do not hesitate to contact with us:</Heading>
              <Flex flexWrap={['wrap', 'nowrap', 'nowrap', 'nowrap', 'nowrap']} justifyContent="space-around">
                <Flex justifyContent="flex-end" mb="40px" minW="50%" flexDir="column">
                  <Flex flexDir="column">
                    <Link textDecor="underline" href={'tel:' + data.phone}>
                      <b>Tel: </b>
                      {data.phone}
                    </Link>
                    <Link textDecor="underline" href={'tel:' + data.phone2}>
                      {data.phone2}
                    </Link>
                  </Flex>
                  <Link textDecor="underline" href={'mailto:' + data.email}>
                    <b>E-mail:</b> {data.email}
                  </Link>
                </Flex>
                <Flex justifyContent="flex-end" mb="40px" minW="50%">
                  <Text>
                    <b>Post: </b>Bolshoy pr., 34, Krasniy Bor, Tosnenskiy area, Leningrad region, 187015, Russia
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
    )
  }
  return <Preloader />
}
export default Eng
