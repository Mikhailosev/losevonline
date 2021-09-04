import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import useSWR from 'swr'
import Preloader from '../components/Preloader/Preloader'
const About: React.FC<{}> = ({}): ReactElement | null => {
  const { data, error } = useSWR('/api/contacts')
  if (data && !error) {
    return (
      <Box as="main" padding={['5%', '5%', '5%', '5%', '1.5% 20%']} className="main">
        <Flex flexWrap={['wrap', 'wrap', 'wrap', 'wrap', 'nowrap']}>
          <Box color="#aaa" mb="40px" mr="80px" h="100%" pl="40px" mt="80px" borderLeft="3px solid #eaeaea" minW="25%">
            Жизнь слишком коротка, чтобы не получать удовольствия от дела, которым занимаешься, и от людей, с которыми работаешь.{' '}
          </Box>
          <Flex flexWrap="wrap">
            <Heading color="brand.text" mb="40px">
              О КОМПАНИИ
            </Heading>

            <Text mb="40px">
              ООО «Лосев» специализируется на поставке европейского оборудования для систем отопления, вентиляции и кондиционирования.
              Настоящий ассортимент ориентирован для использования на промышленных и коммерческих объектах: производственные цеха и
              небольшие мастерские, логистические комплексы и небольшие склады, торговые центры, спортивные залы, кинотеатры, религиозные
              помещения, гостиницы, бизнес-центры и т.д.
            </Text>

            <Text mb="40px">
              Наша цель подготовить конкурентное предложение, которое будет оптимальным для каждого конкретного случая. Мы не предлагаем (не
              продвигаем) одну какую-то конкретную марку. Изучив задачу, которая стоит перед клиентом, мы подготовим несколько вариантов
              инженерных решений, профессионально проконсультируем о плюсах и минусах того или иного решения, о нюансах выбора конкретного
              исполнения агрегатов, т.е. осветим не только преимущества, но и возможные недостатки каждого варианта. Поставка для нас не
              заканчивается фактом отгрузки, или истечением гарантийного срока, потому что мы понимаем - нет лучше рекламы, чем
              положительные отзывы клиентов.
            </Text>
            <Text mb="40px">Как дополнительная услуга возможна помощь в проектировании и шефмонтаж.</Text>
            <Text mb="40px">
              Предлагаемое оборудование, как правило, поставляется под заказ со склада на заводе или изготавливается по запросу, кроме
              этого, есть определённая сезонность. Поэтому чем раньше до отопительного сезона (реальной потребности в оборудовании) будет
              размещён заказ, тем более оперативно он будет выполнен на заводе и тем более интересную цену сможем предложить мы.{' '}
            </Text>
            <Box rounded="5px" background="brand.200" padding="40px">
              <Heading mb="40px">Свяжитесь с нами</Heading>
              <Flex flexWrap={['wrap', 'nowrap', 'nowrap', 'nowrap', 'nowrap']} justifyContent="space-around">
                <Flex justifyContent="flex-end" mb="40px" minW="50%" flexDir="column">
                  <Flex flexDir="column">
                    <Link textDecor="underline" href={'tel:' + data.phone}>
                      <b>Телефон: </b>
                      {data.phone}
                    </Link>
                    <Link textDecor="underline" href={'tel:' + data.phone2}>
                      {data.phone2}
                    </Link>
                  </Flex>
                  <Link textDecor="underline" href={'mailto:' + data.email}>
                    <b>E-mail:</b> {data.email}
                  </Link>
                </Flex>
                <Flex justifyContent="flex-end" mb="40px" minW="50%">
                  <Text>
                    <b>Почта: </b>
                    {data.address}
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
    )
  }
  return <Preloader />
}
export default About
