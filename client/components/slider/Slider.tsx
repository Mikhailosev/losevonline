import { Search2Icon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Img } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { Carousel } from 'react-responsive-carousel'
import useSWR from 'swr'
import styles from './Slider.module.scss'
import Link from 'next/link'
const Slider: React.FC<{}> = ({}): ReactElement | null => {
  const { data } = useSWR('/main-pages')
  if (data) {
    return (
      <Box className={styles.slider} as="main" mt="80px" mb="40px">
        <Carousel autoPlay={true} infiniteLoop={true} swipeable={true}>
          {data.map((slide: any) => (
            <Box position="relative" key={slide}>
              <Img h="100vh" objectFit="cover" src={'/' + slide.slidePhoto.url} />
              <Flex
                fontSize={['40px', '40px', '40px', '60px', '60px']}
                flexDirection={['column', 'column', 'column', 'row', 'row']}
                w="100%"
                justifyContent="space-between"
                position="absolute"
                zIndex="2"
                left="0px"
                bottom="160px"
                alignItems="center"
              >
                <Heading
                  fontSize={['25px', '25px', '25px', '60px', '60px']}
                  as="h1"
                  className={styles.sliderName}
                  ml={['0', '0', '0', '40px', '40px']}
                  mb={['20px', '20px', '20px', '0', '0']}
                >
                  {slide.slideName}
                </Heading>
                <Flex fontSize="20px" alignItems="center" flexDir="column" className={styles.sliderDescription}>
                  {slide.description}
                  <Link passHref={true} href="/products">
                    <Button marginTop="20px" colorScheme="brand" color="black" rightIcon={<Search2Icon />} w="150px">
                      К продукции
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Box>
          ))}
        </Carousel>
      </Box>
    )
  } else {
    return <></>
  }
}
export default Slider
