import { useRouter } from 'next/router'
import translates from '~/locales'

import { MenuMobileSection } from './MenuMobileSection'
import { SolidButton } from '~/components/Buttons/SolidButton'

import {
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  Link
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
          alignItems="flex-start"
          flexDirection="column"
          mt="1rem"
          px="1.4rem"
        >
          <MenuMobileSection title="">
            <Link
              href="#contact"
              mt="1.5rem"
              _hover={{ textDecoration: 'none' }}
            >
              <SolidButton w="100%" fontSize=".90rem" px="1.5rem" py="1.85rem">
                {t.header.faq}
              </SolidButton>
            </Link>
          </MenuMobileSection>
        </Flex>
      </DrawerContent>
    </Drawer>
  )
}
