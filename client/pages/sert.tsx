import { Box, Img, Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import useSWR from 'swr'
import Preloader from '../components/Preloader/Preloader'
const Sert: React.FC<{}> = ({}): ReactElement | null => {
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_SERVER_URL}/certificates`)

  if (data && !error) {
    return (
      <Box as="main" padding={['5%', '5%', '5%', '5%', '1.5% 20%']} className="main">
        <Table colorScheme="brand" variant="striped">
          <Thead>
            <Tr>
              <Th>Имя документа</Th>

              <Th textAlign="end">Скачать</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((cert: any) => {
              return (
                <Tr key={cert}>
                  <Td>{cert.name}</Td>

                  <Td h="100%" display="flex" justifyContent="flex-end" pr="40px">
                    <a download href={`${process.env.NEXT_PUBLIC_SERVER_URL}` + cert?.document?.url}>
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
                    </a>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Имя документа</Th>

              <Th textAlign="end">Скачать</Th>
            </Tr>
          </Tfoot>
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
