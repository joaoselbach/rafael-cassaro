import { useRouter } from 'next/router'
import translates from '~/locales'

import { MenuMobileSection } from './MenuMobileSection'
import { SolidButton } from '~/components/Buttons/SolidButton'
import { MenuMobileLink } from './MenuMobileLink'
import { DropdownLang } from '../DropdownLang'

import {
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  Link,
  HStack,
  Image
} from '@chakra-ui/react'

interface MenuMobileProps {
  onCloseMenuMobile: () => void
  isOpenMenuMobile: boolean
  btnRef: any
}

export const MenuMobile = ({
  isOpenMenuMobile,
  onCloseMenuMobile,
  btnRef
}: MenuMobileProps) => {
  const router = useRouter()

  const { locale } = router
  const { en, es } = translates
  const t = locale === 'es' ? es : en

  const changeLanguage = e => {
    const locale = e
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <Drawer
      placement="right"
      isOpen={isOpenMenuMobile}
      onClose={onCloseMenuMobile}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent bgColor="gray.800" overflow="auto">
        <DrawerCloseButton
          fontSize="1rem"
          p="1.2rem"
          color="gray.300"
          bgColor="gray.700"
          zIndex="10"
          _active={{
            transform: 'scale(0.96)'
          }}
          _focus={{
            boxShadow: 'none'
          }}
          _hover={{ bgColor: 'gray.300' }}
        />
        <Flex
          alignItems="center"
          flexDirection="column"
          mt="1rem"
          px="1.4rem"
        >
          <Image src="/images/logoFooter.svg" mt="2rem"  />
          <MenuMobileSection>
            <MenuMobileLink href="/">{t.header.home}</MenuMobileLink>
            <MenuMobileLink href="/#about">{t.header.about}</MenuMobileLink>
            <MenuMobileLink href="/#works">{t.header.works}</MenuMobileLink>
            <MenuMobileLink href="/#location">
              {t.header.location}
            </MenuMobileLink>
          </MenuMobileSection>
          <MenuMobileSection borderTopWidth={1}>
            <Flex w="100%" justifyContent="space-between" px="2rem">
              <HStack>
                <Link
                  transition=".2 all ease"
                  _hover={{ transform: 'translateY(-2px)' }}
                >
                  <Image src="/images/facebook.svg" />
                </Link>
                <Link
                  transition=".2 all ease"
                  _hover={{ transform: 'translateY(-2px)' }}
                >
                  <Image src="/images/insta.svg" />
                </Link>
              </HStack>
              <DropdownLang />
            </Flex>
          </MenuMobileSection>
        </Flex>
      </DrawerContent>
    </Drawer>
  )
}
