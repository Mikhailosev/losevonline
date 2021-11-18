import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import useSWR from 'swr'
import styles from './prod.module.scss'
const Index: React.FC<{}> = ({}): ReactElement | null => {
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_SERVER_URL}/categories?_sort=order:ASC`)
  if (data) {
    return (
      <>
        <Box as="main" padding={['5%', '5%', '5%', '5%', '1.5% 20%']} className="main">
          <Heading mb="40px" textAlign="center" color="brand.text">
            Продукция
          </Heading>
          <Flex data-aos="fade-right" justifyContent="space-around" margin="0 auto" alignItems="center" flexWrap="wrap">
            {data.map((product: any) => {
              return (
                <Flex
                  justifyContent="space-between"
                  padding="20px"
                  position="relative"
                  maxW="320px"
                  h="250px"
                  w="100%"
                  key={product.name}
                  className={styles.product}
                  alignItems="center"
                  flexDir="column"
                  transition="all"
                  _hover={{
                    boxShadow: 'rgba(255, 237, 173, 0.3) 0px 14px 28px, rgba(255, 237, 173, 0.35) 0px 14px 28px;',
                  }}
                  boxShadow="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
                  borderRadius="10px"
                  border="2px solid #eaeaea"
                >
                  <Link passHref={true} href={'/prod/' + product.link}>
                    <Img w="200px" cursor="pointer" objectFit="cover" src={`${process.env.NEXT_PUBLIC_SERVER_URL}` + product?.photo?.url} />
                  </Link>
                  <Link passHref={true} href={'/prod/' + product?.link}>
                    <Text fontWeight="500" textAlign="center" color="brand.text" cursor="pointer">
                      {product.name}
                    </Text>
                  </Link>
                  <Link passHref={true} href={'/prod/' + product?.link}>
                    <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" className={styles.productHover}>
                      <Text letterSpacing="2px" borderRadius="5px" p="15px" color="black" background="brand.400">
                        ПОДРОБНОСТИ
                      </Text>
                    </Box>
                  </Link>
                </Flex>
              )
            })}
          </Flex>
        </Box>
      </>
    )
  }
  return <></>
}
export default Index
