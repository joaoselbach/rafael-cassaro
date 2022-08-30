import { Button as ChakraButton, Image } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  fontSize: string
  w?: any
  mt?: string
  px: string
  py: any
}

export const SolidButton = ({ children, fontSize, w, mt, py, px }: ButtonProps) => {
  return (
    <ChakraButton
      px={px}
      py={py}
      w={w}
      mt={mt}
      fontSize={fontSize}
      bgColor="gold.500"
      textTransform="uppercase"
      gap=".5rem"
      color="#fff"
      alignItems="center"
      fontWeight="bold"
      transition="0.2s all ease"
      _hover={{ filter: 'drop-shadow(0px 0px 10px #c2ad602a)' }}
      _active={{ opacity: 0.9 }}
      _focus={{ border: 'none' }}
    >
      {children}
    </ChakraButton>
  )
}
