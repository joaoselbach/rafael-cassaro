import { useRouter } from 'next/router'
import { useRef } from 'react'
import translates from '~/locales'

import { DropdownLang } from './DropdownLang'
import { MenuMobile } from './MenuMobile'
import { Link } from './Link'
import { Icon } from '../Icon'

import { CgMenuRight } from 'react-icons/cg'

import {
  Flex,
  HStack,
  IconButton,
  Image,
  Link as ChakraLink,
  useBreakpointValue,
  useDisclosure
} from '@chakra-ui/react'

export const Header = () => {
  const router = useRouter()
  const btnRef = useRef()

  const { locale } = router
  const { en, es, pt } = translates
  const t = locale === 'es' ? es : locale === 'en' ? en : pt


  const changeLanguage = e => {
    const locale = e
    router.push(router.pathname, router.asPath, { locale })
  }

  const {
    isOpen: isOpenMenuMobile,
    onClose: onCloseMenuMobile,
    onOpen: onOpenMenuMobile
  } = useDisclosure()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      alignItems="center"
      position="fixed"
      h="5rem"
      w="100%"
      bgColor="#0b0b0bb8"
      backdropFilter="blur(4px)"
      zIndex="2"
    >
      <Flex
        justifyContent="space-between"
        w="100%"
        maxW={1600}
        margin="0 auto"
        px={['.6rem', '2rem', '3rem']}
      >
        <ChakraLink display="flex" href="#home" _active={{ opacity: 0.8 }}>
          <Image src="/images/logo-icon-only.svg" />
        </ChakraLink>

        {isWideVersion && (
          <Flex gap="4rem" alignItems="center">
            <HStack
              as="nav"
              display={['none', 'none', 'none', 'flex']}
              spacing="1.2rem"
              color="gray.500"
              fontWeight="400"
              fontSize=".95rem"
            >
              <Link href="#home">{t.header.home}</Link>
              <Link href="#about">{t.header.about}</Link>
              <Link href="#works">{t.header.works}</Link>
              <Link href="#location">{t.header.location}</Link>
              <Link href="#faq">{t.header.faq}</Link>
            </HStack>

            <DropdownLang />
          </Flex>
        )}

        {!isWideVersion && (
          <Flex gap="1rem" alignItems="center">
            <DropdownLang />
            <IconButton
              aria-label="Open navigation"
              icon={<Icon icon={CgMenuRight} />}
              p=".5rem"
              h="95%"
              fontSize={['1.5rem', '1.6rem', '1.8rem']}
              color="gray.50"
              bgColor="gray.700"
              _hover={{ bgColor: 'gray.300' }}
              _focus={{ boxShadow: 'none' }}
              onClick={onOpenMenuMobile}
              ref={btnRef}
            />
          </Flex>
        )}
        <MenuMobile
          isOpenMenuMobile={isOpenMenuMobile}
          onCloseMenuMobile={onCloseMenuMobile}
          btnRef={btnRef}
        />
      </Flex>
    </Flex>
  )
}
