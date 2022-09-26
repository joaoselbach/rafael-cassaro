import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import translates from '~/locales'

interface StudioProps {
  src: string
}

export const Studio = ({ src }: StudioProps) => {
  const router = useRouter()

  const [showStudio, setShowStudio] = useState(false)

  const { locale } = router
  const { en, es, pt } = translates
  const t = locale === 'es' ? es : locale === 'en' ? en : pt

  return (
    <Flex>
      <Image borderRadius="2rem" marginInline="auto" src={src} w={['100%', '60%', '60%', '80%']} />
      <Box
        position="absolute"
        display="flex"
        cursor="pointer"
        borderRadius="2rem"
        left={["0%", "10%", "10%", "10%"]}
        h={showStudio === false ? '100%' : '8%'}
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
          color="gray.50"
        >
          {showStudio ? t.location.studio.close : t.location.studio.open} <ChevronRightIcon />
        </Text>
      </Box>
    </Flex>
  )

}
