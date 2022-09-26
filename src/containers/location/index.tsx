import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { SolidButton } from '~/components/Buttons/SolidButton'
import StudioCaroussel from '~/components/Caroussel/studio'
import { Modal } from '~/components/Modal'
import translates from '~/locales'

export const Location = () => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

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
      <Flex position="relative" justifyContent="center">
        {/* <Image w={['100%', '60%', '60%', "80%", '100%']} src="/images/studio.png" /> */}
        <StudioCaroussel />
       
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
          <SolidButton w={['100%', '100%', '100%']} mt="2.5rem" onClick={onOpen}>
        {t.buttonContact}
      </SolidButton>
      <Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        </Flex>
      </VStack>

    </Flex>
  )
}
