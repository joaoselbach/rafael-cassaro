
import { Flex, Link as ChakraLink } from '@chakra-ui/react'
import { Icon } from '~/components/Icon'

interface MenuMobileLinkProps {
  href: string
  children: string
}

export const MenuMobileLink = ({
  href,
  children,
  ...rest
}: MenuMobileLinkProps) => {

  return (
    <ChakraLink
      href={href}
      display="flex"
      justifyContent="center"
      _hover={{ textDecoration: 'none' }}
      {...rest}
    >
      <Flex
        alignItems="center"
        gap="1rem"
        px="1rem"
        py=".8rem"
        textAlign="center"
        borderRadius=".4rem"
        fontSize="1.2rem"
        color="gray.400"
        fontWeight={500}
        transition="0.1s all ease"
        _hover={{ color: 'gray.100' }}
      >
        {children}
      </Flex>
    </ChakraLink>
  )
}
