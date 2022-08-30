import { Box, Link as ChakraLink } from '@chakra-ui/react'

type LinkProps = {
  href: string
  children: string
}

export const Link = ({ href, children }: LinkProps) => {
  return (
    <Box
      as="a"
      href={href}
      display="flex"
      position="relative"
      cursor="pointer"
      color="gray.400"
      fontSize="1rem"
      fontWeight="semi-bold"
      letterSpacing="1px"
      transition="0.3s all ease"
      _hover={{ color: '#fff', _after: { width: '30%' } }}
      _after={{
        content: `""`,
        position: 'absolute',
        width: '0',
        height: '3px',
        bg: 'gold.500',
        left: '0',
        bottom: '-5px',
        transition: '0.3s all ease',
        borderRadius: '.15rem',
        filter: 'drop-shadow(0px 0px 8px gold.500)'
      }}
    >
      {children}
    </Box>
  )
}
