import { Flex, Img, Text } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
const FileCard: React.FC<{ data: Object }> = ({ data }): ReactElement | null => {
  return (
    <Flex
      data-aos="fade-right"
      mb="40px"
      m="40px 20px"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"
      borderRadius="15px"
      border="3px solid #eaeaea"
      padding="20px"
      alignItems="center"
      flexDir="column"
      justifyContent="space-between"
    >
      <Img mb="20px" objectFit="contain" width="150px" src="/images/pdf.png" />
      <Text mb="20px" w="200px" textAlign="center">
        {data.documentName}
      </Text>
      <Flex w="100%" justifyContent="space-around">
        <a download href={'http://localhost:1337' + data.document.url}>
          <Img alt="Загрузить файл" stroke="brand.500" w="26px" src="/images/download.svg" />
        </a>
      </Flex>
    </Flex>
  )
}
export default FileCard
