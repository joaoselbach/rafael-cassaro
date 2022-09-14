import { Button } from '@chakra-ui/react'

type ButtonProps = {
  children: string
  px: string
  type: any
  isLoading?: boolean
}

export const SubmitButton = ({
  children,
  px,
  type,
  isLoading,
  ...rest
}: ButtonProps) => {
  return (
    <Button
      type={type}
      px={px}
      mt="1rem"
      w="100%"
      py={["1.8rem", "1.8rem", "1.8rem", '1.8rem', "2rem"]}
      fontSize={['.9rem', '.95rem', '.95rem', '.95rem', '1rem']}
      color="gray.50"
      bgColor="gold.500"
      borderRadius=".4rem"
      transition="0.2s all ease"
      _hover={{ filter: 'brightness(92%)' }}
      _active={{ filter: 'brightness(86%)' }}
      _focus={{ border: 'none' }}
      isLoading={isLoading}
      {...rest}
    >
      {children}
    </Button>
  )
}
