import { Flex, Image, Text } from '@chakra-ui/react'

interface TextBoxIconProps {
  title: string
  children: string
}

export const TextBoxIcon = ({ title, children }: TextBoxIconProps) => {
  return (
    <Flex alignItems="center" flexDirection="column" gap=".6rem" maxW={250}>
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
