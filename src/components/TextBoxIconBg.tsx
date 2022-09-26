import { Flex, Image, Text } from '@chakra-ui/react'

interface TextBoxIconProps {
  title: string
  children: string
}

export const TextBoxIconBg = ({ title, children }: TextBoxIconProps) => {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      gap=".6rem"
      bgColor="gray.700"
      py="2rem"
      px=".75rem"
      minW={300}
      borderRadius=".5rem"
      minH={[140, 160, 170, 170, 150]}
      maxW={300}
      transition=".2s all ease"
      _hover={{ transform: 'translateY(-.2rem)' }}
    >
      <Flex alignItems="center" gap=".5rem">
        <Image src="/images/check.svg" />
        <Text fontWeight={400} >{title}</Text>
      </Flex>
      <Text textAlign="center" color="gray.400">
        {children}
      </Text>
    </Flex>
  )
}
