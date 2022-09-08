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
      p="1.2rem"
      borderRadius=".5rem"
      maxW={250}
      transition=".2s all ease"
      _hover={{ transform: 'translateY(-.2rem)' }}
    >
      <Flex alignItems="center" gap=".5rem">
        <Image src="/images/check.svg" />
        <Text fontWeight={400}>{title}</Text>
      </Flex>
      <Text textAlign="center" color="gray.400">
        {children}
      </Text>
    </Flex>
  )
}
