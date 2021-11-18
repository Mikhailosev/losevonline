import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
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
  Link,
  List,
  ListItem,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React, { ReactElement, ReactNode } from 'react'
import styles from './Navbar.module.scss'

const Links = [
  {
    href: '/prod',
    name: 'Продукция',
    img: '/images/tag.png',
  },
  {
    href: '/sert',
    name: 'Сертификаты',
    img: '/images/certificate.png',
  },
  {
    href: '/info',
    name: 'Информация',
    img: '/images/info-button.png',
  },
  {
    href: '/contacts',
    name: 'Контакты',
    img: '/images/call.png',
  },
  {
    href: '/eng',
    name: 'Eng',
    img: '/images/earth-globe-with-continents-maps.png',
  },
]
const NavLink = ({ link, img, children }: { children: ReactNode; link: string; img: string }) => (
  <Link fontWeight="700" display="flex" justifyContent="flex-end" href={link} px={2} py={1} rounded={'md'}>
    <Button colorScheme="brand" color="black" leftIcon={<Img h="20px" src={img} />}>
      {children}
    </Button>
  </Link>
)
const NavLink2 = ({ link, img, name }: { name: string; link: string; img: string }) => (
  <Link passHref={true} href={link}>
    <Button
      px={2}
      py={1}
      rounded={'md'}
      mb="10px"
      display="flex"
      justifyContent="flex-end"
      aria-label="label"
      colorScheme="brand"
      fontWeight="700"
      color="black"
      leftIcon={img ? <Img h="20px" src={img} /> : <></>}
    >
      {name}
    </Button>
  </Link>
)
const Navbar: React.FC<{}> = ({}): ReactElement | null => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Drawer colorScheme="brand" isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader background="brand.400" color="black">
            Основная информация
          </DrawerHeader>

          <DrawerBody background="brand.400">
            {isOpen ? (
              <Flex className={styles.menu} data-aos="fade-right" justifyContent="center" flexDir="column" bg="brand.400" pb={4}>
                {Links.map((link) => (
                  <Box onClick={onClose}>
                    <NavLink2 img={link.img} link={link.href} key={link.name} name={link.name}></NavLink2>
                  </Box>
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
        as="nav"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
        position="fixed"
        top="0"
        zIndex="3"
        display={['grid', 'grid', 'grid', 'flex', 'flex']}
        gridTemplateColumns="repeat(5,1fr)"
        gridTemplateRows="repeat(2,1fr)"
        w="100vw"
        alignItems="center"
        h="80px"
        bg="brand.400"
        justifyContent="center"
      >
        <Box
          gridColumn="1/-1"
          mt={['10px', '10px', '10px', '0px', '0px']}
          justifySelf="center"
          minW="100px"
          ml={['0', '0', '0', '40px', '40px']}
        >
          <Link href="/">
            <Img h="60px" alt="Логотип компании" src="/images/black_2.png" />
          </Link>
        </Box>

        <Text
          display={['none', 'none', 'none', 'none', 'flex']}
          mr="50px"
          ml="20px"
          w="100%"
          lineHeight="22px"
          fontWeight="500"
          textAlign="start"
          letterSpacing="-1px"
          as="span"
          fontSize="20px"
        >
          <Link href="/">Современные системы отопления и вентляции объемных помещений</Link>
        </Text>
        <IconButton
          position={'absolute'}
          color="black"
          right="20px"
          bg="brand.400"
          colorScheme="brand"
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={['flex', 'flex', 'flex', 'none', 'none']}
          onClick={isOpen ? onClose : onOpen}
        />
        <List mr="40px" display={['none', 'none', 'none', 'flex', 'flex']} w="100%" justifyContent="flex-end" alignItems="center">
          <ListItem display="flex" flexDir="column" className={styles.navLink} fontWeight="bold" m="20px">
            <Link href="/prod">
              <Button colorScheme="brand" color="black" leftIcon={<Img h="20px" src="/images/tag.png" />}>
                Продукция
              </Button>
            </Link>
          </ListItem>

          <ListItem display="flex" flexDir="column" className={styles.navLink} fontWeight="bold" m="20px">
            <Link href="/sert">
              <Button colorScheme="brand" color="black" leftIcon={<Img h="20px" src="/images/certificate.png" />}>
                Сертификаты
              </Button>
            </Link>
          </ListItem>
          <ListItem display="flex" flexDir="column" className={styles.navLink} fontWeight="bold" m="20px">
            <Link href="/info">
              <Button colorScheme="brand" color="black" leftIcon={<Img h="20px" src="/images/info-button.png" />}>
                Информация
              </Button>
            </Link>
          </ListItem>
          <ListItem display="flex" flexDir="column" className={styles.navLink} fontWeight="bold" m="20px">
            <Link href="/contacts">
              <Button colorScheme="brand" color="black" leftIcon={<Img h="20px" src="/images/call.png" />}>
                Контакты
              </Button>
            </Link>
          </ListItem>
        </List>
      </Flex>
    </>
  )
}
export default Navbar
