import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Img,
  useDisclosure,
  Text,
} from '@chakra-ui/react'
import AOS from 'aos'
import Link from 'next/link'
import React, { ReactElement, ReactNode, useEffect } from 'react'
import styles from './Footer.module.scss'
const Links = [
  {
    href: '/contacts',
    name: 'Контакты',
    img: '/images/call.png',
  },
  {
    href: '/about',
    name: 'О компании',
    img: '/images/group.svg',
  },
  {
    href: '/manufacturers',
    name: 'О производителях',
    img: '/images/manufacturer.png',
  },
  {
    href: '/contacts',
    name: 'Референции',
  },
  {
    href: '/eng',
    name: 'Eng',
    img: '/images/earth-globe-with-continents-maps.png',
  },
]
const NavLink = ({ link, img, children }: { children: ReactNode; link: string; img: string }) => (
  <Link fontWeight="700" display="flex" justifyContent="flex-end" href={link} px={2} py={1} rounded={'md'}>
    <Button colorScheme="brand" color="black" leftIcon={img && <Img h="20px" src={img} />}>
      {children}
    </Button>
  </Link>
)
const Footer: React.FC<{}> = ({}): ReactElement | null => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const date = new Date()
  return (
    <>
      <Drawer colorScheme="brand" isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader background="brand.400" color="black">
            Дополнительная информация
          </DrawerHeader>

          <DrawerBody background="brand.400">
            {isOpen ? (
              <Flex className={styles.menu} data-aos="fade-right" justifyContent="center" flexDir="column" bg="brand.400" pb={4}>
                {Links.map((link) => (
                  <NavLink img={link.img} link={link.href} key={link.name}>
                    {link.name}
                  </NavLink>
                ))}
              </Flex>
            ) : null}
          </DrawerBody>

          <DrawerFooter background="brand.400">
            <Button variant="outline" color="brand.400" background="black" mr={3} onClick={onClose}>
              Назад
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Flex
        boxShadow="1px 4px 15px 5px rgba(0,0,0,0.19)

        "
        zIndex="2"
        h="40px"
        w="100vw"
        background="brand.400"
        position="fixed"
        bottom="0px"
        left="0px"
        as="footer"
        gridTemplateColumns="repeat(6,1fr)"
        gridTemplateRows={isOpen ? '5fr 1fr' : '1fr'}
        display={['grid', 'grid', 'grid', 'none', 'none']}
        alignItems="center"
      >
        <Text onClick={isOpen ? onClose : onOpen} gridColumn="1/6" textAlign="end">
          Доп. информация
        </Text>
        <IconButton
          gridRow={isOpen ? '2/-1' : '1/-1'}
          gridColumn="6/-1"
          margin="0 15px 0 auto"
          color="black"
          bg="brand.400"
          colorScheme="brand"
          size={'xl'}
          icon={isOpen ? <ChevronDownIcon h="30px" w="30px" /> : <ChevronUpIcon h="30px" w="30px" />}
          aria-label={'Open Menu'}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>
      {!isOpen && (
        <Box
          boxShadow="1px 4px 15px 5px rgba(0,0,0,0.19)"
          zIndex="2"
          h="40px"
          w="100vw"
          background="brand.400"
          position="fixed"
          bottom="0px"
          left="0px"
          as="footer"
          p={['0', '0', '0', '0', '0 20% 0 20%']}
          display={['none', 'none', 'none', 'flex', 'flex']}
        >
          <Flex display={['none', 'none', 'none', 'flex', 'flex']} alignItems="center">
            <Link passHref={true} href="/">
              <IconButton
                rounded={'none'}
                colorScheme="brand"
                aria-label="Домашняя страница"
                icon={<Img src="/images/home.svg" h="20px" />}
              />
            </Link>
            <Link passHref={true} href="/contacts">
              <Button colorScheme="brand" rounded="none" color="black" fontSize="12px" fontWeight="400px">
                Контакты
              </Button>
            </Link>
            <Link passHref={true} href="/about">
              <Button colorScheme="brand" rounded="none" color="black" fontSize="12px" fontWeight="400px">
                О компании
              </Button>
            </Link>
            <Link passHref={true} href="/manufacturers">
              <Button colorScheme="brand" rounded="none" color="black" fontSize="12px" fontWeight="400px">
                О производителях
              </Button>
            </Link>
            <Link passHref={true} href="/references">
              <Button colorScheme="brand" rounded="none" color="black" fontSize="12px" fontWeight="400px">
                Референции
              </Button>
            </Link>
            <Link passHref={true} href="/eng">
              <Button colorScheme="brand" rounded="none" color="black" fontSize="12px" fontWeight="400px">
                ENG
              </Button>
            </Link>
            <Box m="0 0 0 auto">
              <Link passHref={true} href="/contacts">
                <Button colorScheme="brand" rounded="none" color="black" fontSize="12px" fontWeight="400px">
                  © 2008-{date.getFullYear()} ООО «Лосев»
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
      )}
    </>
  )
}
export default Footer
