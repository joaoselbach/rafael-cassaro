import { Avatar, Divider, Flex, Image, Text, VStack } from '@chakra-ui/react'

interface TestimonialProps {
  name: string
  src: string
  description: string
}

export const Testimonial = ({ description, name, src }: TestimonialProps) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      p={["1.2rem", "2rem"]}
      maxW={400}
      minH={428}
      gap="2rem"
      borderRadius="1rem"
      bgColor="gray.700"
    >
      <VStack alignItems="flex-start" textAlign="left" spacing="1rem">
        <Image w="2rem" src="/images/quote.svg" />
        <Text color="gray.200">{description}</Text>
      </VStack>

      <Flex gap="1rem" borderTopWidth={1} pt="2rem" borderTopColor="gray.600">
        <Avatar src={src} size="lg" />
        <VStack alignItems="flex-start" fontWeight={700} fontSize="1.2rem">
          <Text>{name}</Text>
          <Image src="/images/stars.svg" />
        </VStack>
      </Flex>
    </Flex>
  )
}
