import { Flex, Image, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import translates from '~/locales'

export const Location = () => {
  const router = useRouter()

  const { locale } = router
  const { en, es, pt } = translates
  const t = locale === 'es' ? es : locale === 'en' ? en : pt

  return (
    <Flex
      id="location"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'column', 'row']}
      alignItems="center"
      gap="4rem"
      pt="8rem"
      px={['1rem', '1.5rem', '3rem']}
    >
      <Image
        w={['100%', '60%', '60%', '40%']}
        mr={['2.6rem', '2.6rem', '2.6rem', '2.6rem', 0]}
        src="/images/studio.png"
      />
      <VStack alignItems="flex-start" flexDirection="column" maxW={900}>
        <Text
          color="gray.50"
          fontSize="2rem"
          letterSpacing="8px"
          textAlign="center"
          py={['1rem', '2rem']}
        >
          {t.location.title}
        </Text>
        <Text
          color="gray.300"
          letterSpacing="1px"
          fontSize="1.2rem"
          fontWeight={300}
          mt="1.8rem"
          maxW={700}
        >
          {t.location.description}
        </Text>

        <Flex pt="2rem" alignItems="flex-start" flexDirection="column">
          <Text fontSize="1.2rem" color="gray.600" letterSpacing="8px">
            {t.location.confort.title}
          </Text>
          <Text
            color="gray.300"
            letterSpacing="1px"
            fontSize="1.2rem"
            fontWeight={300}
          >
            {t.location.confort.description}
          </Text>
        </Flex>
        <Flex pt="2rem" alignItems="flex-start" flexDirection="column">
          <Text fontSize="1.2rem" color="gray.600" letterSpacing="8px">
            {t.location.professional.title}
          </Text>
          <Text
            color="gray.300"
            letterSpacing="1px"
            fontSize="1.2rem"
            fontWeight={300}
          >
            {t.location.professional.description}
          </Text>
        </Flex>
        <Flex pt="2rem" alignItems="flex-start" flexDirection="column">
          <Text fontSize="1.2rem" color="gray.600" letterSpacing="8px">
            {t.location.clean.title}
          </Text>
          <Text
            color="gray.300"
            letterSpacing="1px"
            fontSize="1.2rem"
            fontWeight={300}
          >
            {t.location.clean.description}
          </Text>
        </Flex>
      </VStack>
    </Flex>
  )
}
