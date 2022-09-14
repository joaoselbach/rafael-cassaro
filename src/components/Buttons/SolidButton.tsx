import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  bgColor?: string
  mt?: any
  w?: any
  maxWidth?: number
} & ChakraButtonProps

export const SolidButton = ({
  children,
  bgColor = 'gold.500' ,
  mt,
  w,
  maxWidth,
  ...rest
}: ButtonProps) => {
  return (
    <ChakraButton
      gap=".5rem"
      py={["1.8rem", "1.8rem", "1.8rem", '1.8rem', "2rem"]}
      px="1.4rem"
      mt={mt}
      w={w}
      maxWidth={maxWidth}
      alignItems="center"
      borderRadius=".4rem"
      fontWeight="bold"
      fontSize={['.9rem', '.95rem', '.95rem', '.95rem', '1rem']}
      color="gray.50"
      bgColor={bgColor}
      transition="0.2s all ease"
      _hover={{ filter: 'brightness(92%)' }}
      _active={{ filter: 'brightness(86%)' }}
      _focus={{ border: 'none' }}
      {...rest}
    >
      {children}
    </ChakraButton>
  )
}
