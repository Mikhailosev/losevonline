import { Box, Flex, Heading, Img, Link } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import useSWR from 'swr'
import Preloader from '../components/Preloader/Preloader'
const References: React.FC<{}> = ({}): ReactElement | null => {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_SERVER_URL}/references`)
  if (data && !error) {
    return (
      <Box as="main" padding={['5%', '5%', '5%', '5%', '1.5% 20%']} className="main">
        <Flex flexDir={['column', 'column', 'column', 'row', 'row']} justifyContent="space-between">
          <Heading textAlign="center">Референции</Heading>
          <Link href="https://www.instagram.com/losevltd/" display="flex" alignItems="center">
            {' '}
            Мы в Instagram: &nbsp; <Img ml="20px" w="50px" src="/images/instagram.svg" />
          </Link>
        </Flex>
        <Flex justifyContent="space-around" flexWrap="wrap">
          {data.map((ref: any) => {
            return (
              <Link key="ref" m="20px" w="200px" h="200px" href={ref.link} target="_blank">
                <Img w="200px" h="200px" objectFit="contain" src={`${process.env.NEXT_PUBLIC_SERVER_URL}` + ref?.file?.url}></Img>
              </Link>
            )
          })}
        </Flex>
      </Box>
    )
  }
  return <Preloader />
}
export default References
