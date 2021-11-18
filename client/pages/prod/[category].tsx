import { Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import React, { ReactElement, useState } from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import useSWR from 'swr'
import FileCard from '../../components/FileCard/FileCard'
const Category: React.FC<{}> = ({}): ReactElement | null => {
  const [tab, setTab] = useState('description')
  const router = useRouter()
  const { category } = router.query
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_SERVER_URL}/categories/?link=` + category)
  console.log(data)
  if (error) {
    return (
      <Box as="main" className="main">
        что-то пошло не так
      </Box>
    )
  }

  if (data && !error && category?.length) {
    return (
      <>
        <Box as="main" padding={['5%', '5%', '5%', '5%', '1.5% 20%']} className="main">
          <Heading textAlign="center" mb="40px">
            {data[0].name}
          </Heading>
          <Flex
            maxW="600px"
            maxH="400px"
            flexDirection={['column', 'row', 'row', 'row', 'row']}
            justifyContent="space-between"
            flexWrap="wrap"
            mb="40px"
          >
            <Button
              textAlign="start"
              mt="20px"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
              colorScheme="brand"
              color="brand.text"
              onClick={() => {
                setTab('description')
              }}
              variant={tab === 'description' ? 'solid' : 'outline'}
              rounded="5px"
            >
              Описание
            </Button>
            <Button
              textAlign="start"
              mt="20px"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
              colorScheme="brand"
              color="brand.text"
              onClick={() => {
                setTab('documents')
              }}
              variant={tab === 'documents' ? 'solid' : 'outline'}
              rounded="5px"
            >
              Документы и описание
            </Button>
            {data[0].price_documents.length > 0 && (
              <Button
                textAlign="start"
                mt="20px"
                boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;"
                colorScheme="brand"
                color="brand.text"
                onClick={() => {
                  setTab('prices')
                }}
                variant={tab === 'prices' ? 'solid' : 'outline'}
                rounded="5px"
              >
                Цены
              </Button>
            )}
          </Flex>
          {tab === 'description' && (
            <SRLWrapper>
              <div dangerouslySetInnerHTML={{ __html: data[0].description }} className="fadeIn ck-content"></div>
            </SRLWrapper>
          )}
          {/* TODO MOVE TO COMPONENT */}
          {tab === 'documents' && (
            <div className="fadeIn">
              <Flex
                mt="20px"
                flexDir={['column', 'row', 'row', 'row', 'row']}
                alignItems={['center', 'normal', 'normal', 'normal', 'normal']}
                justifyContent="space-between"
                flexWrap="wrap"
              >
                {data[0].documents.map((document: any) => {
                  return <FileCard key={document} data={document} />
                })}
                {data[0].link === 'gazovye-i-dizelnye-gorelki' && (
                  <Flex w="280px" flexDir="column" padding="20px" border="1px solid #fec91a">
                    <Text mb="10px">
                      Инструкции по эксплуатации, копии сертификатов на горелки предоставляются по запросу или смотри сайты производителей:
                    </Text>
                    <Link mb="10px" href="https://www.fbr.it">
                      www.fbr.it
                    </Link>
                    <Link mb="10px" href="https://www.riello.com">
                      www.riello.com
                    </Link>
                  </Flex>
                )}
              </Flex>
            </div>
          )}
          {tab === 'prices' && (
            <div className="fadeIn">
              <Flex
                mt="20px"
                flexDir={['column', 'row', 'row', 'row', 'row']}
                alignItems={['center', 'normal', 'normal', 'normal', 'normal']}
                justifyContent="space-between"
                flexWrap="wrap"
              >
                {data[0].price_documents.map((document: any) => {
                  return <FileCard key={document} data={document} />
                })}
              </Flex>
            </div>
          )}
        </Box>
      </>
    )
  }
  return <></>
}
export default Category
