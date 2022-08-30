
import { Flex, Link as ChakraLink } from '@chakra-ui/react'
import { Icon } from '~/components/Icon'

interface MenuMobileLinkProps {
  href: string
  children: string
  icon: any
}

export const MenuMobileLink = ({
  href,
  icon,
  children,
  ...rest
}: MenuMobileLinkProps) => {

  return (
    <ChakraLink
      href={href}
      _hover={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      _active={{ filter: 'brightness(96%)' }}
      {...rest}
    >
      <Flex
        alignItems="center"
        gap="1rem"
        px="1rem"
        py=".8rem"
        borderRadius=".4rem"
        fontSize="1.05rem"
        color="gray.400"
        fontWeight={500}
        transition="0.1s all ease"
        _hover={{ bgColor: 'gray.300' }}
      >
        <Icon icon={icon} fontSize="1.9rem" fill="green.primary"/>
        {children}
      </Flex>
    </ChakraLink>
  )
}
