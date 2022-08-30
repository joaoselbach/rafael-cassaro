import MenuLi from './MenuLi'

import { FaChevronDown } from 'react-icons/fa'

import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { Icon } from '../Icon'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import translates from '~/locales'

export const DropdownLang = () => {
  const router = useRouter()
  const btnRef = useRef()

  const { locale } = router
  const { en, es } = translates
  const t = locale === 'es' ? es : en

  const changeLanguage = e => {
    const locale = e
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<FaChevronDown size={12} />}
        alignItems="center"
        gap=".75rem"
        mx="0.25rem"
        px="1rem"
        py="1.5rem"
        borderRadius=".3rem"
        bgColor="gray.700"
        fontWeight="normal"
        _hover={{ bg: 'gray.700' }}
        _active={{ bg: 'gray.700' }}
      >
        {locale === 'es' && <Image w="1.7rem" src="/images/es.svg" />}
        {locale === 'en' && <Image w="1.7rem" src="/images/us.svg" />}
        {locale === 'pt' && <Image w="1.7rem" src="/images/pt.svg" />}
      </MenuButton>
      <MenuList
        bgColor="gray.700"
        borderColor="gray.800"
        color="gray.400"
        minWidth={24}
        p="0"
        borderRadius=".5rem"
        boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.2)"
      >
        {locale === 'pt' && (
          <>
            <MenuLi
              icon="/images/us.svg"
              onClick={() => changeLanguage('en')}
            />
            <MenuLi
              icon="/images/es.svg"
              onClick={() => changeLanguage('es')}
            />
          </>
        )}
        {locale === 'en' && (
          <>
            <MenuLi
              icon="/images/pt.svg"
              onClick={() => changeLanguage('pt')}
            />
            <MenuLi
              icon="/images/es.svg"
              onClick={() => changeLanguage('es')}
            />
          </>
        )}
        {locale === 'es' && (
          <>
            <MenuLi
              icon="/images/us.svg"
              onClick={() => changeLanguage('en')}
            />
            <MenuLi
              icon="/images/pt.svg"
              onClick={() => changeLanguage('pt')}
            />
          </>
        )}
      </MenuList>
    </Menu>
  )
}
