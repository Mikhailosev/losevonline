import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import styles from './prod.module.scss'
const Index: React.FC<{}> = ({}): ReactElement | null => {
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_SERVER_URL}/categories`)
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
                  padding="20px"
                  position="relative"
                  maxW="350px"
                  key={product.name}
                  className={styles.product}
                  alignItems="center"
                  flexDir="column"
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                  borderRadius="10px"
                  border="2px solid #ffedad"
                >
                  <Link passHref={true} href={'/prod/' + product.link}>
                    <Img w="200px" cursor="pointer" objectFit="cover" src={`${process.env.NEXT_PUBLIC_SERVER_URL}` + product.photo.url} />
                  </Link>
                  <Link passHref={true} href={'/prod/' + product.link}>
                    <Text fontWeight="500" textAlign="center" color="brand.text" cursor="pointer">
                      {product.name}
                    </Text>
                  </Link>
                  <Link passHref={true} href={'/prod/' + product.link}>
                    <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" className={styles.productHover}>
                      ПОДРОБНОСТИ
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
