import { Box, Img, Link, Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import useSWR from 'swr'
import Preloader from '../components/Preloader/Preloader'
const Sert: React.FC<{}> = ({}): ReactElement | null => {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_SERVER_URL}/certificates`)
  console.log(data)
  if (data && !error) {
    return (
      <Box as="main" padding={['5%', '5%', '5%', '5%', '1.5% 20%']} className="main">
        <Table colorScheme="brand" variant="striped">
          <Thead>
            <Tr>
              <Th>Имя документа</Th>

              <Th textAlign="center"></Th>
              <Th textAlign="center"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((cert: any) => {
              return (
                <Tr key={cert}>
                  <Td >{cert.name}</Td>

                  <Td h="100%" w="26px">
                    <Link
                      w="26px"
                      margin="0 auto"
                      target="_blank"
                      rel="noreferrer"
                      download
                      href={`${process.env.NEXT_PUBLIC_SERVER_URL}` + cert?.file?.url}
                      display="flex"
                      justifyContent="center"
                    >
                      <Img
                        _hover={{
                          transition: 'all .3s',
                          transform: 'scale(1.3)',
                        }}
                        alt="Загрузить файл"
                        stroke="brand.500"
                        w="26px"
                        src="/images/download.svg"
                      />
                    </Link>
                  </Td>
                  <Td w="26px" h="100%">
                    <Link
                      _hover={{
                        transition: 'all .3s',
                        transform: 'scale(1.3)',
                      }}
                      w="26px"
                      margin="0 auto"
                      target="blank"
                      href={`${process.env.NEXT_PUBLIC_SERVER_URL}` + cert?.file?.url}
                      display="flex"
                      justifyContent="center"
                    >
                      <Img alt="Предпросмотр файла" stroke="brand.500" w="26px" src="/images/eye.svg" />
                    </Link>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>

          <TableCaption placement="top" fontSize="32px">
            Сертификаты
          </TableCaption>
        </Table>
      </Box>
    )
  }
  return <Preloader />
}
export default Sert
