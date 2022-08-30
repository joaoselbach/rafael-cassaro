import translates from '~/locales'
import { useRouter } from 'next/router'

import { SolidButton } from '~/components/Buttons/SolidButton'
import {  Flex, Heading, Text } from '@chakra-ui/react'

export const Hero = () => {
  const router = useRouter()

  const { locale } = router
  const { en, es, pt } = translates
  const t = locale === 'es' ? es : locale === 'en' ? en : pt

  return (
    <Flex
      id="home"
      justifyContent="center"
      alignItems="flex-start"
      flexDirection="column"
      w="100%"
      h="100%"
      pt={['10rem', 0, 0]}
      minH={['80vh', '100vh', '100vh']}
      maxW={1600}
      margin="0 auto"
      px={['.6rem', '2rem', '3rem']}
    >
      <Flex
        flex="1"
        flexDirection="column"
        alignItems={["center", "center", "flex-start"]}
        textAlign={['center', 'center', 'inherit']}
        placeContent="center"
        maxW={1000}
      >
        <Heading
          fontFamily="Roboto"
          fontSize={['2rem', '3rem', '4.3rem']}
          color="gray.50"
          fontWeight={400}
        >
          {t.hero.title}
        </Heading>
        <Text pb="2rem" color="gray.500" fontSize="1.3rem" mt="2rem">
          {t.hero.description}
        </Text>
        <SolidButton
          mt="2rem"
          fontSize="1.2rem"
          px="2rem"
          py={["1.8rem", "2rem"]}
          w={['100%', "100%", '50%']}
        >
          {t.hero.button}
        </SolidButton>
      </Flex>
      {/* <Link alignSelf="center" href="#about">
        <Lottie
          isClickToPauseDisabled={true}
          options={defaultOptions}
          width="14%"
        />
      </Link> */}
    </Flex>
  )
}
