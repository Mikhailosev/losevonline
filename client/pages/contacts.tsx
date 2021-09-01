import { Box, Flex, Heading, Img, Link, Text } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import useSWR from 'swr'
import Preloader from '../components/Preloader/Preloader'
const Contacts: React.FC<{}> = ({}): ReactElement | null => {
  const { data, error } = useSWR('http://localhost:1337/contacts')

  if (data && !error) {
    return (
      <Box as="main" padding={['5%', '5%', '5%', '5%', '1.5% 20%']} className="main">
        <Heading color="brand.text" fontWeight="600" mb="40px" textAlign="center">
          КОНТАКТНАЯ ИНФОРМАЦИЯ
        </Heading>
        <Flex flexDir={['column', 'column', 'column', 'row', 'row']}>
          <Flex mr="40px" maxW={['100%', '100%', '100%', '25%', '25%']} flexDir="column">
            <Flex flexDir="column">
              <Flex mb="20px">
                <Img mr="20px" src="/images/call.png" w="20px" />
                <Text color="brand.text" fontWeight="600">
                  Звоните
                </Text>
              </Flex>
              <Text>Телефоны: </Text>
              <Link textDecor="underline" href={'tel:' + data.phone}>
                {data.phone}
              </Link>
              <Link textDecor="underline" href={'tel:' + data.phone2}>
                {data.phone2}
              </Link>
              <Text mt="40px">Время работы с 8.00 до 17.00</Text>
            </Flex>
            <Flex mt="20px" mb="20px">
              <Img mr="20px" src="/images/email.svg" w="20px" />
              <Text color="brand.text" fontWeight="600">
                Пишите
              </Text>
            </Flex>
            <Text>Адрес: </Text>
            <Text maxW="300px">{data.address}</Text>
            <Flex mb="20px" mt="20px">
              <Img mr="20px" src="/images/paper-plane.svg" w="20px" />
              <Text color="brand.text" fontWeight="600">
                Электронная почта
              </Text>
            </Flex>
            <Link textDecor="underline" href={'mailto:' + data.email}>
              {data.email}
            </Link>
            <Flex mb="20px" mt="20px">
              <Img mr="20px" src="/images/book.svg" w="20px" />
              <Text color="brand.text" fontWeight="600" m="20px 0">
                Каталог{' '}
              </Text>
            </Flex>
            <Link mb="20px" maxW="300px" textDecor="underline" target="_blank" href={'http://localhost:1337' + data.catalogue.url}>
              Обзорный каталог
            </Link>
            <Flex>
              <Text color="#aaa" maxW="300px">
                Для получения печатных каталогов бандеролью, пожалуйста, сообщите нам свой почтовый адрес любым удобным способом
              </Text>
            </Flex>
          </Flex>
          <Flex w="100%" flexDir="column">
            <Flex mb="40px" alignItems="flex-start">
              <Img mr="20px" src="/images/map.svg" w="20px" />
              <Text color="brand.text" fontWeight="600">
                Приезжайте{' '}
              </Text>
            </Flex>
            <Text color="#aaa" mb="20px">
              Координаты для навигатора: 59.68424760193695, 30.66194757193788
            </Text>
            <iframe src="https://yandex.ru/map-widget/v1/-/CBUSq4rqKA" width="100%" height="450" frameBorder="0"></iframe>
          </Flex>
        </Flex>
      </Box>
    )
  }
  return <Preloader />
}
export default Contacts
