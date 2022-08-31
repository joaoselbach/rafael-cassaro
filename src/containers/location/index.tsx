import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import translates from '~/locales'

export const Location = () => {
  const router = useRouter()
  const [showStudio, setShowStudio] = useState(false)

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
      <Flex position="relative">
        <Image w={['100%', '60%', '60%', '80%']} src="/images/studio.png" />
        <Box
          position="absolute"
          display="flex"
          cursor="pointer"
          h={showStudio === false ? '100.3%' : '8%'}
          bottom="0"
          w={['100%', '60%', '60%', '80%']}
          mt="-1px"
          justifyContent="center"
          backgroundColor="#000000cf"
          transition="0.2s all ease"
          _hover={{ backgroundColor: '#000000b9' }}
          onClick={() => {
            setShowStudio(showStudio === true ? false : true)
          }}
        >
          <Text
            fontWeight={500}
            fontSize="1rem"
            alignSelf="center"
            justifySelf="center"
          >
            {showStudio ? 'Esconder foto' : 'Mostrar estúdio'} <ChevronRightIcon />
          </Text>
        </Box>
      </Flex>
      <VStack
        alignItems={['center', 'center', 'flex-start']}
        textAlign={['center', 'center', 'left']}
        flexDirection="column"
        maxW={900}
      >
        <Text
          color="gray.50"
          fontSize="2rem"
          letterSpacing="8px"
          textAlign="center"
          alignSelf={['center', 'center', 'flex-start']}
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

        <Flex
          pt="2rem"
          alignItems={['center', 'center', 'flex-start']}
          flexDirection="column"
        >
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
        <Flex
          pt="2rem"
          alignItems={['center', 'center', 'flex-start']}
          flexDirection="column"
        >
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
        <Flex
          pt="2rem"
          alignItems={['center', 'center', 'flex-start']}
          flexDirection="column"
        >
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
