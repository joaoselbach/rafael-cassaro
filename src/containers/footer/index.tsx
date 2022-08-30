import { Flex, HStack, Image, Link, Text } from '@chakra-ui/react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { Icon } from '~/components/Icon'

export const Footer = () => {
  return (
    <Flex pt="6rem" flexDirection="column" alignItems="center" gap="2rem">
      <Image src="/images/logoFooter.svg" />
      <HStack>
        <Link
          transition=".2 all ease"
          _hover={{ transform: 'translateY(-2px)' }}
        >
          <Image src="/images/facebook.svg" />
        </Link>
        <Link
          transition=".2 all ease"
          _hover={{ transform: 'translateY(-2px)' }}
        >
          <Image src="/images/insta.svg" />
        </Link>
      </HStack>
      <Text color="gray.400" fontWeight={300} fontSize=".9rem">
        COPYRIGHT ©2022 RAFAEL CASSARO – ALL RIGHTS RESERVED.
      </Text>
    </Flex>
  )
}
