import { AspectRatio, Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
const manufacturers: React.FC<{}> = ({}): ReactElement | null => {
  return (
    <Box as="main" padding={['5%', '5%', '5%', '5%', '1.5% 20%']} className="main">
      <Heading mb="40px" textAlign="center">
        О ПРОИЗВОДИТЕЛЯХ
      </Heading>
      <Flex mb="40px" flexWrap="wrap" justifyContent="center">
        <Img m="20px" objectFit="contain" mr="40px" src="/images/cmt-logo.png" />
        <Flex flexDir="column">
          <Heading mt="40px" mb="40px" as="h3">
            CMT clima
          </Heading>
          <Text>
            Инновационная и динамично развивающаяся организация, работающая через дилерскую сеть более чем в 40 странах мира. CMT S.r.l.
            была основана в 1976 году, унаследовав уникальное богатство технологий и общих знаний в области производства воздухонагревателей
            и вентиляционного оборудования от её создателей, начавших профессиональную деятельность в этой сфере в 50-ые годы. Наши
            технологические инновации представляют собой точку отсчета в области рекуперативных газовых воздухонагревателей.
          </Text>
        </Flex>
        <AspectRatio m="40px" minW="300px" ratio={1}>
          <iframe title="naruto" src="https://www.youtube.com/embed/h5VJQOTH8eo" allowFullScreen />
        </AspectRatio>
      </Flex>
      <Flex mb="40px" flexWrap="wrap" justifyContent="center">
        <Img m="20px" objectFit="contain" mr="40px" src="/images/wntwrm-logo.png" />
        <Flex flexDir="column">
          <Heading mt="40px" mb="40px" as="h3">
            Winterwarm
          </Heading>
          <Text>
            Является ведущим европейским производителем навесных газовых воздухонагревателей уже более 75 лет. Продукция Winterwarm является
            оптимальной при выборе отопительного прибора благодаря надежной конструкции и современным технологиям производства. Что в
            сочетании с продуманными инвестиционными затратами делает Winterwarm лидером в данном секторе.
          </Text>
        </Flex>
        <AspectRatio m="40px" minW="300px" ratio={1}>
          <iframe title="naruto" src="https://www.youtube.com/embed/iwmearVaemc" allowFullScreen />
        </AspectRatio>
      </Flex>
      <Flex mb="40px" flexWrap="wrap" justifyContent="center">
        <Img m="20px" objectFit="contain" mr="40px" src="/images/fbr-logo.png" />
        <Flex flexDir="column">
          <Heading mt="40px" mb="40px" as="h3">
            F.B.R. Bruciatori
          </Heading>
          <Text>
            Является идеальным партнером для фирм, которые считают Качество абсолютной ценностью. Компания была основана 1 апреля 1969 года.
            Консолидированный опыт компании F.B.R. в союзе с инновационным и открытым духом позволили получить признание продукции F.B.R. на
            основных международных рынках: продажа наших горелок осуществляется в 80 странах мира.
          </Text>
        </Flex>
        <AspectRatio m="40px" minW="300px" ratio={1}>
          <iframe title="naruto" src="https://www.youtube.com/embed/VXPhX5hvafY" allowFullScreen />
        </AspectRatio>
      </Flex>
    </Box>
  )
}
export default manufacturers
